import type { Metadata } from "next";
import CategoryPageView from "@/components/CategoryPageView";
import { findCategory } from "@/lib/mock-data";

const category = findCategory("extraescolares")!;

export const metadata: Metadata = {
  title: category.seoTitle,
  description: category.seoDescription
};

export default function ExtraescolaresPage() {
  return <CategoryPageView category={category} />;
}
