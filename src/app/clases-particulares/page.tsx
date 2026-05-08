import type { Metadata } from "next";
import CategoryPageView from "@/components/CategoryPageView";
import { findCategory } from "@/lib/mock-data";

const category = findCategory("clases-particulares")!;

export const metadata: Metadata = {
  title: category.seoTitle,
  description: category.seoDescription
};

export default function ClasesParticularesPage() {
  return <CategoryPageView category={category} />;
}
