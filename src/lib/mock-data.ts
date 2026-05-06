import type { Category, Center, CommunityPost, Listing, Municipality, Provider, Review } from "./types";

export const municipalities: Municipality[] = [
  { id: "las-rozas", name: "Las Rozas", slug: "las-rozas", description: "Recursos familiares alrededor de colegios y centros en Las Rozas." },
  { id: "majadahonda", name: "Majadahonda", slug: "majadahonda", description: "Uniformes, libros, actividades y servicios locales para familias de Majadahonda." },
  { id: "pozuelo", name: "Pozuelo de Alarcón", slug: "pozuelo", description: "Directorio local para familias con centros educativos en Pozuelo de Alarcón." },
  { id: "boadilla", name: "Boadilla del Monte", slug: "boadilla", description: "Recursos próximos al colegio para familias de Boadilla del Monte." }
];

export const categories: Category[] = [
  { id: "uniformes", name: "Uniformes", slug: "uniformes", description: "Compra, venta y reutilización de uniformes en buen estado, filtrados por zona y centro orientativo.", seoTitle: "Uniformes escolares cerca de tu centro | Proyecto Familias", seoDescription: "Encuentra uniformes escolares en buen estado cerca de tu zona y centro educativo, con publicaciones moderadas." },
  { id: "libros-material", name: "Libros y material", slug: "libros-material", description: "Libros, material escolar y lotes por etapa educativa sin identificar a menores.", seoTitle: "Libros y material escolar cerca de ti | Proyecto Familias", seoDescription: "Localiza libros, material y lotes escolares por municipio, edad recomendada y centro orientativo." },
  { id: "clases-particulares", name: "Clases particulares", slug: "clases-particulares", description: "Profesores y academias para apoyo escolar, idiomas, ciencias y preparación de exámenes.", seoTitle: "Clases particulares en Madrid noroeste | Proyecto Familias", seoDescription: "Encuentra clases particulares por materia, modalidad, municipio y nivel educativo recomendado." },
  { id: "canguros", name: "Canguros", slug: "canguros", description: "Canguros y babysitters con experiencia, disponibilidad general y referencias verificables.", seoTitle: "Canguros y babysitters cerca de tu familia | Proyecto Familias", seoDescription: "Busca canguros por zona, edad recomendada, disponibilidad general y verificación." },
  { id: "extraescolares", name: "Extraescolares", slug: "extraescolares", description: "Actividades, deporte, clubes, campamentos y extraescolares para distintas edades.", seoTitle: "Extraescolares y deporte cerca del colegio | Proyecto Familias", seoDescription: "Descubre actividades extraescolares por zona, edad recomendada, precio y disponibilidad." },
  { id: "centros", name: "Centros educativos", slug: "centros", description: "Fichas estructuradas de colegios, escuelas infantiles e institutos con información pública.", seoTitle: "Centros educativos en Madrid noroeste | Proyecto Familias", seoDescription: "Consulta centros educativos con información pública, etapas, servicios y reseñas moderadas." }
];

export const centers: Center[] = [
  { id: "monteclaro", slug: "centro-educativo-monteclaro", name: "Centro Educativo Monteclaro", type: "concertado", stages: ["Infantil", "Primaria", "Secundaria"], municipality: "Las Rozas", address: "Calle Sierra Clara, 12", phone: "910 000 101", email: "info@monteclaro.example", website: "https://example.com/monteclaro", languages: ["Inglés"], services: ["Comedor", "Ruta", "Extraescolares"], description: "Centro ficticio con proyecto educativo familiar y servicios de apoyo a la conciliación.", source: "Datos ficticios para MVP", verified: true },
  { id: "sierra-oeste", slug: "instituto-sierra-oeste", name: "Instituto Sierra Oeste", type: "publico", stages: ["Secundaria", "Bachillerato"], municipality: "Majadahonda", address: "Avenida del Oeste, 8", phone: "910 000 202", email: "secretaria@sierraoeste.example", website: "https://example.com/sierra-oeste", languages: ["Inglés", "Francés"], services: ["Orientación", "Biblioteca"], description: "Instituto ficticio con información estructurada para validar fichas de centros.", source: "Datos ficticios para MVP", verified: false },
  { id: "los-olivos", slug: "escuela-infantil-los-olivos", name: "Escuela Infantil Los Olivos", type: "privado", stages: ["Guardería", "Infantil"], municipality: "Boadilla del Monte", address: "Camino de los Olivos, 4", phone: "910 000 303", email: "hola@losolivos.example", website: "https://example.com/los-olivos", languages: ["Inglés"], services: ["Comedor", "Horario ampliado"], description: "Escuela infantil ficticia pensada para representar servicios locales auditables.", source: "Datos ficticios para MVP", verified: true }
];

