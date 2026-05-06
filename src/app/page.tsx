import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import ListingCard from "@/components/ListingCard";
import SearchHero from "@/components/SearchHero";
import TrustBlock from "@/components/TrustBlock";
import { categories, listings, municipalities } from "@/lib/mock-data";

export default function Home() {
  const recentListings = listings.filter((listing) => listing.status === "published").slice(0, 4);
  return <><section className="page-container py-6 md:py-10"><SearchHero /></section><section className="border-y border-warm-200 bg-white py-14"><div className="page-container"><h2 className="mb-3 text-3xl font-bold">Qué puedes encontrar</h2><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{categories.map((c) => <CategoryCard key={c.id} category={c} />)}</div></div></section><section className="py-14"><div className="page-container"><TrustBlock /></div></section><section className="bg-white py-14"><div className="page-container"><h2 className="mb-6 text-3xl font-bold">Últimas publicaciones</h2><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{recentListings.map((l) => <ListingCard key={l.id} listing={l} />)}</div></div></section><section className="py-14"><div className="page-container"><h2 className="mb-6 text-3xl font-bold">Zonas iniciales</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{municipalities.map((m) => <Link key={m.id} href={`/zona/${m.slug}`} className="card p-5"><h3 className="font-semibold">{m.name}</h3><p className="text-sm text-warm-600">{m.listingsCount} recursos · {m.centersCount} centros</p></Link>)}</div></div></section></>;
}
