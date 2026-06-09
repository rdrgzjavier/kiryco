export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type ProfileRole =
  | "family"
  | "school"
  | "nursery"
  | "shop"
  | "sports_center"
  | "activity_provider"
  | "technology_provider"
  | "transport_provider"
  | "event_provider"
  | "teacher"
  | "childcare"
  | "health_wellness"
  | "camp_provider"
  | "community_org"
  | "tenlo_admin";

export type ModerationStatus =
  | "draft"
  | "pending_review"
  | "approved"
  | "rejected"
  | "archived";

export type TrustLevel = "collected" | "verified" | "official";

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          role: ProfileRole;
          display_name: string;
          contact_email: string | null;
          phone: string | null;
          municipality: string | null;
          public_name: string | null;
          status: ModerationStatus;
          review_notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["profiles"]["Row"]> & {
          id: string;
          display_name: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Row"]>;
      };
      services: {
        Row: {
          id: string;
          owner_id: string | null;
          slug: string;
          title: string;
          category_id: string;
          municipality: string;
          status: ModerationStatus;
          trust_level: TrustLevel;
          tags: string[];
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["services"]["Row"]> & {
          slug: string;
          title: string;
          category_id: string;
          municipality: string;
        };
        Update: Partial<Database["public"]["Tables"]["services"]["Row"]>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      profile_role: ProfileRole;
      moderation_status: ModerationStatus;
      trust_level: TrustLevel;
    };
  };
};
