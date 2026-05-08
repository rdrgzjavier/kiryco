"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setStatus(response.ok ? "sent" : "error");
    if (response.ok) form.reset();
  }

  return (
    <form className="grid gap-4" onSubmit={submit}>
      <label className="field-label">Nombre del adulto<input name="name" className="field" required /></label>
      <label className="field-label">Email<input name="email" className="field" type="email" required /></label>
      <label className="field-label">Mensaje<textarea name="message" className="field min-h-28 py-3" required /></label>
      <button className="btn-primary w-fit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Enviando..." : "Enviar"}</button>
      {status === "sent" ? <p className="rounded-xl border border-line bg-soft p-4 text-sm font-semibold text-slatecopy">Mensaje recibido. Te responderemos lo antes posible.</p> : null}
      {status === "error" ? <p className="rounded-xl border border-coral bg-soft p-4 text-sm font-semibold text-ink">No se ha podido enviar el mensaje. Inténtalo de nuevo más tarde.</p> : null}
    </form>
  );
}
