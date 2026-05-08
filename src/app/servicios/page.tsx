import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Search } from "lucide-react";
import { providers } from "@/lib/mock-data";
import { VerifiedBadge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Servicios para familias | Tenlo",
  description: "Profesores, academias, clubes, tiendas, librerías, canguros profesionales y servicios familiares por zona."
};

const plans = [
  ["Gratuito", "Perfil básico, aparición en búsqueda, datos de contacto, categoría y zona."],
  ["Destacado", "Mejor posición, sello destacado, más fotos, CTA directo y métricas básicas."],
  ["Premium", "Visibilidad por zona/categoría, campañas estacionales y landing propia dentro de Tenlo."]
];

export default function ServicesPage() {
  return (
    <div className="section-shell">
      <p className="label">Profesionales y negocios locales</p>
      <h1 className="page-title">Servicios para familias</h1>
      <p className="lead">Profesores, academias, clubes, tiendas, librerías, canguros profesionales, campamentos, idiomas y apoyo especializado para familias.</p>

      {/* Filters Section */}
      <div className="mt-8 grid gap-4 rounded-2xl border border-line bg-soft p-4 sm:grid-cols-[1fr_1fr_1fr_auto]">
        <div className="flex items-center gap-2 rounded-lg bg-panel px-3 py-2 ring-1 ring-line">
          <Search size={18} className="text-muted" />
          <input placeholder="Palabra clave..." className="w-full bg-transparent text-sm outline-none" />
        </div>
        <select className="rounded-lg bg-panel px-3 py-2 text-sm ring-1 ring-line outline-none">
          <option>Todas las zonas</option>
          <option>Las Rozas</option>
          <option>Majadahonda</option>
          <option>Pozuelo</option>
        </select>
        <select className="rounded-lg bg-panel px-3 py-2 text-sm ring-1 ring-line outline-none">
          <option>Todas las tipologías</option>
          <option>Guardería</option>
          <option>Extraescolares</option>
          <option>Libros y material</option>
        </select>
        <button className="btn-primary py-2 px-6">Filtrar</button>
      </div>

      <div className="mt-12 flex flex-wrap items-end justify-between gap-4">
        <h2 className="section-title">Servicios disponibles</h2>
        <Link href="/publicar" className="btn-secondary">Solicitar alta profesional</Link>
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
              <button className="btn-secondary mt-6 w-full">Ver detalles</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
