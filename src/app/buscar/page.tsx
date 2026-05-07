import type { Metadata } from "next";
import Filters from "@/components/Filters";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Buscar recursos para familias | Kiryco",
  description: "Filtra recursos por categoría, municipio, centro educativo, edad recomendada, precio, tipo, verificación y disponibilidad."
};

type SearchParams = Record<string, string | string[] | undefined>;

function value(params: SearchParams, key: string) {
  const raw = params[key];
  return Array.isArray(raw) ? raw[0] : raw;
}

export default function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  const selected = {
    categoria: value(searchParams, "categoria"),
    municipio: value(searchParams, "municipio"),
    centro: value(searchParams, "centro"),
    edad: value(searchParams, "edad"),
    precio: value(searchParams, "precio"),
    tipo: value(searchParams, "tipo"),
    verificado: value(searchParams, "verificado"),
    disponibilidad: value(searchParams, "disponibilidad"),
    tag: value(searchParams, "tag")
  };

  const [ageMin, ageMax] = selected.edad?.split("-").map(Number) ?? [];
  const filtered = listings.filter((listing) => {
    if (selected.categoria && listing.categoryId !== selected.categoria) return false;
    if (selected.municipio && listing.municipality !== selected.municipio) return false;
    if (selected.centro && listing.centerId !== selected.centro) return false;
    if (selected.tipo && listing.publicationType !== selected.tipo) return false;
    if (selected.verificado === "1" && !listing.verified) return false;
    if (selected.tag && !listing.tags.some((tag) => tag.toLowerCase() === selected.tag?.toLowerCase())) return false;
    if (selected.edad && typeof ageMin === "number" && typeof ageMax === "number") {
      const listingMin = listing.recommendedAgeMin ?? 0;
      const listingMax = listing.recommendedAgeMax ?? 18;
      if (listingMax < ageMin || listingMin > ageMax) return false;
    }
    if (selected.precio === "gratis" && (listing.price ?? 0) !== 0 && !listing.priceLabel?.toLowerCase().includes("gratis")) return false;
    if (selected.precio === "25" && listing.price && listing.price > 25) return false;
    return true;
  });

  return (
    <div className="section-shell">
      <p className="label">Marketplace local moderado</p>
      <h1 className="page-title">Buscar recursos</h1>
      <p className="lead">Encuentra publicaciones y servicios alrededor del centro, filtrados por zona y necesidades familiares no identificativas.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[300px_1fr]">
        <Filters selected={selected} />
        <section aria-label="Resultados de búsqueda">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-slatecopy">{filtered.length} resultado{filtered.length === 1 ? "" : "s"}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
          </div>
        </section>
      </div>
    </div>
  );
}
