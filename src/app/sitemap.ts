import type { MetadataRoute } from "next";
import { categories, centers, listings, municipalities, providers } from "@/lib/mock-data";

const baseUrl = "https://tenlo.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/buscar", "/categoria", "/centros", "/servicios", "/comunidad", "/publicar", "/contacto"];
  const localRoutes = municipalities.flatMap((municipality) => categories.map((category) => `/${municipality.slug}/${category.slug}`));
  const categoryRoutes = categories.map((category) => `/categoria/${category.slug}`);
  const centerRoutes = centers.map((center) => `/centros/${center.slug}`);
  const serviceRoutes = providers.map((provider) => `/servicios/${provider.id}`);
  const listingRoutes = listings.map((listing) => `/anuncios/${listing.slug}`);

  return [...staticRoutes, ...localRoutes, ...categoryRoutes, ...centerRoutes, ...serviceRoutes, ...listingRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : route.startsWith("/las-rozas") || route.startsWith("/majadahonda") || route.startsWith("/pozuelo") || route.startsWith("/boadilla") ? 0.8 : 0.6
  }));
}
