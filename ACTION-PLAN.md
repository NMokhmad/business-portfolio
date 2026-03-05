# SEO Action Plan — mokhmad.fr
**Generated:** 2026-03-04 | **SEO Health Score:** 58/100

Priority order: Critical → High → Medium → Low

---

## CRITICAL — Fix immediately (legal risk + broken indexing)

### C1. Fix JSON-LD schema domain mismatch (2 min)
**File:** `index.html` lines 23 and 30

Change both instances of `"url": "https://mokhmad.dev"` to `"url": "https://mokhmad.fr"`.

Current (broken):
```json
{ "@type": "WebSite", "url": "https://mokhmad.dev", ... }
{ "@type": "Person",  "url": "https://mokhmad.dev", ... }
```

Fix:
```json
{ "@type": "WebSite", "url": "https://mokhmad.fr/", ... }
{ "@type": "Person",  "url": "https://mokhmad.fr/", ... }
```

Also update `dist/index.html` or set up the build so the `dist/` version is regenerated.

---

### C2. Add canonical tag (2 min)
**File:** `index.html`

Add inside `<head>`:
```html
<link rel="canonical" href="https://mokhmad.fr/" />
```

---

### C3. Create real legal pages (1–2h)
**Files:** Create new routes/pages, update `Footer.jsx`

The "Mentions légales" and "Politique de confidentialité" links both point to `href="#"`. Under French law (LCEN) and GDPR, these must be real pages.

**Option A (quickest) — Modal approach:**
Create a `LegalModal.jsx` component showing static legal text. Update Footer.jsx to trigger the modal instead of `href="#"`.

**Option B (better for SEO) — Real pages:**
Add React Router (or equivalent) and create:
- `/mentions-legales` — Publisher identity (your full name, address, SIRET/SIREN number, hosting provider details per LCEN)
- `/politique-de-confidentialite` — GDPR policy for EmailJS contact form data collection

After creating the pages, update `public/sitemap.xml`:
```xml
<url>
  <loc>https://mokhmad.fr/mentions-legales</loc>
  <lastmod>2026-03-04</lastmod>
</url>
<url>
  <loc>https://mokhmad.fr/politique-de-confidentialite</loc>
  <lastmod>2026-03-04</lastmod>
</url>
```

---

### C4. Fix "Étude de cas" dead links (30 min)
**File:** `src/data/projects.js`

`caseStudyUrl: "#"` on both projects causes a trust failure. Users click "Voir l'étude de cas", nothing happens.

Either:
1. **Remove the case study button** from the Projects component until the pages exist
2. **Build the case study pages** (recommended — great for E-E-A-T and SEO)

---

## HIGH — Fix within 1 week

### H1. Fix og:image (5 min)
**File:** `index.html` line 12

Current:
```html
<meta property="og:image" content="/pp.png" />
```

Fix — absolute URL + add missing tags:
```html
<meta property="og:image" content="https://mokhmad.fr/pp.webp" />
<meta property="og:url" content="https://mokhmad.fr/" />
<meta property="og:image:width" content="800" />
<meta property="og:image:height" content="800" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:site_name" content="Mokhmad" />
<meta name="twitter:image" content="https://mokhmad.fr/pp.webp" />
```

Note: Ideally create a dedicated 1200×630px OG banner image (`og-image.jpg`) instead of the portrait photo.

---

### H2. Add security headers via vercel.json (15 min)
**File:** Create `vercel.json` at project root

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        }
      ]
    }
  ]
}
```

---

### H3. Fix Google Fonts render-blocking (10 min)
**Files:** `index.html` + `src/index.css`

**Step 1:** Remove this line from `src/index.css`:
```css
@import url('https://fonts.googleapis.com/...');
```

**Step 2:** Add to `index.html` `<head>` (before `<link rel="stylesheet" href="/assets/...">`):
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap"
  media="print"
  onload="this.media='all'"
/>
<noscript>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap"
  />
</noscript>
```

This removes 2 render-blocking requests and will reduce FCP/LCP by ~400ms on 4G mobile.

---

### H4. Convert nav buttons to anchor tags (20 min)
**Files:** `src/components/Navbar.jsx`, `src/components/Footer.jsx`

