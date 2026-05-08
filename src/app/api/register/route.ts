import { NextResponse } from "next/server";
import { ADMIN_EMAIL, rows, sendMail, tenloEmailShell } from "@/lib/mail";

export async function POST(request: Request) {
  const data = await request.json();
  const subject = `NUEVO REGISTRO + ${data.name || "Tenlo"}`;

  const adminHtml = tenloEmailShell("Nuevo registro en Tenlo", rows({
    "Nombre público": data.name,
    Email: data.email,
    Teléfono: data.phone,
    Municipio: data.municipality,
    "Centro relacionado": data.center,
    "Tipo de usuario": data.role
  }));

  const userHtml = tenloEmailShell("Bienvenido/a a Tenlo", `
    <p style="margin:0 0 14px;line-height:1.6">Hola ${data.name || ""},</p>
    <p style="margin:0 0 14px;line-height:1.6">Gracias por unirte a Tenlo. Estamos construyendo una plataforma para que familias, centros y servicios profesionales encuentren recursos útiles alrededor del colegio con privacidad y moderación.</p>
    <p style="margin:0;line-height:1.6">Tu perfil representa a una persona adulta o entidad. No solicitamos datos personales de menores ni fotos de menores.</p>
  `);

  const adminResult = await sendMail({ to: ADMIN_EMAIL, subject, html: adminHtml, replyTo: data.email });
  const userResult = await sendMail({ to: data.email, subject: "Bienvenido/a a Tenlo", html: userHtml });

  return NextResponse.json({ ok: true, adminEmail: adminResult, userEmail: userResult });
}
