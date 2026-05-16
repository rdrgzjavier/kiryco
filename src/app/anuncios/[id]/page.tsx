import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bookmark, Flag, MessageCircle, ShieldAlert } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { StatusBadge, TrustBadge } from "@/components/Badge";
import { trackingAttrs } from "@/lib/analytics";
import { ageLabel, categories, centers, findListing, listings } from "@/lib/mock-data";

export function generateStaticParams() {
  return listings.map((listing) => ({ id: listing.slug }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const listing = findListing(params.id);
  return {
    title: listing ? `${listing.title} | Tenlo` : "Recurso | Tenlo",
    description: listing?.description
  };
}

function fallbackImage(categoryId: string) {
  if (categoryId === "centros") return "/images/cards/centro-educativo.svg";
  if (categoryId === "extraescolares" || categoryId === "campamentos" || categoryId === "centros-deportivos" || categoryId === "tecnologia") return "/images/cards/actividad.svg";
  if (categoryId === "uniformes" || categoryId === "libros-material") return "/images/cards/producto.svg";
  return "/images/cards/servicio-familiar.svg";
}

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = findListing(params.id);
  if (!listing) notFound();
  const category = categories.find((item) => item.id === listing.categoryId);
  const center = centers.find((item) => item.id === listing.centerId);

  return (
    <div className="page py-10">
      <Breadcrumbs items={[{ label: category?.name ?? "Recursos", href: category ? `/categoria/${category.slug}` : "/buscar" }, { label: listing.title }]} />
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <article>
          <img src={listing.image ?? fallbackImage(listing.categoryId)} alt={`Imagen de ${listing.title}`} className="mb-6 aspect-[16/7] w-full rounded-2xl border border-line object-cover" />
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="chip">{category?.name}</span>
            <TrustBadge level={listing.trustLevel} />
            <StatusBadge status={listing.status} />
          </div>
          <h1 className="text-4xl font-bold leading-tight text-ink">{listing.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slatecopy">{listing.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {listing.tags.map((tag) => <span key={tag} className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-slatecopy">{tag}</span>)}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Zona", `${listing.municipality} · ${listing.area}`],
              ["Centro relacionado", center?.name ?? "No indicado"],
              ["Edad recomendada", ageLabel(listing)],
              ["Precio", listing.priceLabel ?? (listing.price ? `${listing.price} €` : "Consultar")],
              ["Estado", listing.condition ?? "No aplica"],
              ["Disponibilidad", listing.availability ?? "Consultar"],
              ["Fuente", listing.sourceName ?? "Información recopilada por Tenlo"],
              ["Última revisión", listing.lastReviewed ?? "Información pendiente de revisión"],
              ["Verificación", listing.verificationStatus ?? "Información pendiente de revisión"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-line bg-panel p-4">
                <p className="label">{label}</p>
                <p className="mt-2 font-semibold text-ink">{value}</p>
              </div>
            ))}
          </div>
          <section className="mt-8 card p-6">
            <h2 className="text-2xl font-semibold text-ink">Información específica</h2>
            <dl className="mt-4 grid gap-3">
              {Object.entries(listing.details).map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4 border-b border-line pb-3 text-sm">
                  <dt className="font-semibold capitalize text-slatecopy">{key.replace(/([A-Z])/g, " $1")}</dt>
                  <dd className="text-right text-ink">{value}</dd>
                </div>
              ))}
            </dl>
            <a href="/contacto" className="mt-5 inline-flex text-sm font-semibold text-ink underline">¿Hay un dato incorrecto? Avísanos</a>
          </section>
        </article>
        <aside className="space-y-4">
          <div className="card p-5">
            <h2 className="text-xl font-semibold text-ink">Contacto protegido</h2>
            <p className="mt-2 text-sm leading-6 text-muted">El contacto se inicia desde la plataforma. No compartas datos personales de menores, horarios personales ni información sensible.</p>
            <button className="btn-primary mt-5 w-full" {...trackingAttrs("contact_email", { item: listing.id, category: listing.categoryId })}><MessageCircle size={16} /> Contactar</button>
            <button className="btn-secondary mt-3 w-full" {...trackingAttrs("save_favorite", { item: listing.id, category: listing.categoryId })}><Bookmark size={16} /> Guardar favorito</button>
            <button className="btn-secondary mt-3 w-full"><Flag size={16} /> Reportar publicación</button>
          </div>
          <div className="rounded-2xl border border-coral/30 bg-coral/5 p-5">
            <ShieldAlert className="text-coral" size={24} aria-hidden />
            <h3 className="mt-3 font-semibold text-ink">Aviso de seguridad</h3>
            <p className="mt-2 text-sm leading-6 text-slatecopy">Plataforma dirigida exclusivamente a adultos. No publiques fotos de menores, nombres completos, clase, horarios personales ni datos sensibles.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