Replace `<button onClick={() => scrollToSection(id)}>` with `<a href>` that preserves smooth-scroll:

**Navbar.jsx** — in the desktop nav and mobile menu, change:
```jsx
// Before:
<button
  key={id}
  onClick={() => scrollToSection(id)}
  className={`nav-link${activeSection === id ? ' nav-link-active' : ''}`}
>
  {label}
</button>

// After:
<a
  key={id}
  href={`#${id}`}
  onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
  className={`nav-link${activeSection === id ? ' nav-link-active' : ''}`}
>
  {label}
</a>
```

**Footer.jsx** — same pattern for all nav items.

Also update the "Contact" button in both files:
```jsx
<a href="#contact" onClick={(e) => { e.preventDefault(); scrollToContact(); }} className="nav-link">
  Contact
</a>
```

---

### H5. Add LCP image preload hint (5 min)
**File:** `index.html`

Add to `<head>`:
```html
<link rel="preload" as="image" href="/pp.webp" fetchpriority="high" />
```

Also update the hero `<img>` in `Hero.jsx`:
```jsx
<img
  src="/pp.webp"
  alt="Mokhmad — Développeur Web Fullstack"
  fetchpriority="high"
  width="400"
  height="500"
  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
/>
```

---

### H6. Add "freelance" to meta description and hero copy (10 min)
**File:** `index.html` line 8

Current meta description:
```
Développeur web fullstack spécialisé en sites et applications qui génèrent des résultats business. Livraison en 2-4 semaines, support inclus, garantie satisfait ou remboursé.
```

Suggested (145 chars, includes "freelance"):
```
Développeur web fullstack freelance — sites et apps qui génèrent des résultats concrets. Livraison 2–4 semaines, support 30j inclus, satisfait ou remboursé.
```

Also consider adding "freelance" to the hero subtitle in `Hero.jsx`:
```jsx
// Current:
"Développeur fullstack spécialisé en solutions qui génèrent des résultats business."

// Suggested:
"Développeur fullstack freelance spécialisé en solutions qui génèrent des résultats concrets."
```

---

### H7. Fix mobile CTA visibility (30 min)
**File:** `src/components/Hero.jsx`

On 375×812 mobile viewport, the primary CTA is below the fold because the profile photo takes ~350px of vertical space.

Options:
1. **Reorder mobile layout:** On mobile, show headline + CTA first, photo below
2. **Reduce photo height on mobile** using responsive CSS
3. **Add sticky bottom CTA bar** on mobile (e.g., fixed "Démarrer un projet" button at bottom of screen)

---

## MEDIUM — Fix within 1 month

### M1. Upgrade schema to ProfessionalService + AggregateRating (45 min)
**File:** `index.html`

Replace the entire `<script type="application/ld+json">` block with the full schema from `FULL-AUDIT-REPORT.md` Section 3.2. Key additions:
- Fix domain URLs: `mokhmad.dev` → `mokhmad.fr`
- Add `ProfessionalService` node with service catalog and pricing
- Add `AggregateRating` with the 3 client testimonials
- Add `@id` to all nodes for entity linking
- Remove invalid `Person.offers` property

**Impact:** Potential star rating display in Google SERPs.

---

### M2. Add width/height to all images (15 min)
**Files:** `src/components/Hero.jsx`, `src/components/Projects.jsx`

Every `<img>` must have explicit `width` and `height` attributes to prevent CLS.

```jsx
// Hero.jsx
<img
  src="/pp.webp"
  alt="Mokhmad — Développeur Web Fullstack"
  width="400"
  height="500"
  fetchpriority="high"
  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
/>

// Projects.jsx (both project images)
<img
  src={project.image}
  alt={project.title}
  loading="lazy"
  width="800"
  height="500"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>
