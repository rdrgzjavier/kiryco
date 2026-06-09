create extension if not exists pgcrypto;

create type public.profile_role as enum (
  'family',
  'school',
  'nursery',
  'shop',
  'sports_center',
  'activity_provider',
  'technology_provider',
  'transport_provider',
  'event_provider',
  'teacher',
  'childcare',
  'health_wellness',
  'camp_provider',
  'community_org',
  'tenlo_admin'
);

create type public.moderation_status as enum (
  'draft',
  'pending_review',
  'approved',
  'rejected',
  'archived'
);

create type public.trust_level as enum (
  'collected',
  'verified',
  'official'
);

create type public.publication_type as enum (
  'family',
  'provider',
  'center',
  'community'
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role public.profile_role not null default 'family',
  display_name text not null,
  contact_email text,
  phone text,
  municipality text,
  public_name text,
  status public.moderation_status not null default 'pending_review',
  review_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.business_profiles (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  business_name text not null,
  legal_name text,
  website text,
  address text,
  municipality text,
  service_area text,
  category text not null,
  subtype text,
  trust_level public.trust_level not null default 'collected',
  status public.moderation_status not null default 'pending_review',
  source_name text,
  source_url text,
  last_reviewed date,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.centers (
  id uuid primary key default gen_random_uuid(),
  created_by uuid references public.profiles(id) on delete set null,
  slug text not null unique,
  name text not null,
  municipality text not null,
  center_type text not null,
  religious_character text,
  stages text[] not null default '{}',
  languages text[] not null default '{}',
  services text[] not null default '{}',
  description text not null,
  address text,
  phone text,
  email text,
  website text,
  source_name text,
  source_url text,
  last_reviewed date,
  trust_level public.trust_level not null default 'collected',
  tags text[] not null default '{}',
  image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.services (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.profiles(id) on delete set null,
  business_profile_id uuid references public.business_profiles(id) on delete set null,
  slug text not null unique,
  title text not null,
  category_id text not null,
  municipality text not null,
  service_area text,
  description text not null,
  extended_description text,
  modality text,
  provider_type text,
  age_min integer,
  age_max integer,
  price_label text,
  availability text,
  conditions text,
  contact_email text,
  phone text,
  website text,
  source_name text,
  source_url text,
  last_reviewed date,
  trust_level public.trust_level not null default 'collected',
  status public.moderation_status not null default 'pending_review',
  tags text[] not null default '{}',
  image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.listings (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  slug text not null unique,
  title text not null,
  category_id text not null,
  center_id uuid references public.centers(id) on delete set null,
  description text not null,
  municipality text not null,
  area text,
  age_min integer,
  age_max integer,
  price numeric(10,2),
  price_label text,
  condition text,
  availability text,
  publication_type public.publication_type not null default 'family',
  status public.moderation_status not null default 'pending_review',
  trust_level public.trust_level not null default 'collected',
  tags text[] not null default '{}',
  image_url text,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.community_posts (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.profiles(id) on delete set null,
  slug text not null unique,
  title text not null,
  type text not null,
  municipality text not null,
  summary text not null,
  body text,
  url text,
  status public.moderation_status not null default 'pending_review',
  tags text[] not null default '{}',
  image_url text,
  source_name text,
  source_url text,
  last_reviewed date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  target_type text not null,
  target_id text not null,
  created_at timestamptz not null default now(),
  unique (user_id, target_type, target_id)
);

create table public.submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  submission_type text not null,
  payload jsonb not null default '{}'::jsonb,
  status public.moderation_status not null default 'pending_review',
  review_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.contact_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  target_type text not null,
  target_id text not null,
  event_type text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  consent_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_profiles_updated_at before update on public.profiles for each row execute function public.set_updated_at();
create trigger set_business_profiles_updated_at before update on public.business_profiles for each row execute function public.set_updated_at();
create trigger set_centers_updated_at before update on public.centers for each row execute function public.set_updated_at();
create trigger set_services_updated_at before update on public.services for each row execute function public.set_updated_at();
create trigger set_listings_updated_at before update on public.listings for each row execute function public.set_updated_at();
create trigger set_community_posts_updated_at before update on public.community_posts for each row execute function public.set_updated_at();
create trigger set_submissions_updated_at before update on public.submissions for each row execute function public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.business_profiles enable row level security;
alter table public.centers enable row level security;
alter table public.services enable row level security;
alter table public.listings enable row level security;
alter table public.community_posts enable row level security;
alter table public.favorites enable row level security;
alter table public.submissions enable row level security;
alter table public.contact_events enable row level security;
alter table public.newsletter_subscribers enable row level security;

create policy "Users can read own profile" on public.profiles for select to authenticated using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert to authenticated with check (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

create policy "Users can manage own business profile" on public.business_profiles for all to authenticated using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
create policy "Public can read centers" on public.centers for select using (true);
create policy "Users can propose centers" on public.centers for insert to authenticated with check (auth.uid() = created_by);
create policy "Users can read approved services" on public.services for select using (status = 'approved');
create policy "Users can manage own services" on public.services for all to authenticated using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
create policy "Users can read approved listings" on public.listings for select using (status = 'approved');
create policy "Users can manage own listings" on public.listings for all to authenticated using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
create policy "Users can read approved community posts" on public.community_posts for select using (status = 'approved');
create policy "Users can manage own community posts" on public.community_posts for all to authenticated using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
create policy "Users can manage own favorites" on public.favorites for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can manage own submissions" on public.submissions for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Authenticated users can insert contact events" on public.contact_events for insert to authenticated with check (auth.uid() = user_id or user_id is null);
create policy "Anyone can join newsletter" on public.newsletter_subscribers for insert with check (true);
