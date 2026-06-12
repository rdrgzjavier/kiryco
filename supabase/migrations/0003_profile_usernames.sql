create table if not exists public.profile_usernames (
  public_name_normalized text primary key,
  profile_id uuid not null unique references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.profile_usernames enable row level security;

drop policy if exists "Anyone can check profile usernames" on public.profile_usernames;
drop policy if exists "Users can reserve own username" on public.profile_usernames;
drop policy if exists "Users can update own username" on public.profile_usernames;
drop policy if exists "Users can delete own username" on public.profile_usernames;

create policy "Anyone can check profile usernames"
  on public.profile_usernames
  for select
  using (true);

create policy "Users can reserve own username"
  on public.profile_usernames
  for insert
  to authenticated
  with check (auth.uid() = profile_id);

create policy "Users can update own username"
  on public.profile_usernames
  for update
  to authenticated
  using (auth.uid() = profile_id)
  with check (auth.uid() = profile_id);

create policy "Users can delete own username"
  on public.profile_usernames
  for delete
  to authenticated
  using (auth.uid() = profile_id);

grant select on public.profile_usernames to anon, authenticated;
grant insert, update, delete on public.profile_usernames to authenticated;

insert into public.profile_usernames (public_name_normalized, profile_id)
select lower(regexp_replace(btrim(public_name), '\s+', ' ', 'g')), id
from public.profiles
where public_name is not null and btrim(public_name) <> ''
on conflict do nothing;

create unique index if not exists profiles_public_name_normalized_idx
  on public.profiles (lower(btrim(public_name)))
  where public_name is not null and btrim(public_name) <> '';
