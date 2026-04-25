## Obiectiv

Transformam fluxul de inchiriere intr-o ierarhie clara pe trei niveluri:

1. **`/inchiriere`** — pagina hub cu doar cele 4 categorii (carduri mari, fara modele).
2. **`/inchiriere/:categorie`** — lista cu toate vehiculele din acea categorie (cardurile de produs).
3. **`/inchiriere/:categorie/:slug`** — pagina individuala a fiecarui vehicul cu galerie completa, specificatii detaliate si CTA spre rezervare.

## 1. Routing (`src/App.tsx`)

Adaugam rutele noi, pastrand `/rezerva/:id` pentru formularul de rezervare:

```
/inchiriere                       → Inchiriere.tsx           (hub categorii)
/inchiriere/:categorie            → InchiriereCategorie.tsx  (lista produse)
/inchiriere/:categorie/:slug      → VehicleDetail.tsx        (pagina produs)
/rezerva/:id                      → Rezerva.tsx              (neschimbat)
```

Slug-urile categoriilor: `scutere-125`, `scutere-50`, `fara-permis`, `masini`.

## 2. Pagina hub `/inchiriere` (rescriere `Inchiriere.tsx`)

- Hero scurt cu titlu si intro.
- Grid cu 4 carduri mari de categorie (refolosim stilul vizual din `RentalCategoriesPreview`):
  - imagine reprezentativa (Honda PCX, Motron Breezy, Peugeot Kisbee, Toyota Corolla)
  - titlu, descriere, "recomandat pentru"
  - numar de modele disponibile (`X modele`)
  - link spre `/inchiriere/{slug}` in loc de ancora `#`
- Eliminam scroll-ul lung cu toate vehiculele direct pe aceasta pagina.

## 3. Pagina lista `/inchiriere/:categorie` (nou — `InchiriereCategorie.tsx`)

- Breadcrumb: Inchiriere → {Categorie}.
- Header cu titlu categorie + intro + "audience" (refolosim metadatele din actualul `sections` din `Inchiriere.tsx`).
- Grid responsive (`sm:2 / lg:3`) cu `VehicleCard` pentru toate vehiculele filtrate dupa categorie.
- `VehicleCard.tsx` se modifica: butoanele "Detalii" si "Rezerva" duc spre `/inchiriere/{categorie}/{slug}` respectiv `/rezerva/{slug}`.
- Daca `:categorie` e invalid → `NotFound`.

## 4. Pagina produs `/inchiriere/:categorie/:slug` (nou — `VehicleDetail.tsx`)

Layout pe 2 coloane (desktop):

**Stanga — galerie:**
- Imagine principala mare (aspect 4/3) + thumbnails sub ea.
- Click pe thumbnail schimba imaginea principala (state local).
- Daca exista o singura imagine, doar imaginea mare.

**Dreapta — informatii:**
- Breadcrumb sus.
- Titlu, an, badge categorie + disponibilitate.
- Descriere lunga.
- Specificatii grid (transmisie, combustibil, autonomie, viteza maxima, locuri, cargo, consum) — scoatem din campurile existente in `Vehicle`.
- Sectiune "Highlights" (lista cu icon check).
- Sectiune "Inclus in pret" (`included`).
- Sectiune "Conditii" (`rules`).
- Card pret cu `pricePerDay / pricePerWeek / pricePerMonth`.
- 2 CTA: "Rezerva acum" (→ `/rezerva/{slug}`) si "WhatsApp" (link prefilled).

Sub layout: sectiune "Modele similare" — 3 carduri din aceeasi categorie (excluzand modelul curent), folosind `VehicleCard`.

## 5. Componente atinse

- **Modificat:** `src/App.tsx` (rute noi)
- **Rescris:** `src/pages/Inchiriere.tsx` (devine hub)
- **Nou:** `src/pages/InchiriereCategorie.tsx`
- **Nou:** `src/pages/VehicleDetail.tsx`
- **Modificat:** `src/components/VehicleCard.tsx` (linkurile "Detalii" duc la pagina produs noua)
- **Modificat:** `src/components/sections/RentalCategoriesPreview.tsx` (linkurile duc la `/inchiriere/{slug}` in loc de `#hash`)
- **Modificat:** `src/components/layout/Header.tsx` (verificam ca link-ul "Inchiriere" duce la `/inchiriere`, fara hash-uri)

## 6. Build errors raportate

Erorile TypeScript din `<build-errors>` sunt stale — verificarea curenta a `src/data/fleet.ts` confirma ca toate variabilele (`camry1`, `aygo1`, `c31`, `ec31`, `kisbee1`, `agilityFp1`, `like1`, `agility50_1`, `xpro1`, `symphony125_1`, `symphonyRs1`, `trevis1`, `jetx1`, `pcx1`) sunt importate si folosite corect. Build-ul ar trebui sa treaca; daca mai apar erori dupa schimbari, le rezolvam local.

## Out of scope (acum)

- Filtre/sortare in pagina de lista (putem adauga ulterior).
- Animatii suplimentare.
- Modificari la `Rezerva.tsx`.
