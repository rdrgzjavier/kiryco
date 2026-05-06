import Link from "next/link";
import type { Center } from "@/lib/types";
import { VerifiedBadge } from "./Badge";

export default function CenterCard({ center }: { center: Center }) {
  return (
    <article className="card p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="chip capitalize">{center.type}</span>
        <VerifiedBadge verified={center.verified} />
      </div>
      <h3 className="text-xl font-semibold text-ink">{center.name}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{center.description}</p>
      <dl className="mt-4 grid gap-2 text-sm text-slatecopy">
        <div className="flex justify-between gap-3"><dt>Municipio</dt><dd className="font-medium text-ink">{center.municipality}</dd></div>
        <div className="flex justify-between gap-3"><dt>Etapas</dt><dd className="text-right font-medium text-ink">{center.stages.join(", ")}</dd></div>
        <div className="flex justify-between gap-3"><dt>Idiomas</dt><dd className="font-medium text-ink">{center.languages.join(", ")}</dd></div>
      </dl>
      <Link href={`/centros/${center.slug}`} className="btn-secondary mt-5 w-full justify-center">Ver ficha</Link>
    </article>
  );
}
