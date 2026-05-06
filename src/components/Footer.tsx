import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-warm-200 bg-white py-12">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-flex text-lg font-bold text-warm-900">
              Proyecto Familias
            </Link>
            <p className="mb-5 text-sm leading-relaxed text-warm-600">
              Todo lo que necesitas alrededor del colegio, filtrado por tu zona y tu centro.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-700">
              <ShieldCheck size={18} />
              Plataforma dirigida a adultos y moderada
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-warm-900">Zonas</h4>
            <ul className="space-y-3 text-sm text-warm-600">
              <li><Link href="/zona/las-rozas" className="hover:text-brand-700">Las Rozas</Link></li>
              <li><Link href="/zona/majadahonda" className="hover:text-brand-700">Majadahonda</Link></li>
              <li><Link href="/zona/pozuelo" className="hover:text-brand-700">Pozuelo de Alarcón</Link></li>
              <li><Link href="/zona/boadilla" className="hover:text-brand-700">Boadilla del Monte</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-warm-900">Categorías</h4>
            <ul className="space-y-3 text-sm text-warm-600">
              <li><Link href="/categoria/uniformes" className="hover:text-brand-700">Uniformes</Link></li>
              <li><Link href="/categoria/libros-material" className="hover:text-brand-700">Libros y material</Link></li>
              <li><Link href="/categoria/clases-particulares" className="hover:text-brand-700">Clases particulares</Link></li>
              <li><Link href="/categoria/canguros" className="hover:text-brand-700">Canguros</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-warm-900">Legal</h4>
            <ul className="space-y-3 text-sm text-warm-600">
              <li><Link href="/normas-comunidad" className="hover:text-brand-700">Normas de comunidad</Link></li>
              <li><Link href="/aviso-legal" className="hover:text-brand-700">Aviso legal</Link></li>
              <li><Link href="/privacidad" className="hover:text-brand-700">Privacidad</Link></li>
              <li><Link href="/cookies" className="hover:text-brand-700">Cookies</Link></li>
              <li><Link href="/contacto" className="hover:text-brand-700">Contacto</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-warm-200 pt-6 text-sm text-warm-500">
          © {new Date().getFullYear()} Proyecto Familias. MVP preparado para conectar con Supabase o Firebase.
        </div>
      </div>
    </footer>
  );
}
