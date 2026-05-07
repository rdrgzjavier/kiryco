import type { Category, Center, CommunityInitiative, CommunityPost, Listing, Municipality, Provider, Review } from "./types";

const images = {
  center: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
  nursery: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  sport: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1200&q=80",
  activity: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200&q=80",
  books: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
  uniform: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
  service: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  community: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80"
};

export const municipalities: Municipality[] = [
  { id: "las-rozas", name: "Las Rozas de Madrid", slug: "las-rozas", description: "Colegios, guarderías, uniformes, actividades y servicios para familias en Las Rozas de Madrid." },
  { id: "majadahonda", name: "Majadahonda", slug: "majadahonda", description: "Recursos familiares cercanos para familias de Majadahonda y Madrid noroeste." },
  { id: "pozuelo", name: "Pozuelo de Alarcón", slug: "pozuelo", description: "Directorio local para familias con centros educativos en Pozuelo de Alarcón." },
  { id: "boadilla", name: "Boadilla del Monte", slug: "boadilla", description: "Recursos próximos al colegio para familias de Boadilla del Monte." }
];

export const categories: Category[] = [
  { id: "uniformes", name: "Uniformes", slug: "uniformes", description: "Uniformes escolares, prendas y reutilización segura por zona y centro orientativo.", seoTitle: "Uniformes escolares cerca de tu centro | Kiryco", seoDescription: "Encuentra uniformes escolares en buen estado cerca de tu zona y centro educativo, con publicaciones moderadas." },
  { id: "libros-material", name: "Libros y material", slug: "libros-material", description: "Libros, material escolar, calzado y lotes por etapa educativa sin identificar a menores.", seoTitle: "Libros y material escolar cerca de ti | Kiryco", seoDescription: "Localiza libros, material escolar, calzado y lotes por municipio, edad recomendada y centro orientativo." },
  { id: "clases-particulares", name: "Clases particulares", slug: "clases-particulares", description: "Profesores, academias e idiomas para apoyo escolar, ciencias, arte y exámenes.", seoTitle: "Clases particulares en Las Rozas | Kiryco", seoDescription: "Encuentra clases particulares por materia, modalidad, municipio y nivel educativo recomendado." },
  { id: "canguros", name: "Canguros", slug: "canguros", description: "Canguros y babysitters con experiencia, disponibilidad general y referencias verificables.", seoTitle: "Canguros y babysitters en Las Rozas | Kiryco", seoDescription: "Busca canguros por zona, edad recomendada, disponibilidad general y verificación." },
  { id: "extraescolares", name: "Extraescolares", slug: "extraescolares", description: "Actividades, deporte, clubes, creatividad, música, tecnología e idiomas para distintas edades.", seoTitle: "Extraescolares y deporte cerca del colegio | Kiryco", seoDescription: "Descubre actividades extraescolares por zona, edad recomendada, precio y disponibilidad." },
  { id: "centros", name: "Centros educativos", slug: "centros", description: "Fichas estructuradas de colegios, escuelas infantiles e institutos con información pública.", seoTitle: "Colegios y centros educativos en Las Rozas | Kiryco", seoDescription: "Consulta colegios y centros educativos con información pública, etapas, servicios, etiquetas y reseñas moderadas." }
];

const baseTags = ["Las Rozas de Madrid", "Familias", "Madrid noroeste"];

