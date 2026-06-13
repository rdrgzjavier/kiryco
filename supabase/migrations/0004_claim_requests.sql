create table if not exists public.claim_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  entity_type text not null check (entity_type in ('center', 'provider', 'community')),
  entity_id text not null,
  entity_name text not null,
  requester_name text not null,
  requester_email text not null,
  requester_phone text,
  role_description text not null,
  corrections text,
  official_website text,
  image_url text,
  status public.moderation_status not null default 'pending_review',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.claim_requests enable row level security;

drop policy if exists "Users can create claim requests" on public.claim_requests;
drop policy if exists "Users can read own claim requests" on public.claim_requests;

create policy "Users can create claim requests"
  on public.claim_requests
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users can read own claim requests"
  on public.claim_requests
  for select
  to authenticated
  using (auth.uid() = user_id);

grant select, insert on public.claim_requests to authenticated;
