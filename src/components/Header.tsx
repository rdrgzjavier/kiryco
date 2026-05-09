"use client";

import Link from "next/link";
import { ChevronDown, LogIn, MapPin, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import AnimatedLogo from "@/components/AnimatedLogo";
import FavoriteButton from "@/components/FavoriteButton";

const nav = [
  ["Servicios", "/servicios"],
  ["Familias", "/buscar"],
  ["Profesionales", "/proveedores"],
  ["Recursos", "/comunidad"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-panel/90 backdrop-blur-xl">
      <div className="page flex min-h-16 items-center justify-between gap-3">
        <Link href="/" aria-label="Tenlo" className="shrink-0"><AnimatedLogo /></Link>
        <nav className="hidden min-w-0 items-center gap-5 lg:flex" aria-label="Principal">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-1 py-2 text-sm font-semibold text-slatecopy transition-colors hover:text-ink">
              {label}
              {(label === "Servicios" || label === "Recursos") ? <ChevronDown size={14} aria-hidden /> : null}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/zona/las-rozas" className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-slatecopy transition-colors hover:text-ink">
            <MapPin size={16} className="text-ink" aria-hidden />
            Madrid
          </Link>
          <FavoriteButton className="icon-button h-10 w-10 rounded-xl" />
          <Link href="/login" className="inline-flex min-h-10 items-center justify-center rounded-xl border border-line bg-panel px-4 text-sm font-bold text-slatecopy transition-colors hover:border-ink hover:text-ink">Iniciar sesión</Link>
          <Link href="/publicar" className="inline-flex min-h-10 items-center justify-center rounded-xl bg-ink px-4 text-sm font-bold text-white shadow-lift transition-colors hover:bg-ink/90">Únete a Tenlo</Link>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <FavoriteButton className="icon-button h-10 w-10 rounded-xl" />
          <button className="icon-button h-10 w-10 rounded-xl" onClick={() => setOpen((value) => !value)} aria-label="Abrir menú">
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
              <Link key={href} href={href} className="rounded-2xl px-3 py-3 font-semibold text-slatecopy transition-colors hover:bg-soft" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link href="/zona/las-rozas" className="rounded-2xl px-3 py-3 font-semibold text-slatecopy" onClick={() => setOpen(false)}>
              Madrid
            </Link>
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
