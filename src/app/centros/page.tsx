import type { Metadata } from "next";
import { Search } from "lucide-react";
import CenterCard from "@/components/CenterCard";
import { centers } from "@/lib/mock-data";

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
      <div className="mt-8 grid gap-4 rounded-2xl border border-line bg-soft p-4 sm:grid-cols-[1fr_1fr_1fr_auto]">
        <div className="flex items-center gap-2 rounded-lg bg-panel px-3 py-2 ring-1 ring-line">
          <Search size={18} className="text-muted" />
          <input placeholder="Busca por nombre o zona..." className="w-full bg-transparent text-sm outline-none" />
        </div>
        <select className="rounded-lg bg-panel px-3 py-2 text-sm ring-1 ring-line outline-none">
          <option>Todas las zonas</option>
          <option>Las Rozas</option>
          <option>Majadahonda</option>
        </select>
        <select className="rounded-lg bg-panel px-3 py-2 text-sm ring-1 ring-line outline-none">
          <option>Tipología de centro</option>
          <option>Público</option>
          <option>Concertado</option>
          <option>Privado</option>
        </select>
        <button className="btn-primary py-2 px-6">Filtrar</button>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {centers.map((center) => <CenterCard key={center.id} center={center} />)}
      </div>
    </div>
  );
}
