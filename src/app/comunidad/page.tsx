// Force update: 2026-05-08T12:48
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import { communityInitiatives, communityPosts, municipalities } from "@/lib/mock-data";
import { StatusBadge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Comunidad y participación | Tenlo",
  description: "Un espacio seguro para familias con iniciativas locales, foro moderado y recursos compartidos."
};

export default function CommunityPage() {
  return (
    <div className="section-shell">
      <p className="label">Participación ciudadana</p>
      <h1 className="page-title">Comunidad Tenlo</h1>
      <p className="lead">Un espacio para preguntas útiles, avisos, recomendaciones e iniciativas revisadas. No permite grupos de clase, mensajería abierta sin control, críticas personales ni datos de menores.</p>

      {/* Filters Section */}
      <div className="mt-8 grid gap-4 rounded-2xl border border-line bg-panel p-3 shadow-soft sm:grid-cols-[1fr_1fr_1fr_auto]">
        <div className="flex items-center gap-2 rounded-lg bg-soft px-3 ring-1 ring-line/50 focus-within:ring-ink">
          <Search size={18} className="text-muted" />
          <input placeholder="Busca por palabra o tag..." className="min-h-[48px] w-full bg-transparent text-sm outline-none" />
        </div>
        <div className="relative">
          <select className="appearance-none min-h-[48px] w-full rounded-lg bg-soft pl-3 pr-10 text-sm ring-1 ring-line/50 outline-none focus:ring-ink">
            <option value="">Todas las zonas</option>
            {municipalities.map(m => <option key={m.id} value={m.slug}>{m.name}</option>)}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <ChevronDown size={18} className="text-muted" />
          </div>
        </div>
        <div className="relative">
          <select className="appearance-none min-h-[48px] w-full rounded-lg bg-soft pl-3 pr-10 text-sm ring-1 ring-line/50 outline-none focus:ring-ink">
            <option>Tipo de contenido</option>
            <option>Iniciativas y causas</option>
            <option>Foro y Tablón</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <ChevronDown size={18} className="text-muted" />
          </div>
        </div>
        <button className="btn-primary px-8">Filtrar</button>
      </div>

      <section className="mt-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="label">Iniciativas y causas</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink">Proyectos que merece la pena conocer</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {communityInitiatives.map((initiative) => (
            <article key={initiative.id} className="card overflow-hidden">
              <Link href={`/comunidad/${initiative.id}`} aria-label={`Ver iniciativa ${initiative.name}`}>
                <img src={initiative.image} alt={`Imagen de ${initiative.name}`} className="h-44 w-full object-cover" loading="lazy" />
              </Link>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">{initiative.tags.slice(0, 5).map((tag) => <span key={tag} className="chip">{tag}</span>)}</div>
                <h3 className="mt-4 text-xl font-semibold text-ink"><Link href={`/comunidad/${initiative.id}`}>{initiative.name}</Link></h3>
                <p className="mt-2 text-sm leading-6 text-muted">{initiative.summary}</p>
                <p className="mt-3 text-xs font-semibold text-slatecopy">{initiative.municipality}</p>
                <Link href={`/comunidad/${initiative.id}`} className="btn-primary mt-5 w-full justify-center">Saber más</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-[1fr_340px]">
        <div className="card divide-y divide-line">
          {communityPosts.map((post) => (
            <article key={post.id} className="p-5">
              <div className="flex flex-wrap gap-2"><span className="chip">{post.category}</span><StatusBadge status={post.status} /></div>
              <h2 className="mt-3 text-xl font-semibold text-ink">{post.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{post.summary}</p>
              <p className="mt-3 text-xs font-semibold text-slatecopy">{post.municipality}</p>
              <Link href="/publicar" className="btn-secondary mt-4">Saber más</Link>
            </article>
          ))}
        </div>
        <aside className="card h-fit p-5">
          <h2 className="text-xl font-semibold text-ink">Normas rápidas</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
            <li>Sin fotos ni datos personales de menores.</li>
            <li>Sin conversaciones privadas entre menores.</li>
            <li>Sin críticas personales a profesores.</li>
            <li>Publicaciones revisadas antes de aparecer.</li>
          </ul>
          <Link href="/publicar" className="btn-primary mt-5 w-full">Publicar pregunta</Link>
        </aside>
      </div>
    </div>
  );
}
