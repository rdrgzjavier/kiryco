import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bookmark, Flag, MessageCircle, ShieldAlert, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageWithFallback from "@/components/ImageWithFallback";
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
  if (categoryId === "centros") return "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1600";
  if (categoryId === "uniformes" || categoryId === "libros-material") return "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600";
  if (categoryId === "campamentos" || categoryId === "extraescolares" || categoryId === "centros-deportivos") return "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600";
  return "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600";
}

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = findListing(params.id);
  if (!listing) notFound();
  const category = categories.find((item) => item.id === listing.categoryId);
  const center = centers.find((item) => item.id === listing.centerId);
  const isVerified = listing.trustLevel === "verified" || listing.trustLevel === "official";

  return (
    <div className="page py-10">
      <Breadcrumbs items={[{ label: category?.name ?? "Recursos", href: category ? `/categoria/${category.slug}` : "/buscar" }, { label: listing.title }]} />
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <article>
          <ImageWithFallback src={listing.image} fallbackSrc={fallbackImage(listing.categoryId)} alt={`Imagen de ${listing.title}`} className="mb-6 aspect-[16/7] w-full rounded-2xl border border-line object-cover" />
          <div className="flex items-start gap-3">
            {isVerified ? <ShieldCheck className="mt-1 shrink-0 text-emerald-700" size={28} aria-label="Ficha verificada" /> : null}
            <h1 className="text-4xl font-bold leading-tight text-ink">{listing.title}</h1>
          </div>
          <p className="mt-5 text-lg leading-8 text-slatecopy">{listing.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {category ? <span className="chip">{category.name}</span> : null}
            {listing.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
          </div>

          <section className="mt-8 grid gap-5">
            <InfoBlock title="Ubicación y contexto" items={[
              ["Zona", `${listing.municipality} · ${listing.area}`],
              ["Centro relacionado", center?.name ?? "No indicado"],
              ["Edad recomendada", ageLabel(listing)]
            ]} />
            <InfoBlock title="Condiciones" items={[
              ["Precio", listing.priceLabel ?? (listing.price ? `${listing.price} €` : "Consultar")],
              ["Disponibilidad", listing.availability ?? "Consultar"],
              ["Condición", listing.condition ?? "No aplica"]
            ]} />
            {Object.keys(listing.details).length > 0 ? (
              <section className="card p-6">
                <h2 className="text-2xl font-semibold text-ink">Información específica</h2>
                <dl className="mt-4 grid gap-3">
                  {Object.entries(listing.details).map(([key, value]) => (
                    <div key={key} className="flex justify-between gap-4 border-b border-line pb-3 text-sm">
                      <dt className="font-semibold capitalize text-slatecopy">{key.replace(/([A-Z])/g, " $1")}</dt>
                      <dd className="text-right text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}
            <Link href={`/sugerencias?context=anuncio&item=${listing.slug}`} className="inline-flex text-sm font-semibold text-ink underline">¿Hay algún dato incorrecto? Avísanos</Link>
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

function InfoBlock({ title, items }: { title: string; items: string[][] }) {
  return (
    <section className="card p-6">
      <h2 className="text-2xl font-semibold text-ink">{title}</h2>
      <dl className="mt-5 grid gap-4 sm:grid-cols-2">
        {items.map(([label, value]) => (
          <div key={label} className="rounded-xl border border-line bg-soft p-4">
            <dt className="label">{label}</dt>
            <dd className="mt-2 break-words text-sm font-semibold text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
