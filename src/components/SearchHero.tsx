import Link from "next/link";
import { Building2, MapPin, Megaphone, Search, ShieldCheck, Store } from "lucide-react";

export default function SearchHero() {
  return (
    <section className="grid gap-8 py-8 md:grid-cols-[1.2fr_0.8fr] md:items-start md:py-14">
      <div>
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
        <div className="mt-6">
          <h2 className="text-base font-bold text-ink">¿Quieres ser parte de Tenlo?</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link href="/publicar" className="btn-secondary"><Megaphone size={16} aria-hidden /> Publicar anuncio</Link>
            <Link href="/proveedores" className="btn-secondary"><Store size={16} aria-hidden /> Ofrezco servicios</Link>
            <Link href="/centros-educativos" className="btn-secondary"><Building2 size={16} aria-hidden /> Soy centro educativo</Link>
          </div>
        </div>
      </div>
      <aside className="rounded-2xl border border-lavender bg-lavender/30 p-4 md:mt-2 shadow-sm">
        <div className="flex gap-3 rounded-xl bg-panel/50 p-4 backdrop-blur-sm">
          <ShieldCheck className="mt-0.5 shrink-0 text-petrol" size={24} aria-hidden />
          <div>
            <h2 className="text-base font-semibold text-ink">Privacidad desde el inicio</h2>
            <p className="mt-2 text-sm leading-6 text-slatecopy">
              Sin perfiles ni fotos de menores. Las publicaciones y reseñas se revisan para mantener una comunidad útil y respetuosa.
            </p>
          </div>
        </div>
        <div className="mt-4 grid gap-2 text-sm text-muted">
          <div className="flex items-center gap-2"><MapPin size={16} aria-hidden /> Filtra por zona, centro y categoría.</div>
          <div className="flex items-center gap-2"><ShieldCheck size={16} aria-hidden /> Contacto pensado para adultos.</div>
        </div>
      </aside>
    </section>
  );
}
