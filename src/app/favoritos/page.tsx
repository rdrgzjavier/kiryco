import Link from "next/link";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  return (
    <div className="section-shell">
      <div className="mx-auto max-w-2xl rounded-[24px] border border-line bg-panel p-8 text-center shadow-soft">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lavender text-ink">
          <Heart size={24} aria-hidden />
        </span>
        <h1 className="mt-5 text-3xl font-bold text-slatecopy">Tus favoritos</h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          Aquí aparecerán los centros, servicios y recursos que guardes cuando la cuenta esté activa.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/buscar" className="btn-primary">Buscar servicios</Link>
          <Link href="/login" className="btn-secondary">Entrar</Link>
        </div>
      </div>
    </div>
  );
}
