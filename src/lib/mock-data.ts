import type { Category, Center, CommunityInitiative, CommunityPost, Listing, Municipality, Provider, Review } from "./types";

const images = {
  center: "https://images.unsplash.com/photo-1577891729319-f4871c6ec217?auto=format&fit=crop&w=1200&q=80",
  nursery: "https://images.unsplash.com/photo-1544253386-89d1b7642674?auto=format&fit=crop&w=1200&q=80",
  sport: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80",
  activity: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  books: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
  uniform: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
  service: "https://images.unsplash.com/photo-1581578731522-aa0bd3a67d28?auto=format&fit=crop&w=1200&q=80",
  community: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1200&q=80"
};

export const municipalities: Municipality[] = [
  { id: "las-rozas", name: "Las Rozas de Madrid", slug: "las-rozas", description: "Colegios, guarderías, uniformes, actividades y servicios para familias en Las Rozas de Madrid." },
  { id: "majadahonda", name: "Majadahonda", slug: "majadahonda", description: "Recursos familiares cercanos para familias de Majadahonda y Madrid noroeste." },
  { id: "pozuelo", name: "Pozuelo de Alarcón", slug: "pozuelo", description: "Directorio local para familias con centros educativos en Pozuelo de Alarcón." },
  { id: "boadilla", name: "Boadilla del Monte", slug: "boadilla", description: "Recursos próximos al colegio para familias de Boadilla del Monte." }
];

export const categories: Category[] = [
  { id: "uniformes", name: "Uniformes", slug: "uniformes", description: "Uniformes escolares, prendas y reutilización segura por zona y centro orientativo.", seoTitle: "Uniformes escolares cerca de tu centro | Tenlo", seoDescription: "Encuentra uniformes escolares en buen estado cerca de tu zona y centro educativo, con publicaciones moderadas." },
  { id: "libros-material", name: "Libros y material", slug: "libros-material", description: "Libros, material escolar, calzado y lotes por etapa educativa sin identificar a menores.", seoTitle: "Libros y material escolar cerca de ti | Tenlo", seoDescription: "Localiza libros, material escolar, calzado y lotes por municipio, edad recomendada y centro orientativo." },
  { id: "clases-particulares", name: "Clases particulares", slug: "clases-particulares", description: "Profesores, academias e idiomas para apoyo escolar, ciencias, arte y exámenes.", seoTitle: "Clases particulares en Las Rozas | Tenlo", seoDescription: "Encuentra clases particulares por materia, modalidad, municipio y nivel educativo recomendado." },
  { id: "canguros", name: "Canguros", slug: "canguros", description: "Canguros y babysitters con experiencia, disponibilidad general y referencias verificables.", seoTitle: "Canguros y babysitters en Las Rozas | Tenlo", seoDescription: "Busca canguros por zona, edad recomendada, disponibilidad general y verificación." },
  { id: "extraescolares", name: "Extraescolares", slug: "extraescolares", description: "Actividades, deporte, clubes, creatividad, música, tecnología e idiomas para distintas edades.", seoTitle: "Extraescolares y deporte cerca del colegio | Tenlo", seoDescription: "Descubre actividades extraescolares por zona, edad recomendada, precio y disponibilidad." },
  { id: "centros", name: "Centros educativos", slug: "centros", description: "Fichas estructuradas de colegios, escuelas infantiles e institutos con información pública.", seoTitle: "Colegios y centros educativos en Las Rozas | Tenlo", seoDescription: "Consulta colegios y centros educativos con información pública, etapas, servicios, etiquetas y reseñas moderadas." }
];

const baseTags = ["Madrid noroeste", "Familias"];

