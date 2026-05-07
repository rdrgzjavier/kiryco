import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { providers } from "@/lib/mock-data";
import { VerifiedBadge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Servicios para familias | Kiryco",
  description: "Profesores, academias, clubes, tiendas, librerías, canguros profesionales y servicios familiares por zona."
};

const plans = [
  ["Gratuito", "Perfil básico, aparición en búsqueda, datos de contacto, categoría y zona."],
  ["Destacado", "Mejor posición, sello destacado, más fotos, CTA directo y métricas básicas."],
  ["Premium", "Visibilidad por zona/categoría, campañas estacionales y landing propia dentro de Kiryco."]
];

export default function ServicesPage() {
  return (
    <div className="section-shell">
      <p className="label">Profesionales y negocios locales</p>
      <h1 className="page-title">Servicios para familias</h1>
      <p className="lead">Profesores, academias, clubes, tiendas, librerías, canguros profesionales, campamentos, idiomas y apoyo especializado para familias.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {plans.map(([name, text]) => (
          <article key={name} className="card p-6">
            <h2 className="text-xl font-semibold text-ink">Plan {name}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap items-end justify-between gap-4">
        <h2 className="section-title">Servicios destacados</h2>
        <Link href="/publicar" className="btn-primary">Solicitar alta</Link>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {providers.map((provider) => (
          <article key={provider.id} className="card flex h-full flex-col overflow-hidden">
            <img src={provider.image} alt={`Imagen de ${provider.businessName}`} className="h-44 w-full object-cover" loading="lazy" />
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-3 flex flex-wrap gap-2"><span className="chip">{provider.category}</span><VerifiedBadge verified={provider.verified} /></div>
              <h3 className="text-lg font-semibold text-ink">{provider.businessName}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{provider.description}</p>
              <p className="mt-4 text-sm font-semibold text-slatecopy">{provider.serviceArea}</p>
              <div className="mt-auto flex gap-2 pt-5">
                <Link href={`/servicios/${provider.id}`} className="btn-primary flex-1">Ver ficha</Link>
                {provider.website !== "https://example.com" ? <a href={provider.website} target="_blank" rel="noreferrer" className="icon-button" aria-label="Web oficial"><ExternalLink size={18} /></a> : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
