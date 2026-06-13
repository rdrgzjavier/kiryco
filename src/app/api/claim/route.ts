import { NextResponse } from "next/server";
import { ADMIN_EMAIL, rows, sendMail, tenloEmailShell } from "@/lib/mail";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const data = await request.json();
  const supabase = createSupabaseServerClient();
  const { data: authData } = await supabase.auth.getUser();
  const user = authData.user;

  if (!user) {
    return NextResponse.json({ ok: false, error: "Debes iniciar sesión para validar una ficha." }, { status: 401 });
  }

  const payload = {
    user_id: user.id,
    entity_type: String(data.entityType || "provider"),
    entity_id: String(data.entityId || ""),
    entity_name: String(data.entityName || ""),
    requester_name: String(data.requesterName || ""),
    requester_email: String(data.requesterEmail || ""),
    requester_phone: String(data.requesterPhone || ""),
    role_description: String(data.roleDescription || ""),
    corrections: String(data.corrections || ""),
    official_website: String(data.officialWebsite || ""),
    image_url: String(data.imageUrl || "")
  };

  const { error } = await supabase.from("claim_requests").insert(payload);
  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
  }

  const adminHtml = tenloEmailShell("Solicitud de validación de ficha", rows({
    Ficha: payload.entity_name,
    Tipo: payload.entity_type,
    "ID interno": payload.entity_id,
    "Responsable": payload.requester_name,
    Email: payload.requester_email,
    Teléfono: payload.requester_phone,
    "Relación con la ficha": payload.role_description,
    "Correcciones propuestas": payload.corrections,
    "Web oficial": payload.official_website,
    "Imagen sugerida": payload.image_url
  }));

  const userHtml = tenloEmailShell("Hemos recibido tu solicitud", `
    <p style="margin:0 0 14px;line-height:1.6">Gracias. Hemos recibido tu solicitud para validar la ficha de <strong>${payload.entity_name}</strong>.</p>
    <p style="margin:0;line-height:1.6">El equipo de Tenlo revisará la información antes de publicar cambios visibles. Si necesitamos confirmar algún dato, contactaremos contigo por email o teléfono.</p>
  `);

  try {
    await sendMail({ to: ADMIN_EMAIL, subject: `VALIDAR FICHA + ${payload.entity_name}`, html: adminHtml, replyTo: payload.requester_email });
    await sendMail({ to: payload.requester_email, subject: "Hemos recibido tu solicitud en Tenlo", html: userHtml });
  } catch (mailError) {
    console.error("Solicitud guardada, pero no se pudo enviar el email", mailError);
  }

  return NextResponse.json({ ok: true });
}
