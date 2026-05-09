"use client";

import Link from "next/link";
import { ChevronDown, Heart, LogIn, MapPin, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import AnimatedLogo from "@/components/AnimatedLogo";

const nav = [
  ["Servicios", "/servicios"],
  ["Para familias", "/buscar"],
  ["Para profesionales", "/proveedores"],
  ["Recursos", "/comunidad"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-panel/90 backdrop-blur-xl">
      <div className="page flex min-h-[74px] items-center justify-between gap-4">
        <Link href="/" aria-label="Tenlo"><AnimatedLogo /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="inline-flex items-center gap-1.5 rounded-xl px-1 py-2 text-sm font-semibold text-slatecopy hover:text-ink">
              {label}
              {(label === "Servicios" || label === "Recursos") ? <ChevronDown size={15} aria-hidden /> : null}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/zona/las-rozas" className="inline-flex items-center gap-2 text-sm font-semibold text-slatecopy hover:text-ink">
            <MapPin size={17} className="text-ink" aria-hidden />
            Noroeste de Madrid
            <ChevronDown size={15} aria-hidden />
          </Link>
          <Link href="/buscar" className="icon-button" aria-label="Favoritos"><Heart size={19} /></Link>
          <Link href="/login" className="btn-secondary">Iniciar sesión</Link>
          <Link href="/publicar" className="btn-primary">Únete a Tenlo</Link>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/buscar" className="icon-button" aria-label="Favoritos"><Heart size={19} /></Link>
          <button className="icon-button" onClick={() => setOpen((value) => !value)} aria-label="Abrir menú">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-line bg-panel px-5 py-4 md:hidden">
          <div className="mb-3 flex items-center gap-2 rounded-2xl border border-line bg-soft px-4 py-3 text-sm text-muted">
            <Search size={16} aria-hidden /> Busca por zona, centro o categoría
          </div>
          <nav className="grid gap-1">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-2xl px-3 py-3 font-semibold text-slatecopy hover:bg-soft" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link href="/login" className="btn-secondary text-center" onClick={() => setOpen(false)}><LogIn size={16} />Entrar</Link>
              <Link href="/publicar" className="btn-primary text-center" onClick={() => setOpen(false)}>Unirme</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
