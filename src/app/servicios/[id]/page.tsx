import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SafeEnvironmentCard from "@/components/SafeEnvironmentCard";
import { ExternalLink } from "lucide-react";
import { TrustBadge } from "@/components/Badge";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ProfileAvatar from "@/components/ProfileAvatar";
import { trackingAttrs } from "@/lib/analytics";
import { findProvider, providers } from "@/lib/mock-data";

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
        email: provider.email,
        url: provider.website !== "https://example.com" ? provider.website : undefined
      }} />
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <article>
          <img src={provider.image} alt={`Imagen de ${provider.businessName}`} className="h-64 w-full rounded-2xl border border-line object-cover sm:h-80" />
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
              <div className="flex justify-between gap-4"><dt>Teléfono</dt><dd className="text-right font-semibold text-ink">{provider.phone}</dd></div>
              <div className="flex justify-between gap-4"><dt>Email</dt><dd className="text-right font-semibold text-ink">{provider.email}</dd></div>
            </dl>
          </section>
        </article>
        <aside className="card h-fit p-6">
          {personalProvider ? <SafeEnvironmentCard compact title="Contacto protegido" body="En servicios entre particulares, Tenlo protege los datos de contacto y recomienda acordar siempre la comunicación entre adultos responsables." /> : null}
          {provider.website !== "https://example.com" ? <a href={provider.website} target="_blank" rel="noreferrer" className="btn-primary mt-5 w-full" {...trackingAttrs("external_web", { item: provider.id, type: "provider" })}>Web oficial<ExternalLink size={16} /></a> : <a href={`mailto:${provider.email}`} className="btn-primary mt-5 w-full" {...trackingAttrs("contact_email", { item: provider.id, type: "provider" })}>Contactar</a>}
        </aside>
      </div>
    </div>
  );
}
