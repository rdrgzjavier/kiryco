import { NextResponse } from "next/server";
import { ADMIN_EMAIL, rows, sendMail, tenloEmailShell } from "@/lib/mail";

export async function POST(request: Request) {
  const form = await request.formData();
  const title = String(form.get("title") || "");
  const email = String(form.get("contactEmail") || "");
  const draftId = `${Date.now()}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "publicacion"}`;
  const origin = request.headers.get("origin") || "https://kiryco.vercel.app";
  const files = form.getAll("photos").filter((item) => typeof item !== "string").map((file) => (file as File).name).join(", ");

  const adminHtml = tenloEmailShell("Solicitud de publicación", `
    ${rows({
      Categoría: form.get("category"),
      Zona: form.get("municipality"),
      Título: title,
      Descripción: form.get("description"),
      "Centro relacionado": form.get("center"),
      "Edad recomendada": form.get("recommendedAge"),
      Precio: form.get("price"),
      "Email de contacto": email,
      Fotos: files || "Sin fotos adjuntas"
    })}
    <p style="margin:22px 0 0"><a href="${origin}/admin/borradores/${draftId}" style="display:inline-block;background:#0F172A;color:#fff;text-decoration:none;padding:12px 16px;border-radius:10px;font-weight:700">Revisar en web</a></p>
  `);

  const userHtml = tenloEmailShell("Hemos recibido tu publicación", `
    <p style="margin:0 0 14px;line-height:1.6">Gracias. Hemos recibido tu solicitud de publicación en Tenlo.</p>
    <p style="margin:0;line-height:1.6">La revisaremos antes de publicarla para proteger la privacidad de las familias y evitar datos personales de menores.</p>
  `);

  const adminResult = await sendMail({ to: ADMIN_EMAIL, subject: `SOLICITUD PUBLICACION + ${title || "Tenlo"}`, html: adminHtml, replyTo: email });
  const userResult = email ? await sendMail({ to: email, subject: "Hemos recibido tu publicación en Tenlo", html: userHtml }) : { sent: false, reason: "missing_user_email" };

  return NextResponse.json({ ok: true, draftId, adminEmail: adminResult, userEmail: userResult });
}
