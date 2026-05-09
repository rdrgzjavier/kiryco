import Link from "next/link";
import { Instagram, Linkedin, ShieldCheck } from "lucide-react";

const columns = [
  {
    title: "Familias",
    links: [["Buscar servicios", "/buscar"], ["Servicios populares", "/servicios"], ["Comunidad", "/comunidad"], ["Categorías", "/categoria"]]
  },
  {
    title: "Profesionales",
    links: [["Publicar", "/publicar"], ["Ventajas", "/proveedores"], ["Cómo funciona", "/servicios"], ["Contacto", "/contacto"]]
  },
  {
    title: "Recursos",
    links: [["Centros", "/centros"], ["Guías", "/comunidad"], ["Herramientas", "/buscar"]]
  },
  {
    title: "Zonas",
    links: [["Las Rozas", "/zona/las-rozas"], ["Majadahonda", "/zona/majadahonda"], ["Pozuelo", "/zona/pozuelo"], ["Boadilla", "/zona/boadilla"], ["Villanueva de la Cañada", "/zona/villanueva-de-la-canada"]]
  },
  {
    title: "Legal",
    links: [["Privacidad", "/privacidad"], ["Términos de uso", "/aviso-legal"], ["Aviso legal", "/aviso-legal"], ["Cookies", "/cookies"]]
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="page py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {columns.map((column) => <FooterColumn key={column.title} title={column.title} links={column.links} />)}
        </div>
        <div className="mt-12 grid gap-6 border-t border-line pt-8 lg:grid-cols-[1.3fr_1fr_auto] lg:items-center">
          <div>
            <p className="text-3xl font-extrabold text-ink">Tenlo</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
              La plataforma que conecta a familias adultas con servicios educativos, bienestar y recursos locales de confianza.
            </p>
          </div>
          <div className="flex items-start gap-2 text-sm font-semibold leading-6 text-petrol">
            <ShieldCheck size={18} className="mt-0.5 shrink-0" aria-hidden />
            <span>Dirigida a adultos, con publicaciones revisadas y privacidad desde el inicio.</span>
          </div>
          <div className="flex gap-3">
            <Link href="https://www.instagram.com/tenlocerca/" className="icon-button" aria-label="Instagram"><Instagram size={18} /></Link>
            <Link href="https://www.linkedin.com/company/tenlocerca" className="icon-button" aria-label="LinkedIn"><Linkedin size={18} /></Link>
          </div>
        </div>
        <div className="mt-8 text-sm text-muted">© {new Date().getFullYear()} Tenlo. Todos los derechos reservados.</div>
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
            <Link href={href} className="transition-colors hover:text-ink">{label}</Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
