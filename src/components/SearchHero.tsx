import Link from "next/link";
import { MapPin, Megaphone, Search, ShieldCheck, Store } from "lucide-react";

export default function SearchHero() {
  return (
    <section className="grid gap-8 py-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-14">
      <div>
        <p className="label mb-4">Madrid noroeste · MVP local</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
          Todo lo que necesitas alrededor del colegio
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slatecopy">
          Encuentra uniformes, libros, clases, canguros, extraescolares y centros cerca de tu zona y tu familia.
        </p>
        <form action="/buscar" className="mt-7 grid gap-3 rounded-2xl border border-line bg-panel p-3 shadow-soft sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="q">Busca por zona, centro o categoría</label>
          <div className="flex items-center gap-2 rounded-lg bg-soft px-3">
            <Search size={20} className="text-muted" aria-hidden />
            <input id="q" name="q" placeholder="Busca por zona, centro o categoría" className="min-h-12 w-full bg-transparent text-base outline-none" />
          </div>
          <button className="btn-primary min-h-12" type="submit">Buscar cerca de mí</button>
        </form>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/publicar" className="btn-secondary"><Megaphone size={16} aria-hidden /> Publicar anuncio</Link>
          <Link href="/proveedores" className="btn-secondary"><Store size={16} aria-hidden /> Soy proveedor</Link>
          <Link href="/centros-educativos" className="btn-secondary"><MapPin size={16} aria-hidden /> Soy centro</Link>
        </div>
      </div>
      <div className="rounded-2xl border border-line bg-panel p-5">
        <div className="rounded-xl bg-soft p-5">
          <ShieldCheck className="mb-4 text-petrol" size={32} aria-hidden />
          <h2 className="text-xl font-semibold text-ink">Pensado para familias. Diseñado con privacidad.</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slatecopy">
            <li>Sin perfiles de menores.</li>
            <li>Sin fotos de menores.</li>
            <li>Publicaciones moderadas antes de aparecer.</li>
            <li>Reseñas auditadas y respetuosas.</li>
            <li>Proveedores verificables.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
