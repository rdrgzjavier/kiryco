"use client";

import Link from "next/link";
import { LogIn, MapPin, Menu, UserRound, X } from "lucide-react";
import { useState } from "react";
import AnimatedLogo from "@/components/AnimatedLogo";

const nav = [
  ["Centros", "/centros"],
  ["Servicios", "/servicios"],
  ["Comunidad", "/comunidad"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const isLoggedIn = false;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-panel/90 backdrop-blur-xl">
      <div className="page flex min-h-16 items-center justify-between gap-3">
        <Link href="/" aria-label="Tenlo" className="shrink-0"><AnimatedLogo /></Link>
        <nav className="hidden min-w-0 items-center gap-5 lg:flex" aria-label="Principal">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-1 py-2 text-sm font-semibold text-slatecopy transition-colors hover:text-ink">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/buscar?region=madrid" className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-slatecopy transition-colors hover:text-ink">
            <MapPin size={16} className="text-ink" aria-hidden />
            Madrid
          </Link>
          {isLoggedIn ? (
            <>
              <Link href="/favoritos" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-line bg-panel px-4 text-sm font-bold text-slatecopy transition-colors hover:border-ink hover:text-ink">
                <UserRound size={16} aria-hidden />
                Área personal
              </Link>
              <Link href="/publicar" className="inline-flex min-h-10 items-center justify-center rounded-xl bg-ink px-4 text-sm font-bold text-white shadow-lift transition-colors hover:bg-ink/90">Publicar oferta</Link>
            </>
          ) : (
            <Link href="/login" className="inline-flex min-h-10 items-center justify-center rounded-xl bg-ink px-4 text-sm font-bold text-white shadow-lift transition-colors hover:bg-ink/90">Iniciar sesión</Link>
          )}
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Link href={isLoggedIn ? "/favoritos" : "/login"} className="icon-button h-10 w-10 rounded-xl" aria-label={isLoggedIn ? "Favoritos" : "Iniciar sesión"}>
            <UserRound size={20} />
          </Link>
          <button className="icon-button h-10 w-10 rounded-xl" onClick={() => setOpen((value) => !value)} aria-label="Abrir menú">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-line bg-panel px-5 py-4 md:hidden">
          <nav className="grid gap-1">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="flex min-h-14 items-center rounded-2xl px-4 text-base font-semibold text-slatecopy transition-colors hover:bg-soft" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link href="/buscar?region=madrid" className="flex min-h-14 items-center rounded-2xl px-4 text-base font-semibold text-slatecopy" onClick={() => setOpen(false)}>
              Madrid
            </Link>
            {isLoggedIn ? (
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link href="/favoritos" className="btn-secondary text-center" onClick={() => setOpen(false)}><UserRound size={16} />Área personal</Link>
                <Link href="/publicar" className="btn-primary text-center" onClick={() => setOpen(false)}>Publicar oferta</Link>
              </div>
            ) : (
              <Link href="/login" className="btn-primary mt-2 text-center" onClick={() => setOpen(false)}><LogIn size={16} />Iniciar sesión</Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
