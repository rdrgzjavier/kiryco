// FORCE VERCEL UPDATE 001 - Tenlo Transformation
import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import ListingCard from "@/components/ListingCard";
import SafeEnvironmentCard from "@/components/SafeEnvironmentCard";
import SearchHero from "@/components/SearchHero";
import { categories, listings, municipalities } from "@/lib/mock-data";
import { formatStat, getSiteStats } from "@/lib/site-stats";
import { Building2, ClipboardCheck, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const audienceCards: { title: string; text: string; Icon: LucideIcon }[] = [
  { title: "Para familias", text: "Busca, guarda favoritos, publica anuncios y contacta con seguridad.", Icon: Search },
  { title: "Para profesionales locales", text: "Crea una ficha, solicita verificación y ofrece servicios por zona.", Icon: ClipboardCheck },
  { title: "Para centros", text: "Valida tu ficha y facilita recursos útiles a las familias.", Icon: Building2 }
];

export default function Home() {
  const published = listings.filter((listing) => listing.status === "published").slice(0, 4);
  const stats = getSiteStats();
  const metricCards = [
    { value: `+${formatStat(stats.centers)}`, label: "Centros educativos" },
    { value: `+${formatStat(stats.localResources)}`, label: "Recursos locales" },
    { value: `+${formatStat(stats.families)}`, label: "Familias activas" },
    { value: "100%", label: "Moderado y seguro" }
  ];

  return (
    <>
      <div className="page"><SearchHero /></div>
      <section className="border-y border-line bg-panel py-14">
        <div className="page">
          <h2 className="section-title">Qué puedes encontrar</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => <CategoryCard key={category.id} category={category} />)}
          </div>
        </div>
      </section>
      <section className="page py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {audienceCards.map(({ title, text, Icon }) => (
            <article key={title} className="card p-6">
              <Icon className="text-ink" size={28} aria-hidden />
              <h3 className="mt-4 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-panel py-14">
        <div className="page">
          <SafeEnvironmentCard
            title="Pensado para familias. Diseñado con privacidad."
            body="Las publicaciones se revisan para mantener una comunidad útil y respetuosa. Sin perfiles, fotos, nombres, clase, horarios personales ni datos sensibles de menores."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {["Sin perfiles de menores", "Sin fotos de menores", "Publicaciones moderadas", "Reseñas auditadas", "Profesionales verificables"].map((item) => (
              <div key={item} className="rounded-xl border border-line bg-soft p-4 text-sm font-semibold text-slatecopy">{item}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="page py-14">
        <div className="rounded-2xl border border-line bg-panel p-6 shadow-soft sm:p-8">
          <div className="grid gap-5 text-center sm:grid-cols-2 lg:grid-cols-4">
            {metricCards.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-line bg-soft p-5">
                <p className="font-poppins text-4xl font-bold text-ink">{metric.value}</p>
                <p className="mt-2 text-sm font-semibold text-slatecopy">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label">Comunidad Tenlo</p>
            <h2 className="section-title mt-2">Últimos temas del tablón</h2>
          </div>
          <Link href="/comunidad" className="btn-secondary">Ir a la comunidad</Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link href="/comunidad" className="card flex items-center justify-between p-6">
            <div>
              <span className="chip mb-2">Boadilla</span>
              <h3 className="text-lg font-semibold text-ink">Mejores parques para ir con niños</h3>
              <p className="mt-1 text-sm text-muted">12 recomendaciones revisadas...</p>
            </div>
            <Search className="text-ink" size={24} />
          </Link>
          <Link href="/comunidad" className="card flex items-center justify-between p-6">
            <div>
              <span className="chip mb-2">Las Rozas</span>
              <h3 className="text-lg font-semibold text-ink">Extraescolares de robótica por zonas</h3>
              <p className="mt-1 text-sm text-muted">Listado moderado de academias...</p>
            </div>
            <Search className="text-ink" size={24} />
          </Link>
        </div>
      </section>

      <section className="page py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="section-title">Publicaciones recientes</h2>
          <Link href="/buscar" className="btn-secondary">Ver resultados</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {published.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
        </div>
      </section>
      <section className="border-t border-line bg-panel py-14">
        <div className="page">
          <h2 className="section-title">Zonas iniciales</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {municipalities.map((municipality) => (
              <Link key={municipality.id} href={`/zona/${municipality.slug}`} className="card block p-5">
                <h3 className="text-lg font-semibold text-ink">{municipality.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{municipality.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
