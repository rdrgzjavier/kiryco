import Link from "next/link";
import { ArrowRight, Baby, BookOpen, GraduationCap, HeartHandshake, LandPlot, Shirt, School } from "lucide-react";
import type { Category } from "@/lib/types";

const icons = {
  uniformes: Shirt,
  "libros-material": BookOpen,
  "clases-particulares": GraduationCap,
  canguros: Baby,
  extraescolares: LandPlot,
  centros: School
};

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = icons[category.slug as keyof typeof icons] ?? HeartHandshake;
  return (
    <Link href={`/categoria/${category.slug}`} className="card group block p-5">
      <div className="flex h-full items-start justify-between gap-4">
        <div>
          <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-soft text-ink ring-1 ring-line">
            <Icon size={22} aria-hidden />
          </span>
          <h3 className="text-xl font-semibold text-ink">{category.name}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{category.description}</p>
        </div>
        <span className="icon-button shrink-0 group-hover:border-ink">
          <ArrowRight size={18} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
