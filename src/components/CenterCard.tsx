import Link from "next/link";
import { BookOpen, CheckCircle, MapPin, Star } from "lucide-react";
import { formatCenterType, formatStage } from "@/lib/mock-data";
import { Center } from "@/lib/types";

export default function CenterCard({ center }: { center: Center }) {
  return (
    <article className="card group flex h-full flex-col">
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-start justify-between gap-2">
          <span className="badge-category bg-brand-50 text-brand-700">{formatCenterType(center.type)}</span>
          {center.verified ? (
            <span className="badge-verified shrink-0">
              <CheckCircle size={12} /> Verificado
            </span>
          ) : null}
        </div>

        <Link href={`/centros/${center.slug}`} className="mb-3 block">
          <h3 className="text-lg font-semibold text-warm-900 transition-colors group-hover:text-brand-700">
            {center.name}
          </h3>
        </Link>

        <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-warm-600">{center.description}</p>

        <div className="mb-5 mt-auto space-y-2.5 text-sm text-warm-600">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="shrink-0 text-warm-400" />
            <span>{center.municipality}</span>
          </div>
          <div className="flex items-start gap-2">
            <BookOpen size={16} className="mt-0.5 shrink-0 text-warm-400" />
            <div className="flex flex-wrap gap-1">
              {center.stages.map((stage) => (
                <span key={stage} className="rounded-md bg-warm-100 px-2 py-0.5 text-xs text-warm-700">
                  {formatStage(stage)}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-warm-100 pt-4">
          {center.averageRating ? (
            <div className="flex items-center gap-1.5">
              <Star size={16} className="fill-amber-400 text-amber-400" />
              <span className="font-semibold text-warm-900">{center.averageRating}</span>
              <span className="text-xs text-warm-500">({center.totalReviews})</span>
            </div>
          ) : (
            <span className="text-sm text-warm-500">Sin valoraciones</span>
          )}
          <Link href={`/centros/${center.slug}`} className="text-sm font-semibold text-brand-700 hover:text-brand-800">
            Ver ficha
          </Link>
        </div>
      </div>
    </article>
  );
}
