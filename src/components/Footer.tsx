import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const zones = [
  ["Las Rozas", "/zona/las-rozas"],
  ["Majadahonda", "/zona/majadahonda"],
  ["Pozuelo de Alarcón", "/zona/pozuelo"],
  ["Boadilla del Monte", "/zona/boadilla"]
];

const categories = [
  ["Uniformes", "/categoria/uniformes"],
  ["Libros y material", "/categoria/libros-material"],
  ["Clases particulares", "/categoria/clases-particulares"],
  ["Canguros", "/categoria/canguros"],
  ["Extraescolares", "/categoria/extraescolares"]
];

const legal = [
  ["Normas de comunidad", "/normas-comunidad"],
  ["Aviso legal", "/aviso-legal"],
  ["Privacidad", "/privacidad"],
  ["Cookies", "/cookies"],
  ["Contacto", "/contacto"]
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="page grid gap-10 py-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold text-ink">Kiryco</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted">
            Recursos útiles alrededor del colegio, organizados por zona, centro y categoría para familias adultas.
          </p>
          <div className="mt-5 flex items-start gap-2 text-sm font-semibold leading-6 text-petrol">
            <ShieldCheck size={18} className="mt-0.5 shrink-0" aria-hidden />
            <span>Plataforma dirigida a adultos, con publicaciones revisadas y normas de privacidad claras.</span>
          </div>
        </div>
        <FooterLinks title="Zonas" links={zones} />
        <FooterLinks title="Categorías" links={categories} />
        <FooterLinks title="Legal" links={legal} />
      </div>
      <div className="border-t border-line">
        <div className="page py-5 text-sm text-muted">© {new Date().getFullYear()} Kiryco. Plataforma para familias, centros y profesionales locales.</div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h2 className="text-sm font-bold text-ink">{title}</h2>
      <ul className="mt-4 grid gap-3 text-sm text-slatecopy">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="hover:text-ink">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
