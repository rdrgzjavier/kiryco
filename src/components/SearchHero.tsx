"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Search } from "lucide-react";
import { municipalities } from "@/lib/mock-data";

export default function SearchHero() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (location) params.set("muni", location);
    router.push(`/buscar?${params.toString()}`);
  }

  return (
    <div className="relative overflow-hidden rounded-lg border border-brand-900 bg-brand-900 px-5 py-14 text-center text-white md:px-10 md:py-20">
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        <span className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-50">
          Madrid noroeste: Las Rozas, Majadahonda, Pozuelo y Boadilla
        </span>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-normal text-white md:text-6xl">
          Todo lo que necesitas alrededor del colegio
        </h1>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-brand-100 md:text-xl">
          Encuentra uniformes, libros, clases, canguros, extraescolares y centros cerca de tu zona y tu familia.
        </p>

        <form onSubmit={handleSearch} className="grid w-full gap-2 rounded-lg bg-white p-2 shadow-sm md:grid-cols-[1fr_220px_auto]">
          <label className="relative flex items-center">
            <Search className="absolute left-4 text-warm-400" size={20} />
            <span className="sr-only">Busca por zona, centro o categoría</span>
            <input
              type="text"
              placeholder="Busca por zona, centro o categoría"
              className="h-12 w-full rounded-lg border-0 bg-transparent pl-12 pr-4 text-base text-warm-900 outline-none placeholder:text-warm-400"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <label className="relative flex items-center border-t border-warm-100 md:border-l md:border-t-0">
            <MapPin className="absolute left-4 text-warm-400" size={20} />
            <span className="sr-only">Municipio</span>
            <select
              className="h-12 w-full appearance-none rounded-lg border-0 bg-transparent pl-12 pr-4 text-base text-warm-900 outline-none"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            >
              <option value="">Todas las zonas</option>
              {municipalities.map((municipality) => (
                <option key={municipality.id} value={municipality.name}>
                  {municipality.name}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="btn-accent h-12 px-8 text-base">
            Buscar
          </button>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {["Uniformes", "Libros", "Canguros", "Inglés"].map((item) => (
            <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-brand-50">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
