// Force update: 2026-05-08T12:48
import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { communityInitiatives, communityPosts } from "@/lib/mock-data";
import { StatusBadge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Tablón moderado e iniciativas para familias | Tenlo",
  description: "Preguntas, avisos, recomendaciones e iniciativas útiles revisadas antes de aparecer. No es una red social juvenil."
};

export default function CommunityPage() {
  return (
    <div className="section-shell">
      <p className="label">Comunidad controlada</p>
      <h1 className="page-title">Tablón moderado</h1>
      <p className="lead">Un espacio para preguntas útiles, avisos, recomendaciones e iniciativas revisadas. No permite grupos de clase, mensajería abierta sin control, críticas personales ni datos de menores.</p>

      {/* Filters Section */}
      <div className="mt-8 grid gap-4 rounded-2xl border border-line bg-soft p-4 sm:grid-cols-[1fr_1fr_1fr_auto]">
        <div className="flex items-center gap-2 rounded-lg bg-panel px-3 py-2 ring-1 ring-line">
          <Search size={18} className="text-muted" />
          <input placeholder="Busca por palabra o tag..." className="w-full bg-transparent text-sm outline-none" />
        </div>
        <select className="rounded-lg bg-panel px-3 py-2 text-sm ring-1 ring-line outline-none">
          <option>Todas las zonas</option>
          <option>Las Rozas</option>
          <option>Majadahonda</option>
        </select>
        <select className="rounded-lg bg-panel px-3 py-2 text-sm ring-1 ring-line outline-none">
          <option>Tipo de contenido</option>
          <option>Iniciativas y causas</option>
          <option>Foro y Tablón</option>
        </select>
        <button className="btn-primary py-2 px-6">Filtrar</button>
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
              <img src={initiative.image} alt={`Imagen de ${initiative.name}`} className="h-44 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <div className="flex flex-wrap gap-2">{initiative.tags.slice(0, 5).map((tag) => <span key={tag} className="chip">{tag}</span>)}</div>
                <h3 className="mt-4 text-xl font-semibold text-ink">{initiative.name}</h3>
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
