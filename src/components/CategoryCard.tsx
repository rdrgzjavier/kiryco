import Link from "next/link";
import { BookOpen, CalendarDays, GraduationCap, School, Shirt, UserCheck } from "lucide-react";
import { Category } from "@/lib/types";

const icons = {
  Shirt,
  BookOpen,
  GraduationCap,
  UserCheck,
  CalendarDays,
  School,
};

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = icons[category.icon as keyof typeof icons] ?? BookOpen;

  return (
    <Link href={`/categoria/${category.slug}`} className="group block">
      <div
        className="h-full rounded-lg border border-warm-200 p-6 transition-all duration-200 hover:border-brand-300 hover:shadow-sm"
        style={{ backgroundColor: category.color }}
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-white/70 bg-white/80 text-brand-800">
          <Icon size={24} aria-hidden="true" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-warm-900">{category.name}</h3>
        <p className="mb-5 text-sm leading-relaxed text-warm-700">{category.description}</p>
        {category.listingsCount !== undefined ? (
          <span className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-warm-700">
            {category.listingsCount} publicaciones
          </span>
        ) : null}
      </div>
    </Link>
  );
}
