// Force update: 2026-05-08T12:48
import type { Metadata } from "next";
import { ChevronDown, Search } from "lucide-react";
import CenterCard from "@/components/CenterCard";
import { centers, municipalities } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Centros educativos cerca de tu familia | Tenlo",
  description: "Consulta fichas estructuradas de colegios, institutos y escuelas infantiles con información pública y reseñas moderadas."
};

export default function CentersPage() {
  return (
    <div className="section-shell">
      <p className="label">Centros educativos</p>
      <h1 className="page-title">Fichas para familias</h1>
      <p className="lead">Información pública y criterios estructurados, sin rankings agresivos ni comentarios personales sobre profesores concretos.</p>
      <div className="mt-5 rounded-2xl border border-line bg-soft p-4 text-sm font-semibold leading-6 text-slatecopy">
        Las valoraciones están moderadas y buscan ayudar a las familias con información útil y respetuosa.
      </div>
      {/* Filters Section */}
      <div className="filter-shell sm:grid-cols-[1fr_1fr_1fr_auto]">
        <div className="filter-control">
          <Search size={18} className="text-muted" />
          <input placeholder="Busca por nombre o zona..." className="filter-input" />
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
            <option value="">Tipología de centro</option>
            <option value="publico">Público</option>
            <option value="concertado">Concertado</option>
            <option value="privado">Privado</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <ChevronDown size={18} className="text-muted" />
          </div>
        </div>
        <button className="btn-primary px-8">Filtrar</button>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {centers.map((center) => <CenterCard key={center.id} center={center} />)}
      </div>
    </div>
  );
}
