import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import type { Center } from "@/lib/types";
import { TrustBadge } from "./Badge";

const centerFallbacks = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
];

function fallbackImage(slug: string) {
  const index = Array.from(slug).reduce((total, char) => total + char.charCodeAt(0), 0) % centerFallbacks.length;
  return centerFallbacks[index];
}

export default function CenterCard({ center }: { center: Center }) {
  const detailHref = `/centros/${center.slug}`;

  return (
    <article className="card flex h-full flex-col overflow-hidden">
      <Link href={detailHref} aria-label={`Ver centro educativo ${center.name}`} className="relative block">
        <ImageWithFallback src={center.image} fallbackSrc={fallbackImage(center.slug)} alt={`Imagen de ${center.name}`} className="h-40 w-full object-cover" />
        <span className="absolute right-3 top-3"><TrustBadge level={center.trustLevel} variant="solid" /></span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="chip capitalize">{center.type}</span>
          {center.religiousCharacter ? <span className="chip capitalize">{center.religiousCharacter}</span> : null}
        </div>
        <h3 className="text-xl font-semibold text-ink"><Link href={detailHref}>{center.name}</Link></h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{center.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {center.tags.slice(0, 6).map((tag) => <span key={tag} className="rounded-full bg-soft px-3 py-1 text-sm font-semibold text-slatecopy">{tag}</span>)}
        </div>
        <dl className="mt-4 grid gap-2 pb-5 text-sm text-slatecopy">
          <div className="flex justify-between gap-3"><dt>Municipio</dt><dd className="font-medium text-ink">{center.municipality}</dd></div>
          <div className="flex justify-between gap-3"><dt>Etapas</dt><dd className="text-right font-medium text-ink">{center.stages.join(", ")}</dd></div>
          <div className="flex justify-between gap-3"><dt>Idiomas</dt><dd className="font-medium text-ink">{center.languages.join(", ")}</dd></div>
        </dl>
        <Link href={detailHref} aria-label={`Ver centro educativo ${center.name}`} className="btn-primary mt-auto w-full justify-center">Ver centro</Link>
      </div>
    </article>
  );
}
