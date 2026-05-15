import type { Metadata } from "next";
import Link from "next/link";
import { Bookmark, ClipboardList, FilePlus2, Settings, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Área personal | Tenlo",
  description: "Gestiona favoritos, publicaciones, datos de cuenta y solicitudes dentro de Tenlo."
};

const accountActions = [
  {
    title: "Mis favoritos",
    text: "Guarda servicios, centros y recursos para compararlos más tarde.",
    href: "/favoritos",
    Icon: Bookmark
  },
  {
    title: "Mis publicaciones",
    text: "Revisa ofertas, recursos o fichas enviadas a Tenlo.",
    href: "/publicar",
    Icon: ClipboardList
  },
  {
    title: "Publicar oferta",
    text: "Crea una nueva publicación para familias, servicios o centros.",
    href: "/publicar",
    Icon: FilePlus2
  },
  {
    title: "Datos de cuenta",
    text: "Actualiza tus datos de contacto y preferencias.",
    href: "/login",
    Icon: Settings
  }
];

export default function PersonalAreaPage() {
  return (
    <div className="section-shell">
      <p className="label">Cuenta Tenlo</p>
      <h1 className="page-title">Área personal</h1>
      <p className="lead">Un espacio para gestionar favoritos, publicaciones y datos de contacto desde una cuenta adulta.</p>

      <div className="mt-8 rounded-2xl border border-sage/30 bg-sage/10 p-5">
        <div className="flex gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-petrol ring-1 ring-sage/25">
            <ShieldCheck size={22} aria-hidden />
          </span>
          <div>
            <h2 className="text-base font-bold text-slatecopy">Acceso pendiente de autenticación real</h2>
            <p className="mt-1 text-sm leading-6 text-muted">Esta pantalla queda preparada para Supabase Auth. Cuando activemos login real, aquí se mostrarán tus datos y el estado de revisión de tus publicaciones.</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {accountActions.map(({ title, text, href, Icon }) => (
          <Link key={title} href={href} className="card p-6 transition-colors hover:border-ink">
            <Icon size={28} className="text-ink" aria-hidden />
            <h2 className="mt-4 text-lg font-bold text-slatecopy">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
