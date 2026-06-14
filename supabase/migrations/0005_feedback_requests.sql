create table if not exists public.feedback_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  context text,
  item_id text,
  name text,
  email text,
  message text not null,
  status public.moderation_status not null default 'pending_review',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.feedback_requests enable row level security;

drop policy if exists "Anyone can create feedback requests" on public.feedback_requests;
drop policy if exists "Users can read own feedback requests" on public.feedback_requests;

create policy "Anyone can create feedback requests"
  on public.feedback_requests
  for insert
  to anon, authenticated
  with check (true);

create policy "Users can read own feedback requests"
  on public.feedback_requests
  for select
  to authenticated
  using (auth.uid() = user_id);

grant insert on public.feedback_requests to anon, authenticated;
grant select on public.feedback_requests to authenticated;
