create type user_role as enum ('familia', 'proveedor', 'centro', 'admin');
create type moderation_status as enum ('draft', 'pending_review', 'published', 'rejected', 'archived');
create type center_type as enum ('publico', 'concertado', 'privado');
create type provider_plan as enum ('gratuito', 'destacado', 'premium');

create table users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  phone text,
  role user_role not null default 'familia',
  municipality text,
  created_at timestamptz not null default now()
);

create table centers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  type center_type not null,
  stages text[] not null default '{}',
  municipality text not null,
  address text,
  phone text,
  email text,
  website text,
  languages text[] not null default '{}',
  description text,
  source text,
  verified boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text
);

create table listings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete set null,
  category_id uuid references categories(id),
  center_id uuid references centers(id) on delete set null,
  title text not null,
  description text not null,
  municipality text not null,
  area text,
  recommended_age_min int,
  recommended_age_max int,
  price numeric(10,2),
  condition text,
  images text[] not null default '{}',
  status moderation_status not null default 'pending_review',
  verified boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint no_minor_identifying_fields check (title !~* '(nombre del alumno|clase exacta|foto del menor)')
);

create table providers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  business_name text not null,
  category text not null,
  description text,
  municipality text not null,
  service_area text[] not null default '{}',
  website text,
  phone text,
  email text,
  verified boolean not null default false,
  plan provider_plan not null default 'gratuito',
  created_at timestamptz not null default now()
);

create table reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete set null,
  center_id uuid references centers(id) on delete cascade,
  provider_id uuid references providers(id) on delete cascade,
  rating_communication int check (rating_communication between 1 and 5),
  rating_facilities int check (rating_facilities between 1 and 5),
  rating_environment int check (rating_environment between 1 and 5),
  rating_activities int check (rating_activities between 1 and 5),
  rating_languages int check (rating_languages between 1 and 5),
  rating_attention int check (rating_attention between 1 and 5),
  comment text,
  status moderation_status not null default 'pending_review',
  created_at timestamptz not null default now(),
  constraint review_target check (center_id is not null or provider_id is not null)
);

create table reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete set null,
  listing_id uuid references listings(id) on delete cascade,
  review_id uuid references reviews(id) on delete cascade,
  reason text not null,
  status text not null default 'open',
  created_at timestamptz not null default now()
);

create table favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  listing_id uuid references listings(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, listing_id)
);

create table contact_requests (
  id uuid primary key default gen_random_uuid(),
  from_user_id uuid references users(id) on delete set null,
  listing_id uuid references listings(id) on delete cascade,
  provider_id uuid references providers(id) on delete cascade,
  message text,
  created_at timestamptz not null default now()
);

create table community_posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete set null,
  title text not null,
  body text not null,
  municipality text,
  center_id uuid references centers(id) on delete set null,
  category_id uuid references categories(id) on delete set null,
  tags text[] not null default '{}',
  status moderation_status not null default 'pending_review',
  created_at timestamptz not null default now()
);
