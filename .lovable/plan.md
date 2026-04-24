# DrivePartner — Premium Rental Platform

A modern, editorial rental site for DrivePartner (Bucharest) targeting Uber/Bolt drivers and Glovo/Wolt/Bolt Food couriers. Built as a React + Vite SPA with React Router (Next.js isn't available in Lovable, so the same routes and SEO meta tags will be implemented client-side via react-helmet-async).

## Design system

- **Palette (strict):** primary `#D35400`, secondary `#FF8C42`, bg `#FFFFFF` / `#FAFAFA`, text `#0F0F10`, mint `#7FD99F` (sparingly, for "Disponibil" badges only), borders `#E8E8E8`. No purple/blue/red anywhere.
- **Typography:** Plus Jakarta Sans (headlines, bold, tight tracking), Inter (body), tabular numbers for prices.
- **Tone:** Apple-meets-Audi. Generous whitespace, 12 to 16px radii, soft shadows, no glassmorphism. Big vehicle photography with soft orange gradient overlays. Subtle parallax on hero, Framer Motion scroll/fade/slide micro-animations.
- All tokens defined in `index.css` + `tailwind.config.ts` as semantic HSL variables. Romanian copy throughout, no em dashes.

## Pages & routes

1. `/` Homepage
2. `/flota` Fleet catalog (filterable)
3. `/uber-bolt` Driver landing
4. `/curieri` Courier landing
5. `/despre` About
6. `/contact` Contact + form
7. `/rezerva/:id` Booking page (one per vehicle, 10 total)
8. Catch-all 404

Shared layout: sticky announcement bar ("Rezervi azi, ridici maine · Asistenta 24/7"), header with logo + nav + prominent phone number CTA, footer with trust badges. Mobile gets a sticky bottom bar with Call + WhatsApp buttons.

## Homepage sections (in order)

1. **Hero** split layout, headline "Masina ta de lucru, gata maine", two CTAs, large car+bike composition with orange gradient glow, subtle parallax.
2. **Segment selector** two big cards: drivers vs couriers, route to dedicated landings.
3. **Quick booking widget** Categorie + Perioada + "Vezi disponibilitate" deep-links into `/flota` with filters pre-applied.
4. **Featured fleet** 6-card grid with hover lift, photo, badge, key specs, price-from, "Rezerva".
5. **Why DrivePartner** 4-column icon feature grid.
6. **How it works** 4-step horizontal timeline.
7. **Price calculator** vehicle type + duration to total + savings badge, sticky result card.
8. **Testimonials carousel** Uber driver + Glovo courier style quotes.
9. **FAQ accordion** 8 questions (garantie, acte, accident, inlocuire, etc.).
10. **Final CTA** full-width orange gradient with phone + "Rezerva acum".
11. **Footer** logo, links, contact, social, program, trust badges.

## Fleet catalog `/flota`

Sticky left sidebar filters: Categorie, Destinatie, Pret/saptamana range slider, Transmisie (cars only), Autonomie (electric only), Disponibilitate. URL-synced filters so the homepage widget can deep-link. Mobile filters open in a Sheet.

3-column grid (1 on mobile). Each card: hero image with hover-swap to alt angle, mint "Disponibil" or gray "Lista asteptare" badge, name + year, icon spec row, price breakdown /zi /sapt /luna, "Vezi detalii" + "Rezerva".

## Booking page `/rezerva/:id`

Two-column. Left: thumbnail gallery, full specs, what's included, rules. Right (sticky): start date picker (shadcn calendar) + duration selector, live-updating price calculator, react-hook-form + zod form (nume, telefon, email, tip activitate dropdown: Uber / Bolt / Glovo / Wolt / Bolt Food), "Trimite cererea pe WhatsApp" button.

**Submission (WhatsApp):** validated form data is encoded into a pre-filled WhatsApp message and opens `https://wa.me/<placeholder-number>?text=...` in a new tab. Confirmation toast: "Te sunam in maxim 1h". All inputs URL-encoded and length-capped to prevent injection.

## Dedicated landings

- **`/uber-bolt`** hero "Creste-ti castigurile, noi ne ocupam de masina", earnings calculator (ore/zi x zile/sapt to estimare lunara), 3 recommended cars, driver-only testimonials.
- **`/curieri`** hero "Livreaza mai repede, castiga mai mult", comparison table (bike vs scooter vs masina mica), 6 recommended models, "Cat economisesti vs cumparat" calculator.

## Fleet data (`src/data/fleet.ts`)

Hardcoded TypeScript array with all 10 vehicles (Dacia Logan, Toyota Corolla Hybrid, Hyundai i20, Skoda Octavia, SYM Symphony 125, Piaggio Liberty 125, NIU N1S, Tenways cargo e-bike, Himiway Cruiser, Fiido M1 Pro). Each entry: id, slug, name, year, category, target audience, transmission, fuel/electric, autonomy, seats, prices (day/week/month), availability, gallery (Unsplash URLs `?q=80&w=1600`), included items, rules. Single source of truth for catalog, featured grid, recommended sections, and booking pages.

## Contact, About, Contact form

- `/despre` editorial page: story, mission, stats (vehicule in flota, soferi parteneri, ani experienta), team blurb.
- `/contact` map placeholder, address, program, phone (placeholder `+40 7xx xxx xxx`), email, contact form (zod-validated) that also opens WhatsApp pre-filled.

## Tech & quality

- React 18 + Vite + TypeScript, React Router v6, Tailwind, shadcn/ui (Button, Input, Select, Accordion, Dialog, Calendar, Popover, Carousel, Sheet, Slider), Framer Motion, react-hook-form + zod, react-helmet-async for per-page meta tags + OpenGraph + schema.org LocalBusiness/Product JSON-LD.
- Mobile-first responsive at 640/768/1024/1280. Sticky mobile bottom call/WhatsApp bar.
- Accessibility: semantic landmarks, focus rings, alt text, keyboard-navigable carousel/accordion.
- Performance: lazy-loaded images, no hero video, sized Unsplash URLs.

## Out of scope (can add later)

- Backend / CMS for fleet (currently hardcoded JSON, easy to swap to Lovable Cloud later).
- Auth or driver dashboard.
- Payment processing.
- Live availability sync.
