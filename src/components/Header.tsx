"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import AnimatedLogo from "@/components/AnimatedLogo";

const nav = [
  ["Buscar", "/buscar"],
  ["Categorías", "/categoria"],
  ["Centros", "/centros"],
  ["Comunidad", "/comunidad"],
  ["Servicios", "/servicios"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-panel/95 backdrop-blur">
      <div className="page flex items-center justify-between py-3">
        <Link href="/" aria-label="Tenlo"><AnimatedLogo /></Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-lg px-3 py-2 text-sm font-medium text-slatecopy hover:bg-soft hover:text-ink">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/login" className="btn-secondary">Entrar</Link>
          <Link href="/publicar" className="btn-primary">Publicar</Link>
        </div>
        <button className="icon-button md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Abrir menú">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-panel px-5 py-4 md:hidden">
          <div className="mb-3 flex items-center gap-2 rounded-lg border border-line bg-soft px-3 py-2 text-sm text-muted">
            <Search size={16} aria-hidden /> Busca por zona, centro o categoría
          </div>
          <nav className="grid gap-1">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-lg px-3 py-3 font-medium text-slatecopy hover:bg-soft" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link href="/publicar" className="btn-primary mt-2 text-center" onClick={() => setOpen(false)}>Publicar anuncio</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
