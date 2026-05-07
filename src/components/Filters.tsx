import { categories, centers, municipalities, searchTags } from "@/lib/mock-data";

export default function Filters() {
  const featuredTags = searchTags.filter((tag) => ["Público", "Concertado", "Privado", "Bilingüe", "Católico", "Laico", "Guardería", "Robótica", "Natación", "Pádel", "Inglés", "Canguro", "Uniformes", "Material escolar"].includes(tag));

  return (
    <aside className="card h-fit p-5">
      <h2 className="text-lg font-semibold text-ink">Filtros</h2>
      <div className="mt-5 grid gap-4">
        <label className="field-label">Categoría<select className="field"><option>Todas</option>{categories.map((c) => <option key={c.id}>{c.name}</option>)}</select></label>
        <label className="field-label">Municipio<select className="field"><option>Todos</option>{municipalities.map((m) => <option key={m.id}>{m.name}</option>)}</select></label>
        <label className="field-label">Centro educativo<select className="field"><option>Cualquiera</option>{centers.map((c) => <option key={c.id}>{c.name}</option>)}</select></label>
        <label className="field-label">Edad recomendada<select className="field"><option>Todas</option><option>0-3 años</option><option>3-6 años</option><option>6-12 años</option><option>12-18 años</option></select></label>
        <label className="field-label">Precio<select className="field"><option>Cualquier precio</option><option>Gratis</option><option>Hasta 25 €</option><option>25-75 €</option><option>Más de 75 €</option></select></label>
        <label className="field-label">Tipo<select className="field"><option>Todos</option><option>Familia</option><option>Profesional o actividad</option><option>Centro</option></select></label>
        <label className="flex items-center gap-2 text-sm font-medium text-slatecopy"><input type="checkbox" className="h-4 w-4 rounded border-line" /> Solo verificados</label>
        <label className="field-label">Disponibilidad<select className="field"><option>Cualquiera</option><option>Disponible esta semana</option><option>Tardes</option><option>Fin de semana</option><option>Plazas abiertas</option></select></label>
      </div>
      <div className="mt-6 border-t border-line pt-5">
        <p className="text-sm font-semibold text-ink">Tags frecuentes</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {featuredTags.map((tag) => <span key={tag} className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-slatecopy">{tag}</span>)}
        </div>
      </div>
    </aside>
  );
}
