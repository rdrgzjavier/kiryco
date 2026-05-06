import Link from "next/link";
import { Bookmark, CheckCircle, Clock, MapPin, School } from "lucide-react";
import { conditionLabel, formatPrice } from "@/lib/mock-data";
import { Listing } from "@/lib/types";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="card group flex h-full flex-col">
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-start justify-between gap-2">
          <span className="badge-category">{listing.categoryName}</span>
          {listing.verified ? (
            <span className="badge-verified shrink-0" title="Proveedor o publicación verificada">
              <CheckCircle size={12} /> Verificado
            </span>
          ) : null}
        </div>

        <Link href={`/anuncios/${listing.id}`} className="mb-3 block">
          <h3 className="text-lg font-semibold leading-snug text-warm-900 transition-colors group-hover:text-brand-700">
            {listing.title}
          </h3>
        </Link>

        <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-warm-600">{listing.description}</p>

        <div className="mb-5 mt-auto space-y-2.5 text-sm text-warm-600">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="shrink-0 text-warm-400" />
            <span className="truncate">{listing.municipality}{listing.area ? ` · ${listing.area}` : ""}</span>
          </div>
          {listing.centerName ? (
            <div className="flex items-center gap-2">
              <School size={16} className="shrink-0 text-warm-400" />
              <span className="truncate">{listing.centerName}</span>
            </div>
          ) : null}
          {(listing.recommendedAgeMin !== undefined || listing.recommendedAgeMax !== undefined) ? (
            <div className="flex items-center gap-2">
              <Clock size={16} className="shrink-0 text-warm-400" />
              <span>
                {listing.recommendedAgeMin !== undefined && listing.recommendedAgeMax !== undefined
                  ? `${listing.recommendedAgeMin}-${listing.recommendedAgeMax} años`
                  : listing.recommendedAgeMin !== undefined
                    ? `Desde ${listing.recommendedAgeMin} años`
                    : `Hasta ${listing.recommendedAgeMax} años`}
              </span>
            </div>
          ) : null}
        </div>

        <div className="flex items-center justify-between border-t border-warm-100 pt-4">
          <div>
            <div className="text-lg font-bold text-warm-900">{formatPrice(listing.price, listing.priceType)}</div>
            {conditionLabel(listing.condition) ? (
              <div className="mt-1 text-xs font-medium text-warm-500">{conditionLabel(listing.condition)}</div>
            ) : null}
          </div>
          <div className="flex gap-2">
            <Link href={`/anuncios/${listing.id}`} className="btn-secondary px-3 py-2">
              Ver detalle
            </Link>
            <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-warm-200 text-warm-600 hover:bg-warm-100" aria-label="Guardar favorito">
              <Bookmark size={17} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