type CenterSeed = [string, string, string, Center["type"], NonNullable<Center["religiousCharacter"]>, string[], string, string[]];
const centerSeeds: CenterSeed[] = [
  ["el-cantizal", "colegio-el-cantizal", "Colegio El Cantizal", "publico", "laico", ["Infantil", "Primaria", "ESO"], "CEIPSO público bilingüe situado en El Cantizal, con etapas de infantil, primaria y secundaria obligatoria inicial.", ["Público", "CEIPSO", "Bilingüe", "El Cantizal"]],
  ["los-jarales", "colegio-los-jarales-monterrozas", "Colegio Los Jarales - Monterrozas", "publico", "laico", ["Infantil", "Primaria", "ESO progresiva"], "Centro público bilingüe de Monterrozas con infantil, primaria y extensión progresiva a ESO.", ["Público", "CEIPSO", "Bilingüe", "Monterrozas"]],
  ["la-encina", "colegio-la-encina", "Colegio La Encina", "publico", "laico", ["Infantil", "Primaria"], "Colegio público bilingüe de educación infantil y primaria en Las Rozas.", ["Público", "CEIP", "Bilingüe", "AMPA"]],
  ["berriz-veracruz", "colegio-berriz-veracruz", "Colegio Berriz - Veracruz", "concertado", "catolico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Centro concertado católico y bilingüe con etapas desde infantil hasta bachillerato.", ["Concertado", "Católico", "Bilingüe", "Bachillerato"]],
  ["gredos-san-diego", "colegio-gredos-san-diego-las-rozas", "Colegio Gredos San Diego", "concertado", "laico", ["Infantil", "Primaria", "ESO", "Bachillerato", "FP"], "Centro concertado laico y bilingüe de la red GSD, con etapas escolares y formación profesional.", ["Concertado", "Laico", "Bilingüe", "Cooperativa", "FP"]],
  ["zola", "colegio-zola-las-rozas", "Colegio Zola", "concertado", "laico", ["Escuela infantil", "Infantil", "Primaria", "ESO", "Bachillerato"], "Colegio concertado laico con proyecto internacional, foco en inglés y alemán y continuidad hasta bachillerato.", ["Concertado", "Laico", "Inglés", "Alemán", "Robótica"]],
  ["europeo-madrid", "colegio-europeo-de-madrid", "Colegio Europeo de Madrid", "privado", "laico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Colegio privado laico y bilingüe en Las Rozas, con orientación internacional.", ["Privado", "Laico", "Bilingüe", "Internacional"]],
  ["balder", "colegio-balder", "Colegio Balder", "privado", "laico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Colegio privado de Las Rozas con infantil, primaria, secundaria y bachillerato.", ["Privado", "Laico", "Idiomas"]],
  ["orvalle", "colegio-orvalle", "Colegio Orvalle", "privado", "catolico", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Colegio privado católico y bilingüe en Las Rozas, con continuidad educativa y rutas de transporte.", ["Privado", "Católico", "Bilingüe", "Transporte escolar"]],
  ["logos", "colegio-logos", "Colegio Logos", "privado", "laico", ["Escuela infantil", "Infantil", "Primaria", "ESO", "Bachillerato"], "Colegio privado bilingüe con sedes de escuela infantil y colegio en Las Rozas.", ["Privado", "Bilingüe", "Internacional", "Escuela infantil"]],
  ["santa-maria", "colegio-santa-maria-las-rozas", "Colegio Santa María", "concertado", "catolico", ["Infantil", "Primaria", "ESO"], "Colegio católico concertado en Las Rozas con infantil, primaria y ESO.", ["Concertado", "Católico", "ESO", "Orientación"]],
  ["punta-galea", "colegio-punta-galea", "Colegio Punta Galea", "concertado", "no indicado", ["Infantil", "Primaria", "ESO", "Bachillerato"], "Centro educativo Punta Galea con infantil, primaria, secundaria y bachillerato.", ["Concertado", "Punta Galea", "Bachillerato", "Natación"]]
];

export const centers: Center[] = centerSeeds.map(([id, slug, name, type, religiousCharacter, stages, description, tags]) => ({
  id, slug, name, type, religiousCharacter, stages,
  municipality: "Las Rozas de Madrid",
  address: "Consultar dirección pública en web oficial",
  phone: "Consultar en web oficial",
  email: "Consultar en web oficial",
  website: "https://example.com",
  languages: ["Inglés"],
  services: ["Comedor", "Extraescolares", "Orientación", "Información pública"],
  description,
  source: "Web oficial e información pública",
  sourceUrl: "https://example.com",
  tags: [...baseTags, ...tags],
  image: images.center,
  verified: true
}));

type ProviderSeed = [string, string, string, string, string, string];
const providerSeeds: ProviderSeed[] = [
  ["guarderia-trazos", "Escuela Infantil Trazos", "Guardería", "0-3, conciliación, escuela infantil", images.nursery, "Guardería"], ["guarderia-nubes", "Escuela Infantil Nubes", "Guardería", "0-3, El Cantizal, horario ampliado", images.nursery, "Guardería"], ["guarderia-bosque", "Escuela Infantil Bosque Claro", "Guardería", "0-3, Punta Galea, comedor", images.nursery, "Guardería"], ["guarderia-peques", "Peques Monterrozas", "Guardería", "0-3, Monterrozas, conciliación", images.nursery, "Guardería"],
  ["deporte-cantizal", "Centro Municipal El Cantizal", "Deporte infantil", "deporte, municipal, piscina, escuelas deportivas", images.sport, "Extraescolares"], ["padel-rozas", "Escuela de Pádel Las Rozas", "Deporte infantil", "pádel, tardes, coordinación", images.sport, "Extraescolares"], ["natacion-rozas", "Escuela de Natación Las Rozas", "Deporte infantil", "natación, piscina, seguridad acuática", images.sport, "Extraescolares"], ["futbol-rozas", "Escuela de Fútbol Noroeste", "Deporte infantil", "fútbol, equipo, valores", images.sport, "Extraescolares"], ["basket-rozas", "Baloncesto Las Rozas Escuela", "Deporte infantil", "baloncesto, equipo, secundaria", images.sport, "Extraescolares"], ["tenis-rozas", "Tenis Monte Rozas", "Deporte infantil", "tenis, Monte Rozas, grupo", images.sport, "Extraescolares"], ["judo-rozas", "Judo Las Rozas Kids", "Deporte infantil", "judo, disciplina, coordinación", images.sport, "Extraescolares"], ["danza-rozas", "Danza Noroeste", "Deporte infantil", "danza, movimiento, creatividad", images.sport, "Extraescolares"],
  ["robotica-rozas", "Robótica Noroeste", "Extraescolares", "robótica, programación, STEAM", images.activity, "Extraescolares"], ["ingles-rozas", "Inglés Las Rozas", "Idiomas", "inglés, Cambridge, conversación", images.activity, "Clases"], ["musica-rozas", "Música en Familia Las Rozas", "Extraescolares", "música, piano, guitarra", images.activity, "Extraescolares"], ["arte-rozas", "Taller de Arte Las Rozas", "Extraescolares", "arte, pintura, dibujo", images.activity, "Extraescolares"], ["teatro-rozas", "Teatro Joven Las Rozas", "Extraescolares", "teatro, expresión oral, confianza", images.activity, "Extraescolares"], ["ajedrez-rozas", "Ajedrez Escolar Noroeste", "Extraescolares", "ajedrez, concentración, estrategia", images.activity, "Extraescolares"],
  ["papeleria-rozas", "Papelería Escolar Las Rozas", "Material escolar", "papelería, mochilas, vuelta al cole", images.books, "Libros y material"], ["uniformes-rozas", "Uniformes Noroeste", "Uniformes", "uniformes, arreglos, ropa escolar", images.uniform, "Uniformes"], ["calzado-rozas", "Calzado Infantil Noroeste", "Calzado escolar", "calzado, deportivas, zapatos", images.uniform, "Libros y material"], ["libreria-rozas", "Librería Noroeste", "Libros y material", "libros, cuadernos, lecturas", images.books, "Libros y material"], ["logopedia-rozas", "Logopedia Las Rozas", "Servicio familiar", "logopedia, lenguaje, apoyo", images.service, "Clases"], ["optica-rozas", "Óptica Familiar Las Rozas", "Servicio familiar", "óptica, salud visual, escolar", images.service, "Libros y material"], ["fundacion-syei", "Fundación SyEi", "Servicio familiar", "salud integral, educación integral, logopedia, psicología, terapia ocupacional, Las Rozas", images.service, "Clases"],
  ["canguro-ana", "Ana M.", "Canguros", "canguro, tardes, referencias", images.service, "Canguros"], ["canguro-laura", "Laura R.", "Canguros", "canguro, Punta Galea, tardes", images.service, "Canguros"], ["canguro-marta", "Marta S.", "Canguros", "babysitter, fin de semana, puntual", images.service, "Canguros"], ["canguro-pablo", "Pablo T.", "Canguros", "canguro, acompañamiento, tardes", images.service, "Canguros"]
];

export const providers: Provider[] = providerSeeds.map(([id, businessName, category, rawTags, image]) => ({
  id, userId: id, businessName, category,
  description: id === "fundacion-syei" ? "Fundación SyEi, Salud y Educación Integrales en Las Rozas, ofrece acompañamiento terapéutico integral para familias: psicología, logopedia, psicopedagogía, fisioterapia, optometría y terapia visual." : `${businessName}: perfil inicial para búsquedas familiares en Las Rozas, con contacto adulto y datos protegidos.`,
  municipality: id === "calzado-rozas" ? "Majadahonda" : "Las Rozas de Madrid",
  serviceArea: id === "calzado-rozas" ? "Majadahonda, Las Rozas y Pozuelo" : "Las Rozas de Madrid y alrededores",
  website: id === "fundacion-syei" ? "https://www.saludyeducacionintegrales.org/" : "https://example.com",
  phone: id === "fundacion-syei" ? "91 724 20 30" : id.startsWith("canguro") ? "Contacto protegido" : "Consultar",
  email: id.startsWith("canguro") ? "Contacto protegido" : "Consultar",
  verified: id === "fundacion-syei" || id === "deporte-cantizal",
  plan: id === "fundacion-syei" || id === "deporte-cantizal" || id === "robotica-rozas" ? "destacado" : "gratuito",
  tags: rawTags.split(", ").concat(["Las Rozas", "Familias"]),
  image
}));

function provider(id: string) { return providers.find((item) => item.id === id)!; }
function makeListing(id: string, categoryId: string, title: string, providerId: string, ageMin: number, ageMax: number, priceLabel = "Consultar"): Listing { const item = provider(providerId); return { id, slug: id, userId: providerId, categoryId, title, description: id === "fundacion-syei-las-rozas" ? "Centro de salud y educación integrales en Las Rozas con enfoque interdisciplinar para familias: psicología, logopedia, psicopedagogía, terapia visual, fisioterapia y acompañamiento educativo." : `${title}. Recurso local orientado a familias, con información general por edad y sin datos personales de menores.`, municipality: item.municipality, area: item.serviceArea, recommendedAgeMin: ageMin, recommendedAgeMax: ageMax, priceLabel, availability: "Consultar disponibilidad", publicationType: "proveedor", status: "published", verified: item.verified, tags: item.tags, image: item.image, details: { proveedor: item.businessName, zona: item.serviceArea, contacto: item.phone } }; }

export const listings: Listing[] = [
  ...centers.map((center) => ({ id: `ficha-${center.id}`, slug: center.slug, userId: "kiryco", categoryId: "centros", centerId: center.id, title: center.name, description: center.description, municipality: center.municipality, area: "Las Rozas", recommendedAgeMin: 1, recommendedAgeMax: 18, priceLabel: "Consultar centro", availability: "Ficha pública", publicationType: "centro" as const, status: "published" as const, verified: center.verified, tags: center.tags, image: center.image, details: { tipo: center.type, etapas: center.stages.join(", "), fuente: center.source } })),
  makeListing("fundacion-syei-las-rozas", "clases-particulares", "Fundación SyEi: salud y educación integrales", "fundacion-syei", 1, 18),
  makeListing("padel-las-rozas-kids", "extraescolares", "Clases de pádel", "padel-rozas", 7, 16, "Desde 45 €/mes"), makeListing("natacion-infantil-las-rozas", "extraescolares", "Natación infantil por niveles", "natacion-rozas", 3, 14), makeListing("robotica-noroeste", "extraescolares", "Robótica y programación", "robotica-rozas", 7, 16), makeListing("papeleria-escolar-las-rozas", "libros-material", "Material escolar y papelería", "papeleria-rozas", 3, 18), makeListing("uniformes-noroeste", "uniformes", "Uniformes y arreglos escolares", "uniformes-rozas", 3, 18), makeListing("canguro-ana-m", "canguros", "Canguro con experiencia en tardes", "canguro-ana", 3, 12, "12-15 €/hora")
];

export const communityInitiatives: CommunityInitiative[] = [{ id: "bpan-matters", name: "BPAN Matters", url: "https://bpanmatters.org/", municipality: "Iniciativa internacional con interés para familias de la zona", summary: "Iniciativa de sensibilización sobre BPAN, una enfermedad rara vinculada al gen WDR45 y al grupo de neurodegeneración con acumulación cerebral de hierro. Kiryco la incorpora como recurso comunitario para dar visibilidad a causas familiares, investigación y apoyo entre familias.", tags: ["BPAN", "Enfermedades raras", "WDR45", "Neurodegeneración", "Familias", "Investigación", "Sensibilización"], image: images.community, ctaLabel: "Saber más" }];
export const searchTags = Array.from(new Set([...centers.flatMap((center) => center.tags), ...listings.flatMap((item) => item.tags), ...providers.flatMap((item) => item.tags), ...communityInitiatives.flatMap((item) => item.tags)])).sort((a, b) => a.localeCompare(b, "es"));
export const reviews: Review[] = [{ id: "r-el-cantizal", centerId: "el-cantizal", ratingCommunication: 4, ratingFacilities: 4, ratingEnvironment: 4, ratingActivities: 4, ratingLanguages: 4, ratingAttention: 4, comment: "Resumen editorial moderado: ficha pública útil para comparar etapas, servicios y contacto oficial.", status: "published" }];
export const communityPosts: CommunityPost[] = [{ id: "c1", title: "Dónde encontrar uniformes y arreglos en Las Rozas", category: "Uniformes", municipality: "Las Rozas de Madrid", summary: "Pregunta revisada sobre alternativas de compra y arreglos sin datos de menores.", status: "published" }, { id: "c2", title: "Extraescolares de robótica, música y deporte por zonas", category: "Extraescolares", municipality: "Las Rozas de Madrid", summary: "Hilo moderado con opciones por edad recomendada y zona.", status: "published" }];
export function findCategory(slug: string) { return categories.find((category) => category.slug === slug); }
export function findListing(slugOrId: string) { return listings.find((listing) => listing.slug === slugOrId || listing.id === slugOrId); }
export function findCenter(slug: string) { return centers.find((center) => center.slug === slug); }
export function findProvider(id: string) { return providers.find((provider) => provider.id === id); }
export function findCommunityInitiative(id: string) { return communityInitiatives.find((initiative) => initiative.id === id); }
export function ageLabel(listing: Listing) { if (!listing.recommendedAgeMin && !listing.recommendedAgeMax) return "Edad orientativa no indicada"; return `${listing.recommendedAgeMin ?? 1}-${listing.recommendedAgeMax ?? 18} años`; }
