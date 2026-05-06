import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/lib/types";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/categoria/${category.slug}`} className="card group block p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
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
