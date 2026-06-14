import type { Metadata } from "next";
import FeedbackForm from "@/components/FeedbackForm";

export const metadata: Metadata = {
  title: "Sugerencias y mejoras | Tenlo",
  description: "Propón mejoras, recursos locales, centros o servicios que echas en falta en Tenlo."
};

export default function SuggestionsPage({ searchParams }: { searchParams: { context?: string; item?: string } }) {
  return (
    <main className="section-shell">
      <p className="label">Ayúdanos a mejorar Tenlo</p>
      <h1 className="page-title">¿Echas en falta algo?</h1>
      <p className="lead max-w-3xl">
        Tenlo está creciendo con información local útil para familias. Si detectas un dato incorrecto, conoces un servicio que debería aparecer o tienes una idea para mejorar la experiencia, cuéntanoslo.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="card p-6">
          <h2 className="text-2xl font-semibold text-ink">Enviar sugerencia</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Revisamos las propuestas antes de incorporarlas. No incluyas datos identificativos de menores, fotos personales ni información sensible.
          </p>
          <div className="mt-6">
            <FeedbackForm context={searchParams.context} itemId={searchParams.item} />
          </div>
        </section>

        <aside className="card h-fit p-6">
          <h2 className="text-xl font-semibold text-ink">Qué nos ayuda</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
            <li>Centros, servicios o actividades que faltan en Las Rozas, Majadahonda, Pozuelo o Boadilla.</li>
            <li>Datos públicos que deberíamos corregir en una ficha.</li>
            <li>Necesidades reales de familias que Tenlo todavía no resuelve bien.</li>
            <li>Ideas para hacer más clara la búsqueda o la comparación.</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
