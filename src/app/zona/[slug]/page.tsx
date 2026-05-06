import ListingCard from "@/components/ListingCard";
import CenterCard from "@/components/CenterCard";
import { centers, getListingsByMunicipality, getMunicipalityBySlug, municipalities } from "@/lib/mock-data";
import { notFound } from "next/navigation";
export const generateStaticParams = () => municipalities.map((m) => ({ slug: m.slug }));
export default async function ZonePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const m = getMunicipalityBySlug(slug); if (!m) notFound(); const zoneListings = getListingsByMunicipality(slug); const zoneCenters = centers.filter((c) => c.municipality === m.name); return <div className="page-container py-10"><h1 className="mb-6">Servicios para familias en {m.name}</h1><h2 className="mb-4">Publicaciones</h2><div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{zoneListings.map((l) => <ListingCard key={l.id} listing={l} />)}</div><h2 className="mb-4">Centros</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{zoneCenters.map((c) => <CenterCard key={c.id} center={c} />)}</div></div>; }
