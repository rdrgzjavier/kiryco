import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPageView from "@/components/CategoryPageView";
import { categories, findCategory } from "@/lib/mock-data";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = findCategory(params.slug);
  return {
    title: category?.seoTitle ?? "Categoría | Tenlo",
    description: category?.seoDescription
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = findCategory(params.slug);
  if (!category) notFound();
  return <CategoryPageView category={category} />;
}
