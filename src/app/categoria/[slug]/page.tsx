import Link from "next/link";
import ListingCard from "@/components/ListingCard";
import { categories, getCategoryBySlug, getListingsByCategory } from "@/lib/mock-data";
import { notFound } from "next/navigation";
export const generateStaticParams = () => categories.map((category) => ({ slug: category.slug }));
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const category = getCategoryBySlug(slug); if (!category) notFound(); const results = getListingsByCategory(category.slug); return <div className="page-container py-10"><h1 className="mb-4">{category.name} cerca de tu centro</h1><p className="mb-6 text-warm-700">{category.description}</p><div className="mb-8 flex gap-3"><Link className="btn-primary" href={`/buscar?cat=${category.slug}`}>Filtrar</Link><Link className="btn-secondary" href="/publicar">Publicar</Link></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{results.map((l) => <ListingCard key={l.id} listing={l} />)}</div></div>; }
