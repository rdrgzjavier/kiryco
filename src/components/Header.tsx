"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";

const navItems = [
  { href: "/buscar", label: "Buscar" },
  { href: "/centros", label: "Centros" },
  { href: "/comunidad", label: "Tablón" },
  { href: "/proveedores", label: "Proveedores" },
  { href: "/centros-educativos", label: "Centros educativos" },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-warm-200 bg-white/95 backdrop-blur">
      <div className="page-container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Proyecto Familias, inicio">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-800 text-sm font-bold text-white">PF</span>
          <span className="text-lg font-bold tracking-tight text-warm-900">Proyecto Familias</span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-warm-700 hover:text-brand-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/login" className="btn-ghost">
            Entrar
          </Link>
          <Link href="/publicar" className="btn-primary py-2.5">
            Publicar
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setNavOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-warm-200 text-warm-800 md:hidden"
          aria-label={navOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {navOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {navOpen ? (
        <nav className="border-t border-warm-200 bg-white px-4 py-3 md:hidden" aria-label="Menú móvil">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            <Link href="/buscar" onClick={() => setNavOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-3 font-medium text-warm-800 hover:bg-warm-100">
              <Search size={18} />
              Buscar recursos
            </Link>
            {navItems.slice(1).map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setNavOpen(false)} className="rounded-lg px-3 py-3 font-medium text-warm-800 hover:bg-warm-100">
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-warm-200 pt-3">
              <Link href="/login" onClick={() => setNavOpen(false)} className="btn-secondary justify-center">
                Entrar
              </Link>
              <Link href="/publicar" onClick={() => setNavOpen(false)} className="btn-primary justify-center">
                Publicar
              </Link>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
