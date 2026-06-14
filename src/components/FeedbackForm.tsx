"use client";

import { useState } from "react";

type FeedbackFormProps = {
  context?: string;
  itemId?: string;
};

export default function FeedbackForm({ context = "general", itemId = "" }: FeedbackFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        context,
        itemId,
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
      })
    });

    const result = await response.json();
    if (!response.ok) {
      setStatus("error");
      setError(result.error || "No se pudo enviar la sugerencia.");
      return;
    }

    event.currentTarget.reset();
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Nombre
          <input name="name" className="input" placeholder="Tu nombre" autoComplete="name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email
          <input name="email" type="email" className="input" placeholder="tu@email.com" autoComplete="email" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-ink">
        ¿Qué echas en falta o qué mejorarías?
        <textarea name="message" required minLength={10} rows={6} className="input min-h-36 resize-y py-4" placeholder="Cuéntanos qué servicio, centro, recurso local o mejora te ayudaría a usar mejor Tenlo." />
      </label>
      {error ? <p className="text-sm font-semibold text-coral">{error}</p> : null}
      {status === "sent" ? <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">Gracias. Hemos recibido tu sugerencia y la revisaremos.</p> : null}
      <button type="submit" className="btn-primary w-full sm:w-fit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar sugerencia"}
      </button>
    </form>
  );
}