type CenterSeed = [string, string, string, Center["type"], NonNullable<Center["religiousCharacter"]>, string[], string, string[], string, string];
const centerSeeds: CenterSeed[] = [
  // Las Rozas
  ["el-cantizal", "colegio-el-cantizal", "Colegio El Cantizal", "publico", "laico", ["Infantil", "Primaria", "ESO"], "CEIPSO público bilingüe en Las Rozas.", ["Público", "Bilingüe"], "Las Rozas de Madrid", "916 40 73 80"],
  ["berriz-veracruz", "colegio-berriz-veracruz", "Colegio Berriz - Veracruz", "concertado", "catolico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Centro concertado católico bilingüe.", ["Concertado", "Católico"], "Las Rozas de Madrid", "916 31 82 23"],
  ["europeo-madrid", "colegio-europeo-de-madrid", "Colegio Europeo de Madrid", "privado", "laico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Colegio privado internacional.", ["Privado", "Bilingüe"], "Las Rozas de Madrid", "916 36 10 21"],
  
  // Boadilla del Monte
  ["boadilla-agora", "ceip-agora-boadilla", "CEIP Ágora", "publico", "laico", ["Infantil", "Primaria"], "Colegio público bilingüe de referencia en Boadilla.", ["Público", "Bilingüe"], "Boadilla del Monte", "916 33 03 64"],
  ["boadilla-helade", "colegio-helade-boadilla", "Colegio Hélade", "concertado", "laico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Centro concertado con excelentes instalaciones.", ["Concertado", "Laico"], "Boadilla del Monte", "916 32 63 60"],
  ["boadilla-mirabal", "mirabal-international-school", "Mirabal International School", "privado", "laico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Prestigioso colegio privado bilingüe.", ["Privado", "Internacional"], "Boadilla del Monte", "916 33 15 50"],
  ["boadilla-quercus", "colegio-quercus-boadilla", "Colegio Quercus", "concertado", "laico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Cooperativa de enseñanza con enfoque integral.", ["Concertado", "Laico"], "Boadilla del Monte", "916 33 80 50"],
  ["boadilla-stmichaels", "st-michaels-school-boadilla", "St. Michael's School", "privado", "catolico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Colegio privado con fuerte base en inglés.", ["Privado", "Bilingüe"], "Boadilla del Monte", "916 33 00 11"],
  ["ei-romanillos", "escuela-infantil-romanillos", "E.I. Romanillos", "publico", "laico", ["0-3 años"], "Escuela infantil pública en Boadilla.", ["Público", "0-3 años"], "Boadilla del Monte", "916 33 10 06"],
  ["ei-juan-austria", "escuela-infantil-juan-de-austria", "E.I. Juan de Austria", "publico", "laico", ["0-3 años"], "Escuela infantil pública de calidad.", ["Público", "0-3 años"], "Boadilla del Monte", "916 32 27 44"],

  // Pozuelo de Alarcón
  ["pozuelo-everest", "colegio-everest-pozuelo", "Colegio Everest", "privado", "catolico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Colegio privado bilingüe en Pozuelo.", ["Privado", "Católico"], "Pozuelo de Alarcón", "917 15 45 42"],
  ["pozuelo-kensington", "colegio-kensington-pozuelo", "Colegio Kensington", "privado", "laico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Colegio británico de alto nivel.", ["Privado", "Británico"], "Pozuelo de Alarcón", "917 15 46 12"],
  ["pozuelo-sanjose", "ceip-san-jose-obrero-pozuelo", "CEIP San José Obrero", "publico", "laico", ["Infantil", "Primaria"], "Colegio público de Pozuelo.", ["Público", "Laico"], "Pozuelo de Alarcón", "913 52 14 62"],
  ["pozuelo-montetabor", "colegio-monte-tabor-pozuelo", "Colegio Monte Tabor", "concertado", "catolico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Centro concertado con ideario católico.", ["Concertado", "Católico"], "Pozuelo de Alarcón", "917 15 57 55"],
  ["pozuelo-british", "british-council-school-pozuelo", "British Council School", "privado", "laico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "El colegio oficial del British Council.", ["Privado", "Británico"], "Pozuelo de Alarcón", "913 37 36 00"],
  ["ei-los-alamos", "escuela-infantil-los-alamos", "E.I. Los Álamos", "publico", "laico", ["0-3 años"], "Escuela infantil pública en Pozuelo.", ["Público", "0-3 años"], "Pozuelo de Alarcón", "913 52 14 61"],
  ["ei-principito", "escuela-infantil-el-principito-pozuelo", "E.I. El Principito", "publico", "laico", ["0-3 años"], "Escuela infantil de la Comunidad de Madrid.", ["Público", "0-3 años"], "Pozuelo de Alarcón", "913 52 66 44"],

  // Majadahonda
  ["majadahonda-caude", "colegio-caude-majadahonda", "Colegio Caude", "concertado", "laico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Centro concertado de calidad en Majadahonda.", ["Concertado", "Laico"], "Majadahonda", "916 38 65 11"],
  ["majadahonda-sanjaime", "colegio-san-jaime-majadahonda", "Colegio San Jaime", "concertado", "catolico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Prestigioso colegio concertado.", ["Concertado", "Católico"], "Majadahonda", "916 34 16 02"],
  ["majadahonda-quevedo", "ceip-francisco-de-quevedo-majadahonda", "CEIP Francisco de Quevedo", "publico", "laico", ["Infantil", "Primaria"], "Colegio público bilingüe.", ["Público", "Bilingüe"], "Majadahonda", "916 38 72 13"],
  ["majadahonda-engage", "colegio-engage-majadahonda", "Colegio Engage", "privado", "laico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Enfoque en innovación y tecnología.", ["Privado", "Innovación"], "Majadahonda", "916 34 50 63"],
  ["majadahonda-galdos", "ceip-benito-perez-galdos-majadahonda", "CEIP Benito Pérez Galdós", "publico", "laico", ["Infantil", "Primaria"], "Colegio público comprometido.", ["Público", "Laico"], "Majadahonda", "916 34 23 11"],
  ["ei-tamaral", "escuela-infantil-tamaral-majadahonda", "E.I. Tamaral", "publico", "laico", ["0-3 años"], "Escuela infantil pública municipal.", ["Público", "0-3 años"], "Majadahonda", "916 34 28 11"],
  ["ei-talin", "escuela-infantil-talin-majadahonda", "E.I. Talín", "publico", "laico", ["0-3 años"], "Escuela infantil con larga trayectoria.", ["Público", "0-3 años"], "Majadahonda", "916 38 42 11"]
];

export const centers: Center[] = centerSeeds.map(([id, slug, name, type, religiousCharacter, stages, description, tags, municipality, phone]) => ({
  id, slug, name, type, religiousCharacter, stages,
  municipality,
  address: "Consultar dirección pública en web oficial",
  phone,
  email: `info@${slug}.es`,
  website: `https://www.${slug}.es`,
  languages: ["Inglés"],
  services: ["Comedor", "Extraescolares", "Orientación"],
  description,
  source: "Información pública oficial",
  sourceUrl: `https://www.${slug}.es`,
  tags: [...baseTags, ...tags, municipality],
  image: stages.includes("0-3 años") ? images.nursery : images.center,
  verified: true
}));

type ProviderSeed = [string, string, string, string, string, string, string, string, string];
const providerSeeds: ProviderSeed[] = [
  // Boadilla
  ["boadilla-beone", "BeOne Boadilla", "Extraescolares", "deporte, natación, fitness", images.sport, "Extraescolares", "Boadilla del Monte", "916 33 63 36", "info@beone.es"],
  ["boadilla-musica", "Academia de Música Boadilla", "Extraescolares", "música, piano, guitarra", images.activity, "Extraescolares", "Boadilla del Monte", "916 32 30 54", "info@musica-boadilla.es"],
  ["boadilla-british", "British Council Boadilla", "Idiomas", "inglés, oficial, niños", images.activity, "Clases", "Boadilla del Monte", "913 37 36 00", "madrid@britishcouncil.es"],
  ["boadilla-mencia", "Papelería Doña Mencía", "Libros y material", "papelería, libros, material escolar", images.books, "Libros y material", "Boadilla del Monte", "916 33 03 40", "libreria@mencia.es"],

  // Pozuelo
  ["pozuelo-cruiz", "Polideportivo Carlos Ruiz", "Extraescolares", "deporte, municipal, escuelas", images.sport, "Extraescolares", "Pozuelo de Alarcón", "913 52 23 60", "deportes@pozuelodealarcon.org"],
  ["pozuelo-kumon", "Kumon Pozuelo", "Extraescolares", "matemáticas, lectura, apoyo", images.activity, "Clases", "Pozuelo de Alarcón", "654 32 10 98", "pozuelo@kumon.es"],

  // Majadahonda
  ["majadahonda-hvieja", "Polideportivo Huerta Vieja", "Extraescolares", "deporte, natación, municipal", images.sport, "Extraescolares", "Majadahonda", "916 34 94 24", "deportes@majadahonda.org"],
  ["majadahonda-kidsus", "Kids&Us Majadahonda", "Idiomas", "inglés, niños, método propio", images.activity, "Clases", "Majadahonda", "916 39 82 25", "majadahonda@kidsandus.es"],
  
  // Ficticios (Canguros y Profesores)
  ["profesor-mates", "Carlos P.", "Clases particulares", "matemáticas, eso, bachillerato", images.activity, "Clases", "Las Rozas de Madrid", "XXX XXX XXX", "xxx@xxx.xxx"],
  ["canguro-ana", "Ana M.", "Canguros", "canguro, tardes, referencias", images.service, "Canguros", "Las Rozas de Madrid", "XXX XXX XXX", "xxx@xxx.xxx"],
  ["canguro-laura", "Laura R.", "Canguros", "canguro, fines de semana", images.service, "Canguros", "Pozuelo de Alarcón", "XXX XXX XXX", "xxx@xxx.xxx"]
];

export const providers: Provider[] = providerSeeds.map(([id, businessName, category, rawTags, image, catId, municipality, phone, email]) => ({
  id, userId: id, businessName, category,
  description: `${businessName}: recursos y servicios para familias en ${municipality}.`,
  municipality,
  serviceArea: `${municipality} y alrededores`,
  website: "https://example.com",
  phone,
  email,
  verified: id.includes("municipal") || id.includes("Polideportivo") || id.includes("ceip") || id.includes("boadilla-beone"),
  plan: "gratuito",
  tags: rawTags.split(", ").concat([municipality, "Familias"]),
  image
}));

export const listings: Listing[] = [
  ...centers.map((center) => ({ 
    id: `ficha-${center.id}`, slug: center.slug, userId: "tenlo", categoryId: "centros", centerId: center.id, 
    title: center.name, description: center.description, municipality: center.municipality, area: center.municipality, 
    recommendedAgeMin: 1, recommendedAgeMax: 18, priceLabel: "Consultar", availability: "Ficha pública", 
    publicationType: "centro" as const, status: "published" as const, verified: true, tags: center.tags, image: center.image 
  })),
  ...providers.map((p) => ({
    id: `p-${p.id}`, slug: p.id, userId: p.userId, categoryId: p.category.toLowerCase().includes("clases") ? "clases-particulares" : p.category.toLowerCase().includes("canguro") ? "canguros" : p.id.includes("mencia") ? "libros-material" : "extraescolares",
    title: p.businessName, description: p.description, municipality: p.municipality, area: p.serviceArea,
    recommendedAgeMin: 3, recommendedAgeMax: 16, priceLabel: "Consultar", availability: "Consultar",
    publicationType: "proveedor" as const, status: "published" as const, verified: p.verified, tags: p.tags, image: p.image
  }))
];

export const communityInitiatives: CommunityInitiative[] = [
  { id: "afn-boadilla", name: "Asociación Familias Numerosas Boadilla", url: "https://example.com", municipality: "Boadilla del Monte", summary: "Apoyo y beneficios para familias numerosas de Boadilla.", tags: ["Familias", "Boadilla"], image: images.community, ctaLabel: "Saber más" },
  { id: "cruz-roja-boadilla", name: "Cruz Roja Boadilla", url: "https://example.com", municipality: "Boadilla del Monte", summary: "Acción social y apoyo comunitario en Boadilla.", tags: ["Social", "Boadilla"], image: images.community, ctaLabel: "Saber más" },
  { id: "banco-alimentos-pozuelo", name: "Banco de Alimentos Pozuelo", url: "https://example.com", municipality: "Pozuelo de Alarcón", summary: "Recogida y distribución de alimentos en Pozuelo.", tags: ["Social", "Pozuelo"], image: images.community, ctaLabel: "Saber más" },
  { id: "fundacion-cana-pozuelo", name: "Fundación Caná", url: "https://example.com", municipality: "Pozuelo de Alarcón", summary: "Atención a personas con discapacidad y sus familias.", tags: ["Inclusión", "Pozuelo"], image: images.community, ctaLabel: "Saber más" },
  { id: "asur-majadahonda", name: "ASUR Majadahonda", url: "https://example.com", municipality: "Majadahonda", summary: "Asistencia social de urgencia en Majadahonda.", tags: ["Social", "Majadahonda"], image: images.community, ctaLabel: "Saber más" },
  { id: "majadahonda-ayuda", name: "Majadahonda Ayuda", url: "https://example.com", municipality: "Majadahonda", summary: "Movimiento ciudadano de apoyo mutuo.", tags: ["Comunidad", "Majadahonda"], image: images.community, ctaLabel: "Saber más" }
];

export const searchTags = Array.from(new Set([
  ...centers.flatMap((c) => c.tags), 
  ...listings.flatMap((l) => l.tags), 
  ...providers.flatMap((p) => p.tags), 
  ...communityInitiatives.flatMap((i) => i.tags)
])).sort((a, b) => a.localeCompare(b, "es"));

export const reviews: Review[] = [];
export const communityPosts: CommunityPost[] = [
  { id: "cp1", title: "Mejores parques en Boadilla para ir con niños", category: "General", municipality: "Boadilla del Monte", summary: "Recomendaciones de la comunidad.", status: "published" },
  { id: "cp2", title: "Actividades gratuitas en Pozuelo este fin de semana", category: "Extraescolares", municipality: "Pozuelo de Alarcón", summary: "Agenda cultural y deportiva.", status: "published" }
];

export function findCategory(slug: string) { return categories.find((c) => c.slug === slug); }
export function findListing(slugOrId: string) { return listings.find((l) => l.slug === slugOrId || l.id === slugOrId); }
export function findCenter(slug: string) { return centers.find((c) => c.slug === slug); }
export function findProvider(id: string) { return providers.find((p) => p.id === id); }
export function findCommunityInitiative(id: string) { return communityInitiatives.find((i) => i.id === id); }
export function ageLabel(listing: Listing) { if (!listing.recommendedAgeMin && !listing.recommendedAgeMax) return "Edad orientativa no indicada"; return `${listing.recommendedAgeMin ?? 1}-${listing.recommendedAgeMax ?? 18} años`; }
