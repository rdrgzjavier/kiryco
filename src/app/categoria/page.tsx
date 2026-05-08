// Force update: 2026-05-08T12:48
import type { Metadata } from "next";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Categorías para familias | Tenlo",
  description: "Explora uniformes, libros, clases, canguros, extraescolares y centros educativos por zona y centro."
};

export default function CategoriesPage() {
  return (
    <div className="section-shell">
      <p className="label">Categorías</p>
      <h1 className="page-title">Qué puedes encontrar en Tenlo</h1>
      <p className="lead">Accede a cada categoría con páginas preparadas para búsquedas locales y contenido útil para familias adultas.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => <CategoryCard key={category.id} category={category} />)}
      </div>
    </div>
  );
}
