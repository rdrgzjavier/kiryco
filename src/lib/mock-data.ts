import { Category, Center, CommunityPost, Listing, Municipality, Provider, Review } from "./types";

export const municipalities: Municipality[] = [
  { id: "m1", name: "Las Rozas", slug: "las-rozas", province: "Madrid", listingsCount: 24, centersCount: 8 },
  { id: "m2", name: "Majadahonda", slug: "majadahonda", province: "Madrid", listingsCount: 19, centersCount: 6 },
  { id: "m3", name: "Pozuelo de Alarcón", slug: "pozuelo", province: "Madrid", listingsCount: 31, centersCount: 10 },
  { id: "m4", name: "Boadilla del Monte", slug: "boadilla", province: "Madrid", listingsCount: 12, centersCount: 4 },
];

export const categories: Category[] = [
  { id: "c1", name: "Uniformes", slug: "uniformes", description: "Compra y venta de uniformes escolares en buen estado entre familias.", icon: "Shirt", color: "#e8f4fd", listingsCount: 34 },
  { id: "c2", name: "Libros y material", slug: "libros-material", description: "Libros de texto, material escolar y papelería de segunda mano.", icon: "BookOpen", color: "#f0fdf4", listingsCount: 28 },
  { id: "c3", name: "Clases particulares", slug: "clases-particulares", description: "Profesores particulares por materia, nivel educativo, zona y modalidad.", icon: "GraduationCap", color: "#fef9c3", listingsCount: 22 },
  { id: "c4", name: "Canguros", slug: "canguros", description: "Canguros y babysitters con experiencia y referencias verificables.", icon: "UserCheck", color: "#fff1f2", listingsCount: 15 },
  { id: "c5", name: "Extraescolares", slug: "extraescolares", description: "Actividades extraescolares, deporte, arte, idiomas y campamentos.", icon: "CalendarDays", color: "#f5f3ff", listingsCount: 41 },
  { id: "c6", name: "Centros educativos", slug: "centros", description: "Directorio de colegios, institutos y escuelas infantiles por zona.", icon: "School", color: "#fff7ed", listingsCount: 18 },
];

export const centers: Center[] = [
  { id: "ce1", name: "Centro Educativo Monteclaro", slug: "centro-educativo-monteclaro", type: "concertado", stages: ["infantil", "primaria", "secundaria", "bachillerato"], municipality: "Pozuelo de Alarcón", address: "Calle Monteclaro, 12", phone: "91 000 0001", email: "info@monteclaro.example.com", website: "https://monteclaro.example.com", languages: ["Español", "Inglés"], description: "Centro ficticio con proyecto bilingüe y ficha preparada para validación.", services: ["Comedor", "Transporte", "Extraescolares"], source: "Datos ficticios para MVP", verified: true, averageRating: 4.2, totalReviews: 18, createdAt: "2026-05-01", updatedAt: "2026-05-01" },
  { id: "ce2", name: "Instituto Sierra Oeste", slug: "instituto-sierra-oeste", type: "publico", stages: ["secundaria", "bachillerato"], municipality: "Las Rozas", address: "Av. de la Dehesa, 45", phone: "91 000 0002", email: "secretaria@sierraoeste.example.com", languages: ["Español"], description: "Instituto ficticio para validar búsquedas por centro.", services: ["Orientación académica", "Biblioteca"], source: "Datos ficticios para MVP", verified: true, averageRating: 3.8, totalReviews: 12, createdAt: "2026-05-01", updatedAt: "2026-05-01" },
  { id: "ce3", name: "Escuela Infantil Los Olivos", slug: "escuela-infantil-los-olivos", type: "privado", stages: ["guarderia", "infantil"], municipality: "Majadahonda", address: "Calle de los Olivos, 7", languages: ["Español", "Inglés"], description: "Escuela infantil ficticia con horario ampliado.", services: ["Comedor", "Horario ampliado"], source: "Datos ficticios para MVP", verified: true, averageRating: 4.6, totalReviews: 9, createdAt: "2026-05-01", updatedAt: "2026-05-01" },
];

