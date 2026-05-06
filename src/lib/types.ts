export type UserRole = "familia" | "proveedor" | "centro" | "admin";
export type ListingStatus = "draft" | "pending_review" | "published" | "rejected" | "archived";
export type ListingCondition = "nuevo" | "como_nuevo" | "buen_estado" | "aceptable";
export type CenterType = "publico" | "concertado" | "privado";
export type EducationalStage = "guarderia" | "infantil" | "primaria" | "secundaria" | "bachillerato";
export type ProviderPlan = "gratuito" | "destacado" | "premium";
export type ReviewStatus = "pending_review" | "published" | "rejected";
export type ModalityType = "presencial" | "online" | "hibrido";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  municipality: string;
  relatedCenterId?: string;
  createdAt: string;
}

export interface Center {
  id: string;
  name: string;
  slug: string;
  type: CenterType;
  stages: EducationalStage[];
  municipality: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  languages?: string[];
  description?: string;
  services?: string[];
  source?: string;
  verified: boolean;
  averageRating?: number;
  totalReviews?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  listingsCount?: number;
}

export interface Listing {
  id: string;
  userId: string;
  categoryId: string;
  categoryName: string;
  categorySlug: string;
  centerId?: string;
  centerSlug?: string;
  centerName?: string;
  title: string;
  description: string;
  municipality: string;
  area?: string;
  recommendedAgeMin?: number;
  recommendedAgeMax?: number;
  price?: number;
  priceType?: "fijo" | "hora" | "mes" | "gratis" | "negociable";
  condition?: ListingCondition;
  images?: string[];
  status: ListingStatus;
  verified: boolean;
  type?: "familia" | "proveedor" | "centro";
  subject?: string;
  modality?: ModalityType;
  educationalLevel?: string;
  experience?: string;
  availability?: string;
  activity?: string;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  externalUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Provider {
  id: string;
  userId: string;
  businessName: string;
  categorySlug: string;
  categoryName: string;
  description: string;
  municipality: string;
  serviceArea: string[];
  website?: string;
  phone?: string;
  email?: string;
  logo?: string;
  images?: string[];
  verified: boolean;
  plan: ProviderPlan;
  featured: boolean;
  createdAt: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  centerId?: string;
  providerId?: string;
  ratingCommunication: number;
  ratingFacilities: number;
  ratingEnvironment: number;
  ratingActivities: number;
  ratingLanguages: number;
  ratingAttention: number;
  comment?: string;
  status: ReviewStatus;
  createdAt: string;
}

export interface CommunityPost {
  id: string;
  userId: string;
  userName: string;
  title: string;
  body: string;
  municipality?: string;
  centerId?: string;
  categorySlug?: string;
  tags?: string[];
  status: ListingStatus;
  createdAt: string;
}

export interface Municipality {
  id: string;
  name: string;
  slug: string;
  province: string;
  listingsCount?: number;
  centersCount?: number;
}
