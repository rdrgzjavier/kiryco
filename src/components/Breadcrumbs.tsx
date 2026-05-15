import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Migas de pan" className="mb-5 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="font-semibold text-slatecopy hover:text-ink">Tenlo</Link></li>
        {items.map((item) => (
          <li key={`${item.label}-${item.href ?? "current"}`} className="flex items-center gap-2">
            <span aria-hidden>/</span>
            {item.href ? <Link href={item.href} className="font-semibold text-slatecopy hover:text-ink">{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