export const listings: Listing[] = [
  { id: "l1", slug: "lote-uniforme-infantil-buen-estado", userId: "u1", categoryId: "uniformes", centerId: "monteclaro", title: "Lote uniforme infantil en buen estado", description: "Pack de prendas de uniforme en buen estado. Talla orientativa 5-6 años. Sin datos personales ni identificativos.", municipality: "Las Rozas", area: "Monte Rozas", recommendedAgeMin: 5, recommendedAgeMax: 6, price: 45, condition: "buen estado", availability: "Disponible esta semana", publicationType: "familia", status: "published", verified: false, tags: ["Uniforme", "Buen estado", "Centro orientativo"], details: { talla: "5-6 años", estado: "Buen estado" } },
  { id: "l2", slug: "libros-2-eso", userId: "u2", categoryId: "libros-material", centerId: "sierra-oeste", title: "Libros de 2º ESO", description: "Lote orientativo de libros de secundaria en buen estado. Se entrega en Majadahonda.", municipality: "Majadahonda", area: "Centro", recommendedAgeMin: 13, recommendedAgeMax: 14, price: 80, condition: "usado", availability: "Entrega flexible", publicationType: "familia", status: "published", verified: false, tags: ["Libros", "ESO", "Lote"], details: { cursoOrientativo: "2º ESO", estado: "Usado cuidado" } },
  { id: "l3", slug: "profesora-matematicas-secundaria", userId: "p1", categoryId: "clases-particulares", title: "Profesora de matemáticas para secundaria", description: "Apoyo de matemáticas para secundaria y bachillerato. Presencial en Pozuelo y online.", municipality: "Pozuelo de Alarcón", area: "Somosaguas", recommendedAgeMin: 12, recommendedAgeMax: 18, price: 24, priceLabel: "24 €/hora", availability: "Tardes entre semana", publicationType: "proveedor", status: "published", verified: true, tags: ["Matemáticas", "Presencial", "Online"], details: { materias: "Matemáticas, física", modalidad: "Online y presencial", experiencia: "8 años" } },
  { id: "l4", slug: "canguro-experiencia-tardes", userId: "p2", categoryId: "canguros", title: "Canguro con experiencia en tardes", description: "Servicio profesional de cuidado en tardes con disponibilidad general y referencias verificables.", municipality: "Boadilla del Monte", area: "Valenoso", recommendedAgeMin: 3, recommendedAgeMax: 12, price: 14, priceLabel: "14 €/hora", availability: "Tardes laborables", publicationType: "proveedor", status: "published", verified: true, tags: ["Referencias", "Tardes", "Profesional"], details: { experiencia: "6 años", disponibilidad: "Tardes laborables", referencias: "Opcionales verificadas" } },
  { id: "l5", slug: "clases-padel-ninos", userId: "p3", categoryId: "extraescolares", title: "Clases de pádel para niños", description: "Actividad deportiva por grupos de edad, con horarios generales y plazas limitadas.", municipality: "Las Rozas", area: "El Cantizal", recommendedAgeMin: 7, recommendedAgeMax: 14, price: 55, priceLabel: "55 €/mes", availability: "Sábados mañana", publicationType: "proveedor", status: "published", verified: true, tags: ["Deporte", "Pádel", "Grupo"], details: { actividad: "Pádel", horarioGeneral: "Sábados por la mañana", proveedor: "Club ficticio Noroeste" } },
  { id: "l6", slug: "academia-ingles-majadahonda", userId: "p4", categoryId: "clases-particulares", title: "Academia de inglés en Majadahonda", description: "Clases de inglés por niveles educativos recomendados, grupos reducidos y seguimiento familiar.", municipality: "Majadahonda", area: "Casco urbano", recommendedAgeMin: 6, recommendedAgeMax: 18, priceLabel: "Desde 49 €/mes", availability: "Plazas abiertas", publicationType: "proveedor", status: "pending_review", verified: false, tags: ["Inglés", "Academia", "Pendiente"], details: { idioma: "Inglés", modalidad: "Presencial", grupos: "Reducidos" } }
];