export const listings: Listing[] = [
  { id: "l1", userId: "u1", categoryId: "c1", categoryName: "Uniformes", categorySlug: "uniformes", centerId: "ce1", centerSlug: "centro-educativo-monteclaro", centerName: "Centro Educativo Monteclaro", title: "Lote uniforme infantil en buen estado", municipality: "Pozuelo de Alarcón", description: "Lote de uniforme completo. Talla orientativa, sin datos personales de menores.", recommendedAgeMin: 3, recommendedAgeMax: 5, price: 35, priceType: "fijo", condition: "buen_estado", status: "published", verified: false, type: "familia", createdAt: "2026-04-28", updatedAt: "2026-04-28" },
  { id: "l2", userId: "u2", categoryId: "c2", categoryName: "Libros y material", categorySlug: "libros-material", centerId: "ce2", centerSlug: "instituto-sierra-oeste", centerName: "Instituto Sierra Oeste", title: "Libros de 2º ESO", municipality: "Las Rozas", description: "Lote de libros de 2º ESO en buen estado. Curso orientativo.", recommendedAgeMin: 13, recommendedAgeMax: 14, price: 45, priceType: "fijo", condition: "buen_estado", status: "published", verified: false, type: "familia", createdAt: "2026-04-25", updatedAt: "2026-04-25" },
  { id: "l3", userId: "u3", categoryId: "c3", categoryName: "Clases particulares", categorySlug: "clases-particulares", title: "Profesora de matemáticas para secundaria", municipality: "Majadahonda", description: "Clases de matemáticas para ESO y Bachillerato, presencial u online.", recommendedAgeMin: 12, recommendedAgeMax: 18, price: 22, priceType: "hora", modality: "hibrido", subject: "Matemáticas", educationalLevel: "Secundaria", status: "published", verified: true, type: "proveedor", createdAt: "2026-04-21", updatedAt: "2026-04-21" },
  { id: "l4", userId: "u4", categoryId: "c4", categoryName: "Canguros", categorySlug: "canguros", title: "Canguro con experiencia en tardes", municipality: "Las Rozas", description: "Experiencia con edades de 2 a 10 años. Referencias verificables.", recommendedAgeMin: 2, recommendedAgeMax: 10, price: 12, priceType: "hora", availability: "Tardes", status: "published", verified: true, type: "proveedor", createdAt: "2026-04-18", updatedAt: "2026-04-18" },
  { id: "l5", userId: "u5", categoryId: "c5", categoryName: "Extraescolares", categorySlug: "extraescolares", title: "Clases de pádel para niños", municipality: "Las Rozas", description: "Club de pádel con clases por edad recomendada y nivel.", recommendedAgeMin: 5, recommendedAgeMax: 16, price: 80, priceType: "mes", activity: "Pádel", status: "published", verified: true, type: "proveedor", createdAt: "2026-04-16", updatedAt: "2026-04-16" },
];

export const providers: Provider[] = [{ id: "p1", userId: "u11", businessName: "Academia EnglishFirst Majadahonda", categorySlug: "clases-particulares", categoryName: "Clases particulares", description: "Academia de inglés con profesores nativos.", municipality: "Majadahonda", serviceArea: ["Majadahonda", "Las Rozas"], verified: true, plan: "destacado", featured: true, createdAt: "2026-04-01" }];
export const communityPosts: CommunityPost[] = [{ id: "cp1", userId: "u1", userName: "María L.", title: "¿Dónde encontrar uniforme de segunda mano?", body: "Pregunta revisada antes de aparecer, sin datos personales de menores.", municipality: "Pozuelo de Alarcón", tags: ["uniformes"], status: "published", createdAt: "2026-04-20" }];
export const reviews: Review[] = [{ id: "r1", userId: "u1", userName: "María L.", centerId: "ce1", ratingCommunication: 4, ratingFacilities: 5, ratingEnvironment: 4, ratingActivities: 4, ratingLanguages: 5, ratingAttention: 4, comment: "Valoración estructurada y moderada.", status: "published", createdAt: "2026-04-01" }];

export const getCategoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const getCenterBySlug = (slug: string) => centers.find((c) => c.slug === slug);
export const getMunicipalityBySlug = (slug: string) => municipalities.find((m) => m.slug === slug);
export const getListingsByCategory = (slug: string) => listings.filter((l) => l.categorySlug === slug && l.status === "published");
export const getListingsByMunicipality = (slug: string) => { const m = getMunicipalityBySlug(slug); return listings.filter((l) => m && l.municipality === m.name && l.status === "published"); };
export const getReviewsForCenter = (centerId: string) => reviews.filter((r) => r.centerId === centerId && r.status === "published");
export const formatStage = (stage: string) => ({ guarderia: "Guardería", infantil: "Infantil", primaria: "Primaria", secundaria: "Secundaria", bachillerato: "Bachillerato" }[stage] ?? stage);
export const formatCenterType = (type: string) => ({ publico: "Público", concertado: "Concertado", privado: "Privado" }[type] ?? type);
export const formatPrice = (price?: number, type?: string) => !price ? "Consultar precio" : type === "hora" ? `${price} € / hora` : type === "mes" ? `${price} € / mes` : `${price} €`;
export const conditionLabel = (condition?: string) => condition ? ({ nuevo: "Nuevo", como_nuevo: "Como nuevo", buen_estado: "Buen estado", aceptable: "Aceptable" }[condition] ?? condition) : null;
