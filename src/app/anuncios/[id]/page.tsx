import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bookmark, Flag, MessageCircle, ShieldAlert } from "lucide-react";
import { ageLabel, categories, centers, findListing, listings } from "@/lib/mock-data";
import { StatusBadge, VerifiedBadge } from "@/components/Badge";

export function generateStaticParams() {
  return listings.map((listing) => ({ id: listing.slug }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const listing = findListing(params.id);
  return { title: `${listing?.title ?? "Anuncio"} | Proyecto Familias`, description: listing?.description };
}

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = findListing(params.id);
  if (!listing) notFound();
  const category = categories.find((item) => item.id === listing.categoryId);
  const center = centers.find((item) => item.id === listing.centerId);

  return (
    <div className="page py-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <article>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="chip">{category?.name}</span>
            <VerifiedBadge verified={listing.verified} />
            <StatusBadge status={listing.status} />
          </div>
          <h1 className="text-4xl font-bold leading-tight text-ink">{listing.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slatecopy">{listing.description}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Zona", `${listing.municipality} · ${listing.area}`],
              ["Centro relacionado", center?.name ?? "No indicado"],
              ["Edad recomendada", ageLabel(listing)],
              ["Precio", listing.priceLabel ?? (listing.price ? `${listing.price} €` : "Consultar")],
              ["Estado", listing.condition ?? "No aplica"],
              ["Disponibilidad", listing.availability ?? "Consultar"]
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
          </section>
        </article>
        <aside className="space-y-4">
          <div className="card p-5">
            <h2 className="text-xl font-semibold text-ink">Contacto protegido</h2>
            <p className="mt-2 text-sm leading-6 text-muted">El contacto se inicia desde la plataforma. No compartas datos personales de menores, horarios personales ni información sensible.</p>
            <button className="btn-primary mt-5 w-full"><MessageCircle size={16} /> Contactar</button>
            <button className="btn-secondary mt-3 w-full"><Bookmark size={16} /> Guardar favorito</button>
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
