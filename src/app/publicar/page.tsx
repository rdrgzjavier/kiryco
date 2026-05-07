"use client";

import { useState } from "react";
import { categories, centers, municipalities } from "@/lib/mock-data";

export default function PublishPage() {
  const [ok, setOk] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="section-shell max-w-4xl">
      <p className="label">Estado inicial: pendiente de revisión</p>
      <h1 className="page-title">Publicar</h1>
      <p className="lead">Toda publicación creada por familias o profesionales locales empieza como pendiente de revisión antes de aparecer públicamente.</p>
      {sent ? (
        <div className="mt-8 rounded-2xl border border-line bg-soft p-5 text-sm font-semibold leading-6 text-slatecopy">Publicación enviada a revisión. Estado: pending_review.</div>
      ) : (
        <form className="mt-8 grid gap-6 rounded-2xl border border-line bg-panel p-5 md:p-8" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="field-label">Categoría<select required className="field">{categories.map((c) => <option key={c.id}>{c.name}</option>)}</select></label>
            <label className="field-label">Zona<select required className="field">{municipalities.map((m) => <option key={m.id}>{m.name}</option>)}</select></label>
            <label className="field-label md:col-span-2">Título<input required className="field" placeholder="Ej. Lote uniforme infantil en buen estado" /></label>
            <label className="field-label md:col-span-2">Descripción<textarea required className="field min-h-32 py-3" placeholder="Describe el recurso sin incluir datos personales de menores." /></label>
            <label className="field-label">Centro relacionado opcional<select className="field"><option>No indicado</option>{centers.map((c) => <option key={c.id}>{c.name}</option>)}</select></label>
            <label className="field-label">Edad recomendada opcional<input className="field" placeholder="Ej. 6-8 años" /></label>
            <label className="field-label">Precio opcional<input className="field" type="number" min="0" placeholder="0" /></label>
            <label className="field-label">Datos de contacto<input required className="field" placeholder="Email o teléfono del adulto" /></label>
            <label className="field-label md:col-span-2">Fotos opcionales<input className="field py-2.5" type="file" multiple accept="image/*" /></label>
          </div>
          <label className="rounded-xl border border-line bg-soft p-4 text-sm font-semibold leading-6 text-slatecopy">
            <input required type="checkbox" checked={ok} onChange={(event) => setOk(event.target.checked)} className="mr-2 h-4 w-4 rounded border-line" />
            Confirmo que esta publicación no incluye datos personales de menores, fotografías de menores ni información sensible.
          </label>
          <button className="btn-primary w-full md:w-fit" type="submit" disabled={!ok}>Enviar a revisión</button>
        </form>
      )}
    </div>
  );
}
