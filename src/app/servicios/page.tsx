import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, ExternalLink, Search } from "lucide-react";
import { categories, municipalities, providers } from "@/lib/mock-data";
import { TrustBadge } from "@/components/Badge";
import ImageWithFallback from "@/components/ImageWithFallback";
import { trackingAttrs } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Servicios para familias | Tenlo",
  description: "Profesores, academias, clubes, tiendas, librerías, canguros profesionales y servicios familiares por zona."
};

const serviceFallbacks = [
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
];

function providerFallback(id: string) {
  const index = Array.from(id).reduce((total, char) => total + char.charCodeAt(0), 0) % serviceFallbacks.length;
  return serviceFallbacks[index];
}

const plans = [
  ["Gratuito", "Perfil básico, aparición en búsqueda, datos de contacto, categoría y zona."],
  ["Destacado", "Mejor posición, sello destacado, más fotos, CTA directo y métricas básicas."],
  ["Premium", "Visibilidad por zona/categoría, campañas estacionales y landing propia dentro de Tenlo."]
];

export default function ServicesPage() {
  const serviceCategories = categories.filter(c => c.id !== "centros");

  return (
    <div className="section-shell">
      <p className="label">Profesionales y negocios locales</p>
      <h1 className="page-title">Servicios para familias</h1>
      <p className="lead">Profesores, academias, clubes, tiendas, librerías, canguros profesionales, campamentos, idiomas y apoyo especializado para familias.</p>

      {/* Filters Section */}
      <div className="filter-shell sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
        <div className="filter-control">
          <Search size={18} className="text-muted" />
          <input placeholder="Palabra clave..." className="filter-input" />
        </div>
        <div className="relative">
          <select className="filter-select">
            <option value="">Todas las zonas</option>
            {municipalities.map(m => <option key={m.id} value={m.slug}>{m.name}</option>)}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <ChevronDown size={18} className="text-muted" />
          </div>
        </div>
        <div className="relative">
          <select className="filter-select">
            <option value="">Todas las tipologías</option>
            {serviceCategories.map(c => <option key={c.id} value={c.slug}>{c.name}</option>)}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <ChevronDown size={18} className="text-muted" />
          </div>
        </div>
        <div className="relative">
          <select className="filter-select">
            <option value="">Cualquier precio</option>
            <option value="gratis">Gratis</option>
            <option value="25">Hasta 25 €</option>
            <option value="75">25-75 €</option>
            <option value="mas-75">Más de 75 €</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <ChevronDown size={18} className="text-muted" />
          </div>
        </div>
        <button className="btn-primary px-8">Filtrar</button>
      </div>

      <div className="mt-12 flex flex-wrap items-end justify-between gap-4">
        <h2 className="section-title">Servicios disponibles</h2>
        <Link href="/login" className="btn-secondary">Publicar oferta</Link>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {providers.map((provider) => (
          <article key={provider.id} className="card flex h-full flex-col overflow-hidden">
            <Link href={`/servicios/${provider.id}`} aria-label={`Ver ficha de ${provider.businessName}`}>
              <ImageWithFallback src={provider.image} fallbackSrc={providerFallback(provider.id)} alt={`Imagen de ${provider.businessName}`} className="h-44 w-full object-cover" />
            </Link>
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-3 flex flex-wrap gap-2"><span className="chip">{provider.category}</span><TrustBadge level={provider.trustLevel} /></div>
              <h3 className="text-lg font-semibold text-ink"><Link href={`/servicios/${provider.id}`}>{provider.businessName}</Link></h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{provider.description}</p>
              <p className="mt-4 text-sm font-semibold text-slatecopy">{provider.serviceArea}</p>
              <div className="mt-auto flex gap-2 pt-5">
                <Link href={`/servicios/${provider.id}`} className="btn-primary flex-1" {...trackingAttrs("view_detail", { item: provider.id, type: "provider" })}>Ver ficha</Link>
                {provider.website !== "https://example.com" ? <a href={provider.website} target="_blank" rel="noreferrer" className="icon-button" aria-label="Web oficial" {...trackingAttrs("external_web", { item: provider.id, type: "provider" })}><ExternalLink size={18} /></a> : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Plans Section moved to bottom/signup flow context */}
      <section className="mt-20 rounded-3xl bg-lavender/30 p-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title text-center">Haz crecer tu negocio en Tenlo</h2>
          <p className="mt-4 text-slatecopy">Llega a familias adultas que buscan activamente recursos locales de calidad.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map(([name, text]) => (
            <article key={name} className="flex flex-col rounded-2xl bg-panel p-6 shadow-sm ring-1 ring-lavender">
              <h3 className="text-xl font-bold text-ink">Plan {name}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">{text}</p>
              <Link href="/contacto" className="btn-secondary mt-6 w-full">Consultar plan</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
