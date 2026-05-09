import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SafeEnvironmentCard from "@/components/SafeEnvironmentCard";
import { ExternalLink } from "lucide-react";
import { communityInitiatives, findCommunityInitiative } from "@/lib/mock-data";

export function generateStaticParams() {
  return communityInitiatives.map((initiative) => ({ id: initiative.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const initiative = findCommunityInitiative(params.id);
  if (!initiative) return { title: "Iniciativa no encontrada | Tenlo" };
  return { title: `${initiative.name} | Comunidad | Tenlo`, description: initiative.summary };
}

export default function CommunityInitiativePage({ params }: { params: { id: string } }) {
  const initiative = findCommunityInitiative(params.id);
  if (!initiative) notFound();

  return (
    <div className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <article>
          <img src={initiative.image} alt={`Imagen de ${initiative.name}`} className="h-64 w-full rounded-2xl border border-line object-cover sm:h-80" />
          <div className="mt-6 flex flex-wrap gap-2">{initiative.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}</div>
          <p className="label mt-6">Iniciativa comunitaria</p>
          <h1 className="page-title">{initiative.name}</h1>
          <p className="lead">{initiative.summary}</p>
          <section className="mt-8 card p-6">
            <h2 className="text-xl font-semibold text-ink">Por qué aparece en Tenlo</h2>
            <p className="mt-3 text-sm leading-6 text-muted">Tenlo también puede dar visibilidad a causas, iniciativas y entidades que aporten información útil y respetuosa para familias adultas. Estas fichas no son foros abiertos ni recogen datos de menores.</p>
          </section>
        </article>
        <aside className="card h-fit p-6">
          <SafeEnvironmentCard compact title="Información revisada" body="Contenido orientativo para familias adultas, con salida a la fuente oficial de la iniciativa." />
          <a href={initiative.url} target="_blank" rel="noreferrer" className="btn-primary mt-5 w-full">Web oficial<ExternalLink size={16} /></a>
        </aside>
      </div>
    </div>
  );
}
