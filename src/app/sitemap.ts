import type { MetadataRoute } from "next";
import { categories, centers, listings, municipalities, providers } from "@/lib/mock-data";
import { siteConfig } from "@/lib/site";

const baseUrl = siteConfig.currentDomain;

function hasPublishedListings(categoryId: string, municipalityName?: string) {
  return listings.some((listing) => (
    listing.status === "published" &&
    listing.categoryId === categoryId &&
    (!municipalityName || listing.municipality === municipalityName)
  ));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/buscar", "/categoria", "/centros", "/servicios", "/comunidad"];
  const trustRoutes = ["/privacidad", "/aviso-legal", "/cookies", "/normas-comunidad", "/contacto"];
  const zoneRoutes = municipalities.map((municipality) => `/zonas/${municipality.slug}`);
  const localRoutes = municipalities.flatMap((municipality) => (
    categories
      .filter((category) => hasPublishedListings(category.id, municipality.name))
      .map((category) => `/${municipality.slug}/${category.slug}`)
  ));
  const categoryRoutes = categories
    .filter((category) => hasPublishedListings(category.id))
    .map((category) => `/categoria/${category.slug}`);
  const centerRoutes = centers.map((center) => `/centros/${center.slug}`);
  const serviceRoutes = providers.map((provider) => `/servicios/${provider.id}`);
  const listingRoutes = listings
    .filter((listing) => listing.status === "published")
    .map((listing) => `/anuncios/${listing.slug}`);
  const routes = Array.from(new Set([
    ...staticRoutes,
    ...trustRoutes,
    ...zoneRoutes,
    ...localRoutes,
    ...categoryRoutes,
    ...centerRoutes,
    ...serviceRoutes,
    ...listingRoutes
  ]));

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === ""
      ? 1
      : route.startsWith("/las-rozas") || route.startsWith("/majadahonda") || route.startsWith("/pozuelo") || route.startsWith("/boadilla") || route.startsWith("/zona/") || route.startsWith("/zonas/")
        ? 0.8
        : route.startsWith("/centros/") || route.startsWith("/servicios/") || route.startsWith("/anuncios/")
          ? 0.7
          : 0.6
  }));
}
