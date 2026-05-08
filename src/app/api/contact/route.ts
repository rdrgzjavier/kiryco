import { NextResponse } from "next/server";
import { ADMIN_EMAIL, rows, sendMail, tenloEmailShell } from "@/lib/mail";

export async function POST(request: Request) {
  const data = await request.json();
  const html = tenloEmailShell("Nuevo contacto desde Tenlo", rows({
    "Nombre del adulto": data.name,
    Email: data.email,
    Mensaje: data.message
  }));
  const result = await sendMail({ to: ADMIN_EMAIL, subject: "CONTACTO", html, replyTo: data.email });
  return NextResponse.json({ ok: true, email: result });
}
