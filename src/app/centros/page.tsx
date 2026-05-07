import type { Metadata } from "next";
import CenterCard from "@/components/CenterCard";
import { centers } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Centros educativos cerca de tu familia | Kiryco",
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
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {centers.map((center) => <CenterCard key={center.id} center={center} />)}
      </div>
    </div>
  );
}
