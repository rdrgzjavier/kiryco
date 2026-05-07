import Link from "next/link";
import { Bookmark, MessageCircle } from "lucide-react";
import Avatar, { roleFromPublicationType } from "@/components/Avatar";
import { ageLabel, categories, centers } from "@/lib/mock-data";
import type { Listing } from "@/lib/types";
import { StatusBadge, VerifiedBadge } from "./Badge";

const authorNames = { familia: "Familia verificada", proveedor: "Actividad o servicio local", centro: "Centro educativo", comunidad: "Tablón moderado" };

function fallbackImage(categoryId: string) {
  if (categoryId === "centros") return "/images/cards/centro-educativo.svg";
  if (categoryId === "extraescolares") return "/images/cards/actividad.svg";
  if (categoryId === "uniformes" || categoryId === "libros-material") return "/images/cards/producto.svg";
  return "/images/cards/servicio-familiar.svg";
}

export default function ListingCard({ listing }: { listing: Listing }) {
  const category = categories.find((item) => item.id === listing.categoryId);
  const center = centers.find((item) => item.id === listing.centerId);
  const role = roleFromPublicationType(listing.publicationType);

  return (
    <article className="card flex h-full flex-col overflow-hidden">
      <img src={listing.image ?? fallbackImage(listing.categoryId)} alt={`Imagen de ${listing.title}`} className="h-40 w-full object-cover" loading="lazy" />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="chip">{category?.name}</span>
          <VerifiedBadge verified={listing.verified} />
          {listing.status !== "published" ? <StatusBadge status={listing.status} /> : null}
        </div>
        <div className="mb-4 rounded-xl bg-soft p-3"><Avatar name={authorNames[listing.publicationType]} role={role} /></div>
        <h3 className="text-lg font-semibold leading-7 text-ink">{listing.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{listing.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {listing.tags.slice(0, 5).map((tag) => <span key={tag} className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-slatecopy">{tag}</span>)}
        </div>
        <dl className="mt-4 grid gap-2 text-sm text-slatecopy">
          <div className="flex justify-between gap-3"><dt>Zona</dt><dd className="font-medium text-ink">{listing.municipality}</dd></div>
          {center ? <div className="flex justify-between gap-3"><dt>Centro</dt><dd className="text-right font-medium text-ink">{center.name}</dd></div> : null}
          <div className="flex justify-between gap-3"><dt>Edad</dt><dd className="font-medium text-ink">{ageLabel(listing)}</dd></div>
          <div className="flex justify-between gap-3"><dt>Precio</dt><dd className="font-medium text-ink">{listing.priceLabel ?? (listing.price ? `${listing.price} €` : "Consultar")}</dd></div>
        </dl>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <Link href={`/anuncios/${listing.slug}`} className="btn-primary flex-1 text-center">Ver detalle</Link>
          <button className="icon-button" aria-label="Contactar"><MessageCircle size={18} /></button>
          <button className="icon-button" aria-label="Guardar"><Bookmark size={18} /></button>
        </div>
      </div>
    </article>
  );
}
