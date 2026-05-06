import type { Metadata } from "next";
import Link from "next/link";
import { communityPosts } from "@/lib/mock-data";
import { StatusBadge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Tablón moderado para familias | Proyecto Familias",
  description: "Preguntas, avisos y recomendaciones útiles revisadas antes de aparecer. No es una red social juvenil."
};

export default function CommunityPage() {
  return (
    <div className="page py-10">
      <p className="label">Comunidad controlada</p>
      <h1 className="mt-2 text-4xl font-bold text-ink">Tablón moderado</h1>
      <p className="mt-3 max-w-3xl text-slatecopy">Un espacio para preguntas útiles, avisos y recomendaciones revisadas. No permite grupos de clase, mensajería abierta sin control, críticas personales ni datos de menores.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-[1fr_340px]">
        <div className="card divide-y divide-line">
          {communityPosts.map((post) => (
            <article key={post.id} className="p-5">
              <div className="flex flex-wrap gap-2"><span className="chip">{post.category}</span><StatusBadge status={post.status} /></div>
              <h2 className="mt-3 text-xl font-semibold text-ink">{post.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{post.summary}</p>
              <p className="mt-3 text-xs font-semibold text-slatecopy">{post.municipality}</p>
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
