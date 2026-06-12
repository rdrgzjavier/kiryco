grant usage on schema public to anon, authenticated;

grant select on public.centers to anon, authenticated;
grant select on public.services to anon, authenticated;
grant select on public.listings to anon, authenticated;
grant select on public.community_posts to anon, authenticated;

grant select, insert, update on public.profiles to authenticated;
grant select, insert, update on public.business_profiles to authenticated;
grant select, insert, update on public.services to authenticated;
grant select, insert, update on public.listings to authenticated;
grant select, insert, update on public.community_posts to authenticated;
grant select, insert, update, delete on public.favorites to authenticated;
grant select, insert, update on public.submissions to authenticated;
grant insert on public.contact_events to authenticated;
grant insert on public.newsletter_subscribers to anon, authenticated;
