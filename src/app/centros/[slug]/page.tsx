import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { centers, findCenter, reviews } from "@/lib/mock-data";
import { VerifiedBadge } from "@/components/Badge";

export function generateStaticParams() {
  return centers.map((center) => ({ slug: center.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const center = findCenter(params.slug);
  return { title: `${center?.name ?? "Centro educativo"} | Proyecto Familias`, description: center?.description };
}

export default function CenterDetailPage({ params }: { params: { slug: string } }) {
  const center = findCenter(params.slug);
  if (!center) notFound();
  const centerReviews = reviews.filter((review) => review.centerId === center.id && review.status === "published");

  return (
    <div className="page py-10">
      <div className="flex flex-wrap items-center gap-2">
        <span className="chip capitalize">{center.type}</span>
        <VerifiedBadge verified={center.verified} />
      </div>
      <h1 className="mt-4 text-4xl font-bold text-ink">{center.name}</h1>
      <p className="mt-3 max-w-3xl text-lg leading-8 text-slatecopy">{center.description}</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="card p-6">
          <h2 className="text-2xl font-semibold text-ink">Datos públicos</h2>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              ["Municipio", center.municipality],
              ["Dirección", center.address],
              ["Teléfono", center.phone],
              ["Email", center.email],
              ["Web oficial", center.website],
              ["Etapas", center.stages.join(", ")],
              ["Idiomas", center.languages.join(", ")],
              ["Servicios", center.services.join(", ")]
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-line bg-soft p-4">
                <dt className="label">{label}</dt>
                <dd className="mt-2 text-sm font-semibold text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <aside className="card h-fit p-6">
          <h2 className="text-xl font-semibold text-ink">Solicitar revisión de ficha</h2>
          <p className="mt-2 text-sm leading-6 text-muted">Los centros pueden proponer correcciones o validar datos públicos.</p>
          <Link href="/centros-educativos" className="btn-primary mt-5 w-full">Solicitar revisión</Link>
        </aside>
      </div>
      <section className="mt-8 card p-6">
        <h2 className="text-2xl font-semibold text-ink">Reseñas estructuradas</h2>
        <p className="mt-2 rounded-xl border border-line bg-soft p-4 text-sm leading-6 text-slatecopy">
          Las valoraciones están moderadas y buscan ayudar a las familias con información útil y respetuosa.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {centerReviews.map((review) => (
            <article key={review.id} className="rounded-xl border border-line p-4">
              <p className="text-sm leading-6 text-slatecopy">{review.comment}</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold text-muted">
                <span>Comunicación {review.ratingCommunication}/5</span>
                <span>Instalaciones {review.ratingFacilities}/5</span>
                <span>Ambiente {review.ratingEnvironment}/5</span>
                <span>Idiomas {review.ratingLanguages}/5</span>
                <span>Actividades {review.ratingActivities}/5</span>
                <span>Atención {review.ratingAttention}/5</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
