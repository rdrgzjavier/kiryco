import { centers, listings, providers } from "@/lib/mock-data";

function publishedCount(categoryId?: string) {
  return listings.filter((listing) => {
    if (listing.status !== "published") return false;
    return categoryId ? listing.categoryId === categoryId : true;
  }).length;
}

export function getSiteStats() {
  const registeredFamilies = Number(process.env.TENLO_REGISTERED_FAMILIES ?? 0);

  return {
    centers: centers.length || publishedCount("centros"),
    localResources: providers.length || publishedCount(),
    families: Number.isFinite(registeredFamilies) ? registeredFamilies : 0
  };
}

export function formatStat(value: number) {
  if (value >= 1000) {
    const rounded = value / 1000;
    return `${Number.isInteger(rounded) ? rounded.toFixed(0) : rounded.toFixed(1)}k`;
  }

  return value.toLocaleString("es-ES");
}
