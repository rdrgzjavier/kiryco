import type { Metadata } from "next";
import Filters from "@/components/Filters";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Buscar recursos para familias | Proyecto Familias",
  description: "Filtra recursos por categoría, municipio, centro educativo, edad recomendada, precio, tipo, verificación y disponibilidad."
};

export default function SearchPage() {
  return (
    <div className="page py-10">
      <p className="label">Marketplace local moderado</p>
      <h1 className="mt-2 text-4xl font-bold text-ink">Buscar recursos</h1>
      <p className="mt-3 max-w-3xl text-slatecopy">Encuentra publicaciones y proveedores alrededor del centro, filtrados por zona y necesidades familiares no identificativas.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        <Filters />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
        </div>
      </div>
    </div>
  );
}
