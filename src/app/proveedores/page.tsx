import { providers } from "@/lib/mock-data";

export default function ProveedoresPage() {
  return (
    <div className="page py-10">
      <p className="label">Profesionales y negocios locales</p>
      <h1 className="mt-2 text-4xl font-bold text-ink">Servicios y profesionales locales</h1>
      <p className="mt-3 max-w-3xl text-slatecopy">
        Para profesores particulares, academias, clubes deportivos, tiendas de uniformes, librerías, canguros profesionales, campamentos, idiomas y apoyo especializado.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {["Gratuito", "Destacado", "Premium"].map((plan) => (
          <article key={plan} className="card p-6">
            <h2 className="text-xl font-semibold text-ink">Plan {plan}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">Perfil, visibilidad local y estructura preparada para futuras mejoras.</p>
          </article>
        ))}
      </div>
      <h2 className="section-title mt-12">Servicios destacados</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {providers.map((provider) => (
          <article key={provider.id} className="card p-5">
            <span className="chip">{provider.category}</span>
            <h3 className="mt-3 text-lg font-semibold text-ink">{provider.businessName}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{provider.description}</p>
            <p className="mt-4 text-sm font-semibold text-slatecopy">{provider.serviceArea}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
