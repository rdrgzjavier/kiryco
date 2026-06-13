import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SafeEnvironmentCard from "@/components/SafeEnvironmentCard";
import { ExternalLink } from "lucide-react";
import { TrustBadge } from "@/components/Badge";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageWithFallback from "@/components/ImageWithFallback";
import JsonLd from "@/components/JsonLd";
import ProfileAvatar from "@/components/ProfileAvatar";
import { trackingAttrs } from "@/lib/analytics";
import { ageLabel, findProvider, listings, providers } from "@/lib/mock-data";

function isPersonalProvider(provider: NonNullable<ReturnType<typeof findProvider>>) {
  const value = [provider.id, provider.category, provider.businessName, ...provider.tags].join(" ").toLowerCase();
  return value.includes("canguro") || value.includes("profesor") || value.includes("particular");
}

export function generateStaticParams() {
  return providers.map((provider) => ({ id: provider.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const provider = findProvider(params.id);
  if (!provider) return { title: "Servicio no encontrado | Tenlo" };
  return { title: `${provider.businessName} | Servicios para familias | Tenlo`, description: provider.description };
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const provider = findProvider(params.id);
  if (!provider) notFound();
  const personalProvider = isPersonalProvider(provider);
  const listing = listings.find((item) => item.userId === provider.userId && item.publicationType === "proveedor");
  const providerUrl = provider.website?.startsWith("http") ? provider.website : undefined;
  const providerEmail = provider.email.includes("@") ? provider.email : undefined;
  const sourceLabel = provider.sourceName ?? (providerUrl ? "Web oficial del proveedor" : "Información pendiente de validar por Tenlo");
  const reviewDate = provider.lastReviewed ?? "Información pendiente de revisión";
  const relatedServices = providers
    .filter((item) => item.id !== provider.id && (item.municipality === provider.municipality || item.category === provider.category))
    .slice(0, 3);

  return (
    <div className="section-shell">
      <Breadcrumbs items={[{ label: "Servicios", href: "/servicios" }, { label: provider.businessName }]} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: provider.businessName,
        description: provider.description,
        areaServed: provider.serviceArea,
        telephone: provider.phone,
        email: providerEmail,
        url: providerUrl
      }} />
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <article>
          <ImageWithFallback src={provider.image} fallbackSrc="/images/cards/servicio-familiar.svg" alt={`Imagen de ${provider.businessName}`} className="h-64 w-full rounded-2xl border border-line object-cover sm:h-80" />
          <div className="mt-6 flex flex-wrap gap-2"><span className="chip">{provider.category}</span><TrustBadge level={provider.trustLevel} />{provider.tags.slice(0, 6).map((tag) => <span key={tag} className="chip">{tag}</span>)}</div>
          <div className="mt-6 flex items-center gap-4">
            <ProfileAvatar name={provider.businessName} role="provider" image={provider.image} />
            <h1 className="page-title m-0">{provider.businessName}</h1>
          </div>
          <p className="lead">{provider.description}</p>
          <section className="mt-8 card p-6">
            <h2 className="text-xl font-semibold text-ink">Información útil</h2>
            <dl className="mt-4 grid gap-3 text-sm text-slatecopy">
              <div className="flex justify-between gap-4"><dt>Zona</dt><dd className="text-right font-semibold text-ink">{provider.serviceArea}</dd></div>
              <div className="flex justify-between gap-4"><dt>Municipio</dt><dd className="text-right font-semibold text-ink">{provider.municipality}</dd></div>
              <div className="flex justify-between gap-4"><dt>Edad recomendada</dt><dd className="text-right font-semibold text-ink">{listing ? ageLabel(listing) : "Consultar"}</dd></div>
              <div className="flex justify-between gap-4"><dt>Precio</dt><dd className="text-right font-semibold text-ink">{listing?.priceLabel ?? "Consultar"}</dd></div>
              <div className="flex justify-between gap-4"><dt>Disponibilidad</dt><dd className="text-right font-semibold text-ink">{listing?.availability ?? "Consultar disponibilidad"}</dd></div>
              <div className="flex justify-between gap-4"><dt>Teléfono</dt><dd className="text-right font-semibold text-ink">{provider.phone}</dd></div>
              <div className="flex justify-between gap-4"><dt>Email</dt><dd className="text-right font-semibold text-ink">{provider.email}</dd></div>
              <div className="flex justify-between gap-4"><dt>Fuente</dt><dd className="text-right font-semibold text-ink">{sourceLabel}</dd></div>
              <div className="flex justify-between gap-4"><dt>Última revisión</dt><dd className="text-right font-semibold text-ink">{reviewDate}</dd></div>
              <div className="flex justify-between gap-4"><dt>Estado de verificación</dt><dd className="text-right font-semibold text-ink">{provider.verificationStatus ?? "Información pendiente de revisión"}</dd></div>
            </dl>
            <Link href="/contacto" className="mt-5 inline-flex text-sm font-semibold text-ink underline">¿Hay un dato incorrecto? Avísanos</Link>
          </section>
          <section className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="card p-5">
              <h2 className="text-lg font-semibold text-ink">Servicios incluidos</h2>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted">
                {provider.tags.slice(0, 4).map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
            <div className="card p-5">
              <h2 className="text-lg font-semibold text-ink">Condiciones</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{listing?.details?.Horario ?? listing?.availability ?? "Confirma disponibilidad, precios y condiciones directamente con el proveedor antes de reservar."}</p>
            </div>
          </section>
          {relatedServices.length > 0 ? (
            <section className="mt-6 card p-5">
              <h2 className="text-lg font-semibold text-ink">Servicios relacionados</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {relatedServices.map((item) => (
                  <Link key={item.id} href={`/servicios/${item.id}`} className="rounded-2xl border border-line bg-soft p-4 text-sm font-semibold text-slatecopy hover:text-ink">
                    {item.businessName}
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </article>
        <aside className="card h-fit p-6">
          {personalProvider ? <SafeEnvironmentCard compact title="Contacto protegido" body="En servicios entre particulares, Tenlo protege los datos de contacto y recomienda acordar siempre la comunicación entre adultos responsables." /> : null}
          {providerUrl ? <a href={providerUrl} target="_blank" rel="noreferrer" className="btn-primary mt-5 w-full" {...trackingAttrs("external_web", { item: provider.id, type: "provider" })}>Web oficial<ExternalLink size={16} /></a> : providerEmail ? <a href={`mailto:${provider.email}`} className="btn-primary mt-5 w-full" {...trackingAttrs("contact_email", { item: provider.id, type: "provider" })}>Contactar</a> : null}
          <Link href={`/validar-ficha?tipo=servicio&id=${provider.id}`} className="btn-secondary mt-3 w-full" {...trackingAttrs("claim_profile_click", { item: provider.id, type: "provider" })}>Validar ficha</Link>
        </aside>
      </div>
    </div>
  );
}
