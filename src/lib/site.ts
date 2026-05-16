export const siteConfig = {
  name: "Tenlo",
  domain: "https://tenlo.es",
  currentDomain: "https://kiryco.vercel.app",
  shortDescription: "Servicios, centros y recursos familiares cerca del colegio",
  description:
    "Tenlo organiza servicios, centros educativos, iniciativas y recursos familiares en Madrid noroeste, con información revisada y sin datos identificativos de menores.",
  area: "Madrid noroeste",
  municipalities: [
    "Las Rozas de Madrid",
    "Majadahonda",
    "Pozuelo de Alarcón",
    "Boadilla del Monte"
  ],
  social: {
    instagram: "https://www.instagram.com/tenlocerca/",
    linkedin: "https://www.linkedin.com/company/tenlocerca"
  }
} as const;

export function absoluteUrl(path = "") {
  return `${siteConfig.domain}${path.startsWith("/") ? path : `/${path}`}`;
}
