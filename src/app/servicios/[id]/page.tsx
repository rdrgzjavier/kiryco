import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Mail, Phone, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageWithFallback from "@/components/ImageWithFallback";
import JsonLd from "@/components/JsonLd";
import ProfileAvatar from "@/components/ProfileAvatar";
import { trackingAttrs } from "@/lib/analytics";
import { uniqueDisplayTags } from "@/lib/display-labels";
import { ageLabel, findProvider, listings, providers } from "@/lib/mock-data";

const serviceFallbackImage = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600";

function isPersonalProvider(provider: NonNullable<ReturnType<typeof findProvider>>) {
  const value = [provider.id, provider.category, provider.businessName, ...provider.tags].join(" ").toLowerCase();
  return value.includes("canguro") || value.includes("profesor") || value.includes("particular");
}

function cleanValue(value?: string) {
  if (!value || value.toLowerCase().includes("pendiente")) return "No indicado";
  return value;
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
  const isVerified = provider.trustLevel === "verified" || provider.trustLevel === "official";
  const visibleTags = uniqueDisplayTags(provider.tags, [provider.category, provider.municipality, provider.serviceArea]).slice(0, 6);
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
        telephone: cleanValue(provider.phone),
        email: providerEmail,
        url: providerUrl
      }} />

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <article>
          <ImageWithFallback src={provider.image} fallbackSrc={serviceFallbackImage} alt={`Imagen de ${provider.businessName}`} className="h-64 w-full rounded-2xl border border-line object-cover sm:h-80" />
          <div className="mt-6 flex items-center gap-4">
            <ProfileAvatar name={provider.businessName} role="provider" image={provider.image} />
            <div className="flex min-w-0 items-start gap-3">
              {isVerified ? <ShieldCheck className="mt-2 shrink-0 text-emerald-700" size={28} aria-label="Ficha verificada" /> : null}
              <h1 className="page-title m-0">{provider.businessName}</h1>
            </div>
          </div>
          <p className="lead">{provider.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="chip">{provider.category}</span>
            {visibleTags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
          </div>

          <section className="mt-8 grid gap-5">
            <InfoBlock title="Ubicación y modalidad" items={[
              ["Zona de cobertura", provider.serviceArea],
              ["Municipio", provider.municipality],
              ["Modalidad", listing?.details.Modalidad ?? "Consultar"],
              ["Edad recomendada", listing ? ageLabel(listing) : "Consultar edad recomendada"]
            ]} />
            <InfoBlock title="Contacto" items={[
              ["Web oficial", providerUrl ? provider.website : "No indicado"],
              ["Email", providerEmail ? provider.email : "No indicado"],
              ["Teléfono", cleanValue(provider.phone)]
            ]} />
            <InfoBlock title="Disponibilidad y condiciones" items={[
              ["Precio", listing?.priceLabel ?? "Consultar"],
              ["Disponibilidad", listing?.availability ?? "Consultar disponibilidad"],
              ["Condiciones", listing?.details.Horario ?? "Confirmar directamente con el proveedor"]
            ]} />
            <Link href={`/sugerencias?context=servicio&item=${provider.id}`} className="inline-flex text-sm font-semibold text-ink underline">¿Hay algún dato incorrecto? Avísanos</Link>
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
          <h2 className="text-xl font-semibold text-ink">{personalProvider ? "Contacto entre adultos" : "Contacto del servicio"}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            {personalProvider
              ? "En servicios entre particulares, acuerda siempre la comunicación como adulto responsable y evita compartir datos identificativos de menores."
              : "Consulta la web o los datos públicos del proveedor antes de reservar o contratar."}
          </p>
          {providerUrl ? (
            <a href={providerUrl} target="_blank" rel="noreferrer" className="btn-primary mt-5 w-full" {...trackingAttrs("external_web", { item: provider.id, type: "provider" })}>
              Web oficial<ExternalLink size={16} />
            </a>
          ) : providerEmail ? (
            <a href={`mailto:${provider.email}`} className="btn-primary mt-5 w-full" {...trackingAttrs("contact_email", { item: provider.id, type: "provider" })}>
              <Mail size={16} /> Contactar
            </a>
          ) : cleanValue(provider.phone) !== "No indicado" ? (
            <a href={`tel:${provider.phone.replace(/\s/g, "")}`} className="btn-primary mt-5 w-full" {...trackingAttrs("contact_phone", { item: provider.id, type: "provider" })}>
              <Phone size={16} /> Llamar
            </a>
          ) : null}
          <Link href={`/validar-ficha?tipo=servicio&id=${provider.id}`} className="btn-secondary mt-3 w-full" {...trackingAttrs("claim_profile_click", { item: provider.id, type: "provider" })}>Validar ficha</Link>
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