```

---

### M3. Trim meta description to ≤155 characters (5 min)
**File:** `index.html` line 8

Current is 174 characters — will be truncated in SERPs. Target ≤150 characters.

---

### M4. Add location targeting (15 min)
**Files:** `index.html` (schema), hero section copy

Add to Person/ProfessionalService schema:
```json
"address": {
  "@type": "PostalAddress",
  "addressCountry": "FR"
}
```

Add to hero subtitle or contact section: "Basé en France, disponible en remote"

---

### M5. Add biography / years of experience (20 min)
**Content change**

No section states how long Mokhmad has been developing. Even one sentence in the hero or a new "À propos" section improves Expertise signals:
> "Développeur fullstack freelance depuis X ans, spécialisé en React, Node.js et PostgreSQL."

---

### M6. Get domain email address (30 min)
**Files:** Contact form, schema, Contact.jsx

Replace `n.mokhmad@gmail.com` with `contact@mokhmad.fr`. Configure email forwarding via your hosting provider (OVH, Infomaniak, etc.). This improves perceived professionalism significantly.

---

### M7. Update sitemap (5 min)
**File:** `public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mokhmad.fr/</loc>
    <lastmod>2026-03-04</lastmod>
  </url>
</urlset>
```

Remove `<priority>` (deprecated, ignored by Google). Update `<lastmod>` to today.
Automate: update `lastmod` as part of your deploy script.

---

### M8. Clean up /public directory (10 min)
**File:** `public/` folder

Remove large PNG originals not served to users:
- `public/pp.png` (1.3MB) — not referenced, WebP used
- `public/ibaperformance.png` (1.5MB) — not referenced, WebP used
- `public/skillswap.png` (744KB) — not referenced

Also check if `public/skillswap.webp` (old version) is referenced anywhere — if not, remove it.

Consider recompressing `public/skillswaps-newDesign.webp` (currently 120KB, vs 42KB for ibaperformance.webp).

---

## LOW — Backlog

### L1. Add third portfolio project
Strengthens Experience signals and gives Google more content to associate with your expertise.

### L2. Add verifiable attribution to testimonials
Get permission from Thomas B., Nathalie R., and David K. to use their full name + company. Even one verifiable testimonial (with a LinkedIn link) dramatically improves Authoritativeness.

### L3. Publish Lighthouse scores for client projects
Both projects claim performance benefits. Show actual Lighthouse screenshots or PageSpeed Insights links.

### L4. Consider blog posts (1–2/month)
Target: "combien coûte une application web sur mesure", "React vs Vue pour un MVP", "comment choisir son développeur freelance". Each article creates a new indexable URL and builds topical authority.

### L5. Register on Malt.fr or Codeur.com
French freelance platforms rank well in Google for "développeur freelance [ville]" searches. A profile with a backlink to `mokhmad.fr` would be your fastest external authority signal.

### L6. Add `og:locale` and `og:site_name` to head
```html
<meta property="og:locale" content="fr_FR" />
<meta property="og:site_name" content="Mokhmad" />
```

### L7. Automate sitemap lastmod on deploy
Add to your build/deploy script:
```bash
DATE=$(date +%Y-%m-%d)
sed -i "s/<lastmod>.*<\/lastmod>/<lastmod>$DATE<\/lastmod>/" public/sitemap.xml
```

---

## Implementation Order (optimized for impact/effort ratio)

| Week | Actions |
|---|---|
| **Today** | C1 (schema domain), C2 (canonical), H1 (og:image), H3 (Google Fonts), M7 (sitemap) |
| **This week** | C3 (legal pages), H2 (security headers), H4 (nav links → anchors), H5 (preload), H6 (add freelance keyword), M3 (trim meta description), M2 (image dimensions) |
| **This month** | C4 (case studies), H7 (mobile CTA), M1 (schema upgrade), M4 (location), M5 (bio), M6 (domain email), M8 (clean public/) |
| **Ongoing** | L1–L7 (authority building, content depth) |

---

## Expected Score After Critical + High Fixes

| Category | Current | Expected After C+H Fixes |
|---|---|---|
| Technical SEO | 54 | ~78 |
| Content Quality | 61 | ~70 |
| On-Page SEO | 65 | ~82 |
| Schema | 40 | ~75 |
| Performance | 70 | ~85 |
| Images | 65 | ~80 |
| AI Search Readiness | 47 | ~62 |
| **Weighted Total** | **58** | **~77** |
