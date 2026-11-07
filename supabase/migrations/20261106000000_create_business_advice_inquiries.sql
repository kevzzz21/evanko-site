-- Free business advice inquiries submitted from evanko.co/business-advice.
-- Run in the Supabase SQL editor or with the Supabase CLI before adding the
-- NEXT_PUBLIC_SUPABASE_* values to the deployment environment.

create table if not exists public.business_advice_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 160),
  email text not null check (char_length(email) between 3 and 320),
  business_name text check (char_length(business_name) between 1 and 200),
  website text,
  industry text,
  annual_revenue text,
  challenge text not null check (char_length(challenge) between 1 and 6000),
  source text not null default 'evanko.co/business-advice'
);

-- Keep this compatible if the table was created before business name became optional.
alter table public.business_advice_inquiries alter column business_name drop not null;

alter table public.business_advice_inquiries enable row level security;

-- RLS policies do not grant table privileges on their own. The browser may
-- insert an inquiry, but still cannot read, edit, or delete any inquiries.
grant insert on table public.business_advice_inquiries to anon;

-- The public site may create inquiries only. Reading, editing, and deleting
-- remain restricted to authenticated administrators in the Supabase dashboard.
create policy "Public can submit business advice inquiries"
  on public.business_advice_inquiries
  for insert
  to anon
  with check (true);
