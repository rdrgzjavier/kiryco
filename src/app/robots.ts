import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/login", "/area-personal", "/favoritos", "/mis-publicaciones", "/datos-cuenta", "/publicar", "/admin/", "/dashboard", "/api/", "/*?*"],
      allow: ["/", "/buscar", "/servicios", "/centros", "/comunidad", "/zonas"]
    },
    sitemap: `${siteConfig.currentDomain}/sitemap.xml`
  };
}
