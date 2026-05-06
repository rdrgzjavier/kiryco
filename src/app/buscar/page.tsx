"use client";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import ListingCard from "@/components/ListingCard";
import { categories, listings, municipalities } from "@/lib/mock-data";

export default function BuscarPage() {
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") || "");
  const [cat, setCat] = useState(params.get("cat") || "");
  const [muni, setMuni] = useState(params.get("muni") || "");
  const results = useMemo(() => listings.filter((l) => l.status === "published" && (!q || `${l.title} ${l.description}`.toLowerCase().includes(q.toLowerCase())) && (!cat || l.categorySlug === cat) && (!muni || l.municipality === muni)), [q, cat, muni]);
  return <div className="page-container py-10"><h1 className="mb-3">Buscar recursos</h1><div className="mb-8 grid gap-3 md:grid-cols-3"><input className="input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Zona, centro o categoría" /><select className="select" value={cat} onChange={(e) => setCat(e.target.value)}><option value="">Todas las categorías</option>{categories.map((c) => <option key={c.id} value={c.slug}>{c.name}</option>)}</select><select className="select" value={muni} onChange={(e) => setMuni(e.target.value)}><option value="">Todas las zonas</option>{municipalities.map((m) => <option key={m.id} value={m.name}>{m.name}</option>)}</select></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{results.map((l) => <ListingCard key={l.id} listing={l} />)}</div></div>;
}
