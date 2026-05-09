import Link from "next/link";
import { Facebook, Instagram, Linkedin, ShieldCheck } from "lucide-react";

const columns = [
  {
    title: "Para familias",
    links: [["Guía para padres", "/buscar"], ["Consejos por edad", "/comunidad"], ["Organización familiar", "/categoria"], ["Blog", "/comunidad"]]
  },
  {
    title: "Para profesionales",
    links: [["Ventajas", "/proveedores"], ["Cómo funciona", "/servicios"], ["Precios", "/contacto"], ["Preguntas frecuentes", "/contacto"]]
  },
  {
    title: "Recursos",
    links: [["Artículos", "/comunidad"], ["Guías", "/comunidad"], ["Herramientas", "/buscar"]]
  },
  {
    title: "Empresa",
    links: [["Quiénes somos", "/aviso-legal"], ["Contacto", "/contacto"], ["Prensa", "/contacto"]]
  },
  {
    title: "Legal",
    links: [["Términos de uso", "/aviso-legal"], ["Privacidad", "/privacidad"], ["Aviso legal", "/aviso-legal"], ["Cookies", "/cookies"]]
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="page grid gap-10 py-12 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
        <div>
          <p className="text-3xl font-extrabold text-ink">Tenlo</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            La plataforma que conecta a familias con los mejores servicios educativos y de bienestar.
          </p>
          <div className="mt-5 flex items-start gap-2 text-sm font-semibold leading-6 text-petrol">
            <ShieldCheck size={18} className="mt-0.5 shrink-0" aria-hidden />
            <span>Dirigida a adultos, con publicaciones revisadas y privacidad desde el inicio.</span>
          </div>
          <div className="mt-6 flex gap-3">
            <Link href="/contacto" className="icon-button" aria-label="Instagram"><Instagram size={18} /></Link>
            <Link href="/contacto" className="icon-button" aria-label="Facebook"><Facebook size={18} /></Link>
            <Link href="/contacto" className="icon-button" aria-label="LinkedIn"><Linkedin size={18} /></Link>
          </div>
        </div>
        {columns.map((column) => <FooterColumn key={column.title} title={column.title} links={column.links} />)}
      </div>
      <div className="border-t border-line">
        <div className="page py-5 text-sm text-muted">© {new Date().getFullYear()} Tenlo. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <details className="group lg:block" open>
      <summary className="cursor-pointer list-none text-sm font-bold text-slatecopy lg:cursor-default">{title}</summary>
      <ul className="mt-4 grid gap-3 text-sm text-muted">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="hover:text-ink">{label}</Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
