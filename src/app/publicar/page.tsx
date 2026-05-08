"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, centers, municipalities } from "@/lib/mock-data";

export default function PublishPage() {
  const [ok, setOk] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSending(true);
    const response = await fetch("/api/publish", { method: "POST", body: new FormData(form) });
    setSending(false);
    if (response.ok) setSent(true);
  }

  return (
    <div className="section-shell max-w-4xl">
      <p className="label">Estado inicial: pendiente de revisión</p>
      <h1 className="page-title">Publicar</h1>
      <p className="lead">Para publicar necesitas estar registrado o identificarte con tu cuenta. Toda publicación empieza como pendiente de revisión antes de aparecer públicamente.</p>
      {sent ? (
        <div className="mt-8 rounded-2xl border border-line bg-soft p-5 text-sm font-semibold leading-6 text-slatecopy">Publicación enviada a revisión. Estado: pending_review.</div>
      ) : (
        <form className="mt-8 grid gap-6 rounded-2xl border border-line bg-panel p-5 md:p-8" onSubmit={submit}>
          <section className="grid gap-4 rounded-xl border border-line bg-soft p-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold text-ink">Tu cuenta</h2>
              <p className="mt-1 text-sm leading-6 text-muted">Identifícate o crea cuenta antes de enviar la publicación.</p>
            </div>
            <label className="field-label">Email de usuario<input name="contactEmail" required type="email" className="field" placeholder="tu@email.com" /></label>
            <label className="field-label">Contraseña<input name="accountPassword" required type="password" minLength={10} pattern="(?=.*[A-Za-z])(?=.*\d).{10,}" className="field" placeholder="Letras y números" /></label>
            <Link href="/login" className="text-sm font-semibold text-petrol hover:text-ink md:col-span-2">No tengo cuenta todavía</Link>
          </section>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="field-label">Categoría<select name="category" required className="field" defaultValue=""><option value="" disabled>Selecciona categoría</option>{categories.map((c) => <option key={c.id}>{c.name}</option>)}</select></label>
            <label className="field-label">Zona<select name="municipality" required className="field" defaultValue=""><option value="" disabled>Selecciona zona</option>{municipalities.map((m) => <option key={m.id}>{m.name}</option>)}</select></label>
            <label className="field-label md:col-span-2">Título<input name="title" required className="field" placeholder="Ej. Lote uniforme infantil en buen estado" /></label>
            <label className="field-label md:col-span-2">Descripción<textarea name="description" required className="field min-h-32 py-3" placeholder="Describe el recurso sin incluir datos personales de menores." /></label>
            <label className="field-label">Centro relacionado opcional<select name="center" className="field" defaultValue=""><option value="">No indicado</option>{centers.map((c) => <option key={c.id}>{c.name}</option>)}</select></label>
            <label className="field-label">Edad recomendada opcional<input name="recommendedAge" className="field" placeholder="Ej. 6-8 años" /></label>
            <label className="field-label">Precio opcional<input name="price" className="field" type="number" min="0" placeholder="0" /></label>
            <label className="field-label md:col-span-2">Fotos opcionales<input name="photos" className="field py-2.5" type="file" multiple accept="image/*" /></label>
          </div>
          <label className="rounded-xl border border-line bg-soft p-4 text-sm font-semibold leading-6 text-slatecopy">
            <input required type="checkbox" checked={ok} onChange={(event) => setOk(event.target.checked)} className="mr-2 h-4 w-4 rounded border-line" />
            Confirmo que esta publicación no incluye datos personales de menores, fotografías de menores ni información sensible.
          </label>
          <button className="btn-primary w-full md:w-fit" type="submit" disabled={!ok || sending}>{sending ? "Enviando..." : "Enviar a revisión"}</button>
        </form>
      )}
    </div>
  );
}