export const providers: Provider[] = [
  { id: "p1", userId: "p1", businessName: "Apoyo Noroeste", category: "Clases particulares", description: "Profesorado especializado en secundaria y bachillerato.", municipality: "Pozuelo de Alarcón", serviceArea: "Pozuelo, Majadahonda y online", website: "https://example.com/apoyo", phone: "910 111 001", email: "hola@apoyonoroeste.example", verified: true, plan: "destacado" },
  { id: "p2", userId: "p2", businessName: "Cuidados Cercanos", category: "Canguros", description: "Canguros profesionales con referencias verificables.", municipality: "Boadilla del Monte", serviceArea: "Boadilla y Pozuelo", website: "https://example.com/cuidados", phone: "910 111 002", email: "contacto@cuidados.example", verified: true, plan: "gratuito" },
  { id: "p3", userId: "p3", businessName: "Club Deportivo Noroeste", category: "Extraescolares", description: "Actividades deportivas por edad recomendada.", municipality: "Las Rozas", serviceArea: "Las Rozas y Majadahonda", website: "https://example.com/club", phone: "910 111 003", email: "info@clubnoroeste.example", verified: true, plan: "premium" }
];

export const reviews: Review[] = [
  { id: "r1", centerId: "monteclaro", ratingCommunication: 4, ratingFacilities: 4, ratingEnvironment: 5, ratingActivities: 4, ratingLanguages: 4, ratingAttention: 5, comment: "Resumen moderado: las familias destacan comunicación clara y buen ambiente.", status: "published" },
  { id: "r2", centerId: "los-olivos", ratingCommunication: 5, ratingFacilities: 4, ratingEnvironment: 5, ratingActivities: 4, ratingLanguages: 4, ratingAttention: 5, comment: "Resumen moderado: se valora positivamente el horario ampliado y el trato cercano.", status: "published" }
];

export const communityPosts: CommunityPost[] = [
  { id: "c1", title: "Dónde encontrar chándal compatible en Las Rozas", category: "Uniformes", municipality: "Las Rozas", summary: "Pregunta revisada sobre alternativas de compra sin datos de menores.", status: "published" },
  { id: "c2", title: "Recomendaciones de extraescolares de ciencia", category: "Extraescolares", municipality: "Pozuelo de Alarcón", summary: "Hilo moderado con opciones por edad recomendada y zona.", status: "published" },
  { id: "c3", title: "Consulta sobre intercambio de libros", category: "Libros y material", municipality: "Majadahonda", summary: "Pendiente de revisión antes de aparecer públicamente.", status: "pending_review" }
];

export function findCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function findListing(slugOrId: string) {
  return listings.find((listing) => listing.slug === slugOrId || listing.id === slugOrId);
}

export function findCenter(slug: string) {
  return centers.find((center) => center.slug === slug);
}

export function ageLabel(listing: Listing) {
  if (!listing.recommendedAgeMin && !listing.recommendedAgeMax) return "Edad orientativa no indicada";
  return `${listing.recommendedAgeMin ?? 1}-${listing.recommendedAgeMax ?? 18} años`;
}
