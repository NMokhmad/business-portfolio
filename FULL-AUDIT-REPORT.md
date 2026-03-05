# SEO Full Audit Report — mokhmad.fr
**Date:** 2026-03-04
**Business type:** Freelance Web Developer / Agence (single-page portfolio, French)
**Technology:** React SPA (Vite), deployed on Vercel
**Audited by:** Claude Code SEO Audit (6 parallel specialist subagents)

---

## SEO Health Score: 58 / 100

| Category | Weight | Raw Score | Contribution |
|---|---|---|---|
| Technical SEO | 25% | 54/100 | 13.5 |
| Content Quality (E-E-A-T) | 25% | 61/100 | 15.3 |
| On-Page SEO | 20% | 65/100 | 13.0 |
| Schema / Structured Data | 10% | 40/100 | 4.0 |
| Performance (CWV) | 10% | 70/100 | 7.0 |
| Images | 5% | 65/100 | 3.3 |
| AI Search Readiness | 5% | 47/100 | 2.4 |
| **TOTAL** | **100%** | — | **58.5 / 100** |

**Rating: Needs Improvement** — Solid foundation with critical issues blocking full search potential.

---

## Executive Summary

### Top 5 Critical Issues

1. **Schema domain mismatch** — JSON-LD in `index.html` references `https://mokhmad.dev` (not `https://mokhmad.fr`). Google attributes structured data to the wrong entity.
2. **Missing canonical tag** — No `<link rel="canonical">` exists. Duplicate content risk with no resolution mechanism.
3. **CSR-only rendering** — All page content is invisible in the raw HTML served to most crawlers (pure React SPA). Googlebot renders JS but with days-to-weeks delay.
4. **Legal pages broken** — "Mentions légales" and "Politique de confidentialité" link to `href="#"`. Non-compliant with French LCEN law and GDPR. Legal liability.
5. **Nav links are `<button>`, not `<a href>`** — Zero crawlable internal link graph. Sections are unreachable by crawlers.

### Top 5 Quick Wins (under 30 min each)

1. Fix JSON-LD `url` from `mokhmad.dev` → `mokhmad.fr` in `index.html` (2 lines)
2. Add `<link rel="canonical" href="https://mokhmad.fr/" />` to `index.html`
3. Fix `og:image` from `/pp.png` → `https://mokhmad.fr/pp.png` + add `og:url`
4. Add `twitter:image` meta tag
5. Trim meta description from 174 → ≤155 characters

---

## 1. Technical SEO — Score: 54/100

### 1.1 Crawlability

| Check | Status | Detail |
|---|---|---|
| robots.txt | ✅ PASS | `User-agent: * / Allow: /` — all crawlers permitted |
| Sitemap referenced in robots.txt | ✅ PASS | `Sitemap: https://mokhmad.fr/sitemap.xml` present |
| sitemap.xml reachable | ✅ PASS | HTTP 200, valid XML, 1 URL |
| HTTPS | ✅ PASS | HTTP/2, Vercel-managed TLS |
| Redirect chain | ✅ PASS | HTTP 200 direct — no redirect chain |

### 1.2 Indexability

| Check | Status | Detail |
|---|---|---|
| Canonical tag | ❌ CRITICAL | **Missing entirely** — add `<link rel="canonical" href="https://mokhmad.fr/" />` |
| Meta robots | ✅ INFO | Absent (defaults to `index, follow` — acceptable) |
| HTML `lang` attribute | ✅ PASS | `<html lang="fr">` — correct |

### 1.3 Security Headers

| Header | Status | Value Found |
|---|---|---|
| Strict-Transport-Security | ✅ PASS | `max-age=63072000` (2 years) |
| X-Frame-Options | ❌ HIGH | **Missing** — clickjacking vulnerability |
| Content-Security-Policy | ❌ HIGH | **Missing** — no CSP for React SPA + EmailJS |
| X-Content-Type-Options | ❌ MEDIUM | **Missing** — MIME sniffing risk |
| HSTS `includeSubDomains` + `preload` | ⚠️ LOW | Present but incomplete directives |

**Fix via `vercel.json`:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
      ]
    }
  ]
}
```

### 1.4 JavaScript Rendering (CSR) — CRITICAL

This is a **pure React SPA (Client-Side Rendered)**. The raw HTML served to crawlers contains only:

```html
<body><div id="root"></div></body>
```

**Implications:**
- Googlebot renders JS but with significant delay (days to weeks between crawl and indexing)
- Bing, and non-JS crawlers see zero content
- Social link preview crawlers (LinkedIn, Slack, WhatsApp) see only the `<head>` tags — no body content
- All navigation sections (`#differentiators`, `#projects`, `#faq`) cannot be independently indexed

**Recommended fix:** Migrate to Next.js (SSG) or add `vite-plugin-ssg` for static pre-rendering at build time.

### 1.5 Navigation Crawlability — HIGH

All navigation links in `Navbar.jsx` and `Footer.jsx` are `<button>` elements with `onClick` handlers:

```jsx
// Current (not crawlable)
<button onClick={() => scrollToSection(id)}>{label}</button>

// Fix: preserve behavior while adding crawlable href
<a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollToSection(id); }}>
  {label}
</a>
```

### 1.6 Meta Tags

| Tag | Status | Value |
|---|---|---|
| `<title>` | ✅ (62 chars, slightly over) | "Mokhmad — Développeur Web Fullstack \| Sites qui convertissent" |
| `<meta description>` | ⚠️ MEDIUM (174 chars, >155) | "Développeur web fullstack spécialisé en sites et applications…" |
| `<meta viewport>` | ✅ PASS | `width=device-width, initial-scale=1.0` |
| `<link rel="canonical">` | ❌ CRITICAL | **Missing** |
| hreflang | ✅ N/A | Single-language site — not required |

### 1.7 Open Graph + Twitter Cards

| Tag | Status | Value |
|---|---|---|
| `og:title` | ✅ | "Mokhmad — Développeur Web Fullstack" |
| `og:description` | ✅ | Present, concise |
| `og:type` | ✅ | "website" |
| `og:image` | ❌ MEDIUM | `/pp.png` — **relative URL, must be absolute** |
| `og:url` | ❌ MEDIUM | **Missing** |
| `og:image:width/height` | ❌ LOW | Missing — LinkedIn may not render image |
| `og:locale` | ❌ LOW | Missing — add `fr_FR` |
| `twitter:card` | ✅ | `summary_large_image` |
| `twitter:title` | ✅ | Present |
| `twitter:description` | ✅ | Present |
| `twitter:image` | ❌ LOW | **Missing** — card will render without image |

### 1.8 Sitemap

**File:** `public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mokhmad.fr/</loc>
    <lastmod>2026-02-16</lastmod>    <!-- stale: should be 2026-03-04 -->
    <priority>1.0</priority>         <!-- deprecated: Google ignores since 2021 -->
  </url>
</urlset>
```

**Recommended corrected sitemap:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mokhmad.fr/</loc>
    <lastmod>2026-03-04</lastmod>
  </url>
</urlset>
```

---

## 2. Content Quality / E-E-A-T — Score: 61/100

### 2.1 E-E-A-T Breakdown

| Dimension | Score | Assessment |
|---|---|---|
| **Experience** | 14/20 | Two real client projects with live URLs ✓; dead case study links ✗ |
| **Expertise** | 17/25 | Specific tech stack, security reasoning (Argon2/OWASP), professional process ✓; no years of experience stated ✗ |
| **Authoritativeness** | 10/25 | GitHub + LinkedIn linked ✓; testimonials use only initials (unverifiable) ✗; no external mentions ✗ |
| **Trustworthiness** | 13/30 | Email + social links ✓; **legal pages broken** (LCEN violation) ✗; Gmail instead of domain email ✗ |

### 2.2 Content Depth

**Estimated word count by section:**

| Section | Words | Quality |
|---|---|---|
| Hero | ~85 | Punchy, appropriate |
| Problems | ~120 | Good problem/solution mapping |
| Differentiators | ~160 | Clear value props |
| Projects (both) | ~350 | Strong problem/solution/result + tech decisions |
| Testimonials | ~130 | Authentic but unverifiable |
| Process | ~140 | Professional engagement model |
| FAQ (6 questions) | ~320 | Specific, conversational, client-facing |
| Contact | ~110 | Clear CTA |
| **Total** | **~1,455 words** | Sufficient for a homepage |

**Thin content risk:** HIGH — Single-URL domain. No blog, no case study pages, no service sub-pages. Google cannot build topical authority from one page alone.

### 2.3 Keyword Analysis

**Critical gap: "freelance" is absent from all body copy and meta description.**

| Target Term | Title | Meta Desc | H1 | Body |
|---|---|---|---|---|
| développeur web fullstack | ✅ | ✅ | No | ✅ |
| freelance | ❌ | ❌ | ❌ | ❌ |
| site vitrine sur mesure | ❌ | ❌ | ❌ | ✅ (FAQ) |
| application web | ❌ | ❌ | ❌ | ✅ (FAQ) |
| React / Node.js | ❌ | ❌ | ❌ | ✅ (projects) |
| résultats business | ✅ | ✅ | ❌ | ✅ |

**Geographic targeting:** None. French freelance searches are heavily local ("développeur freelance Paris"). No city/region appears anywhere on the site.

### 2.4 Trust Issues (Legal)

- **Mentions légales** — `href="#"` (broken). **French LCEN requires this page** with publisher identity (name, address, SIRET). This is a legal compliance issue, not just an SEO issue.
- **Politique de confidentialité** — `href="#"` (broken). **GDPR requires this** since the contact form collects personal data (name, email) via EmailJS.
- **Gmail contact email** — `n.mokhmad@gmail.com` visible on the page. A `contact@mokhmad.fr` address would significantly improve perceived professionalism.

---

## 3. Schema / Structured Data — Score: 40/100

### 3.1 Current Schema (as found in `index.html`)

**Present:** `WebSite` + `Person` nodes in a `@graph` block.

**Critical issue — Domain mismatch:**
```json
{
  "@type": "WebSite",
  "url": "https://mokhmad.dev",    // ❌ WRONG — should be https://mokhmad.fr
  ...
},
{
  "@type": "Person",
  "url": "https://mokhmad.dev",    // ❌ WRONG — should be https://mokhmad.fr
  ...
}
```

**Additional issues:**
- `Person.offers` is not a valid Schema.org property on Person — will be silently ignored
- No `@id` on any node — internal linking within `@graph` broken
- No `ProfessionalService` schema — missing eligibility for service-related rich results
- No `AggregateRating` — 3 testimonials not expressed as structured reviews (missed star ratings in SERPs)
- No `FAQPage` schema (the FAQ data in `src/data/faq.js` is not exposed to crawlers)

### 3.2 Recommended Full JSON-LD Replacement

Replace the existing schema block in `index.html` with:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://mokhmad.fr/#website",
      "name": "Mokhmad — Développeur Web Fullstack",
      "url": "https://mokhmad.fr/",
      "description": "Développeur web fullstack spécialisé en sites et applications qui génèrent des résultats business.",
      "inLanguage": "fr-FR"
    },
    {
      "@type": "Person",
      "@id": "https://mokhmad.fr/#person",
      "name": "Mokhmad Noutsoulkhanov",
      "jobTitle": "Développeur Web Fullstack",
      "url": "https://mokhmad.fr/",
      "image": "https://mokhmad.fr/pp.webp",
      "email": "contact@mokhmad.fr",
      "worksFor": { "@id": "https://mokhmad.fr/#business" },
      "knowsAbout": ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Sanity CMS"],
      "sameAs": [
        "https://github.com/NMokhmad",
        "https://www.linkedin.com/in/mokhmad-noutsoulkhanov-b74a56258/"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://mokhmad.fr/#business",
      "name": "Mokhmad Noutsoulkhanov — Développeur Web Fullstack",
      "url": "https://mokhmad.fr/",
      "description": "Développeur web fullstack freelance spécialisé en sites vitrines, applications web et plateformes sur-mesure. Livraison en 2–4 semaines, support 30 jours inclus.",
      "image": "https://mokhmad.fr/pp.webp",
      "email": "contact@mokhmad.fr",
      "founder": { "@id": "https://mokhmad.fr/#person" },
      "areaServed": { "@type": "Country", "name": "France" },
      "availableLanguage": { "@type": "Language", "name": "French", "alternateName": "fr" },
      "sameAs": [
        "https://github.com/NMokhmad",
        "https://www.linkedin.com/in/mokhmad-noutsoulkhanov-b74a56258/"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "3",
        "reviewCount": "3"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "Thomas B." },
          "reviewBody": "Mokhmad a repris notre projet après qu'un autre dev nous ait plantés. Il a livré en 3 semaines ce que l'autre n'a pas fait en 4 mois. Réactif, clair, efficace. Je recommande les yeux fermés."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "Nathalie R." },
          "reviewBody": "Je ne comprends rien à la technique, et c'est exactement ce qu'Mokhmad a compris. Il m'a expliqué en français, m'a montré l'avancement chaque semaine, et j'ai eu un site qui marche."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "David K." },
          "reviewBody": "ROI immédiat. Mon nouveau site génère 3x plus de demandes de devis qu'avant. L'investissement s'est rentabilisé en 6 semaines."
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de développement web",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Site vitrine sur-mesure",
              "description": "Création de sites vitrines professionnels. Livraison en 2–3 semaines."
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "1500", "maxPrice": "3000", "priceCurrency": "EUR"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Application web sur-mesure",
              "description": "Développement d'applications web : espace client, outil de réservation, MVP SaaS. Livraison en 3–6 semaines."
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "3000", "maxPrice": "7000", "priceCurrency": "EUR"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Plateforme complexe sur-mesure",
              "description": "Marketplaces, SaaS multi-utilisateurs, applications métier complexes."
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "7000", "priceCurrency": "EUR"
            }
          }
        ]
      }
    }
  ]
}
</script>
```

---

## 4. Performance (Core Web Vitals) — Score: 70/100

### 4.1 Lab Measurements (Playwright, desktop)

| Metric | Value | Threshold | Status |
|---|---|---|---|
| TTFB | **12ms** | <200ms good | ✅ Excellent |
| FCP | **612ms** | <1800ms good | ✅ Good |
| DOM Interactive | **262ms** | — | ✅ Excellent |
| DOM Content Loaded | **340ms** | — | ✅ Excellent |
| Full Page Load | **447ms** | — | ✅ Excellent |
| Total Transfer Size | **~107KB** | <200KB ideal | ✅ Excellent |
| Resources count | **5** | — | ✅ Excellent |

### 4.2 LCP Estimate (Real-World Risk)

Lab measurements are excellent because the browser pre-caches aggressively. **Real-world LCP risk is HIGH** because:
- The LCP candidate (hero portrait `/pp.webp`) is rendered by React after JS execution — not discoverable during HTML parse
- No `<link rel="preload">` hint for the LCP image
- JS bundle (76KB) must execute before any visible content appears
- Field data (CrUX) may show 2.5–4s LCP on slower connections

**Fix:** Add preload hint in `index.html`:
```html
<link rel="preload" as="image" href="/pp.webp" fetchpriority="high" />
```
And add `fetchpriority="high"` to the hero `<img>` element.

### 4.3 Resource Breakdown

| Resource | Size | Type |
|---|---|---|
| `index-CTGYF6Kf.js` | 76KB | JS bundle (main app) |
| `pp.webp` | 25KB | Hero image |
| `index-B89kYPjE.css` | 5KB | CSS |
| Google Fonts CSS | 1KB | External CSS |
| `favicon.svg` | 1KB | Icon |

**Page weight is exceptional.** No third-party analytics, no tracking scripts, no heavy frameworks beyond the React bundle.

### 4.4 CLS Risk — MEDIUM

**Risk factors:**
- Hero portrait `<img>` has no `width` or `height` attributes — browser cannot reserve space before load
- Google Fonts loaded without `font-display: swap` observed

**Fix:** Add explicit dimensions to all `<img>` elements:
```jsx
<img src="/pp.webp" alt="Mokhmad — Développeur Web Fullstack" width="400" height="500" />
```

---

## 5. Images — Score: 65/100

| Image | Alt Text | Loading | Format | Width/Height |
|---|---|---|---|---|
| `/pp.webp` (hero) | ✅ "Mokhmad — Développeur Web Fullstack" | ❌ No attribute (defaults to eager) | ✅ WebP | ❌ Missing |
| `/skillswaps-newDesign.webp` | ✅ Present | ✅ `lazy` | ✅ WebP | ❌ Missing |
| `/ibaperformance.webp` | ✅ Present | ✅ `lazy` | ✅ WebP | ❌ Missing |

**Additional finding:** `og:image` references `/pp.png` (PNG, relative path) but the actual file served is `/pp.webp`. The `/pp.png` file also exists in `/public/`, so this is a file format inconsistency — the PNG is likely an outdated copy.

---

## 6. Visual / UX Analysis

### Desktop (1280×800) — Score: 9/10
- ✅ H1 visible above fold
- ✅ Primary CTA "Discuter de votre projet" visible above fold
- ✅ Value proposition clear immediately
- ✅ Profile photo present (trust signal)
- ✅ No overlay or popup blocking content
- ✅ Clean dark theme with strong visual identity

### Mobile (375×812) — Score: 6/10
- ✅ H1 visible above fold
- ✅ Hamburger menu accessible
- ✅ No horizontal scroll
- ❌ **Primary CTA "Démarrer un projet" is below fold** — profile photo takes too much vertical space
- ❌ No sticky mobile CTA

**Mobile CTA fix:** Reorder hero layout on mobile — headline + CTA first, photo below. Or reduce photo height on mobile.

---

## 7. AI Search Readiness — Score: 47/100

| Signal | Status | Detail |
|---|---|---|
| Structured pricing facts | ✅ | 1500–3000€, 3000–7000€, 7000€+ in FAQ |
| Structured timelines | ✅ | 2–3 weeks vitrine, 3–6 weeks app |
| FAQ format | ✅ | 6 Q&A pairs ideal for AI citation |
| FAQPage schema | ❌ | FAQ content not in machine-readable schema |
| Person/WebSite schema | ⚠️ | Exists but domain mismatch breaks entity association |
| AggregateRating | ❌ | 3 testimonials not structured for AI extraction |
| Verifiable authorship | ❌ | Testimonials use initials only |
| AI crawler access | ✅ | robots.txt permits GPTBot, ClaudeBot (Allow: /) |
| llms.txt | ❌ | Not present (optional but increasingly expected) |

---

## Full Issue Registry

### Critical (Fix immediately)
| ID | Issue | File |
|---|---|---|
| C1 | Schema domain mismatch: `mokhmad.dev` → `mokhmad.fr` | `index.html` lines 23, 30 |
| C2 | Missing `<link rel="canonical">` | `index.html` |
| C3 | Pure CSR — all content hidden from crawlers in raw HTML | Architecture |
| C4 | "Mentions légales" links to `href="#"` — LCEN violation | `Footer.jsx` |
| C5 | "Politique de confidentialité" links to `href="#"` — GDPR violation | `Footer.jsx` |

### High (Fix within 1 week)
| ID | Issue | File |
|---|---|---|
| H1 | All nav links are `<button>` — zero crawlable internal links | `Navbar.jsx`, `Footer.jsx` |
| H2 | `og:image` uses relative URL `/pp.png` | `index.html` line 12 |
| H3 | `og:url` missing | `index.html` |
| H4 | Missing X-Frame-Options header | `vercel.json` (create) |
| H5 | Missing Content-Security-Policy header | `vercel.json` |
| H6 | LCP image has no `<link rel="preload">` | `index.html` |
| H7 | Mobile CTA below fold on 375px | `Hero.jsx` layout |
| H8 | Dead case study links (`href="#"` in projects) | `src/data/projects.js` |
| H9 | "freelance" absent from body copy and meta description | `index.html`, content |

### Medium (Fix within 1 month)
| ID | Issue | File |
|---|---|---|
| M1 | Meta description 174 chars (>155 limit) | `index.html` line 8 |
| M2 | Hero `<img>` missing `width`/`height` attributes (CLS risk) | `Hero.jsx` |
| M3 | Missing `X-Content-Type-Options` header | `vercel.json` |
| M4 | `og:image:width` and `og:image:height` missing | `index.html` |
| M5 | `twitter:image` missing | `index.html` |
| M6 | `Person.offers` invalid schema property | `index.html` |
| M7 | No location targeting in content or schema | Multiple |
| M8 | Gmail address instead of domain email | `Contact.jsx`, schema |
| M9 | No years of experience stated anywhere | Content |
| M10 | Add `ProfessionalService` + `AggregateRating` schema | `index.html` |

### Low (Backlog)
| ID | Issue | File |
|---|---|---|
| L1 | Sitemap `<lastmod>` stale (2026-02-16) | `public/sitemap.xml` |
| L2 | Sitemap has deprecated `<priority>` tag | `public/sitemap.xml` |
| L3 | HSTS missing `includeSubDomains; preload` | `vercel.json` |
| L4 | Page title 62 chars (soft limit 60) | `index.html` |
| L5 | `og:locale` missing (`fr_FR`) | `index.html` |
| L6 | `og:site_name` missing | `index.html` |
| L7 | Testimonials unverifiable (initials only) | Content |
| L8 | No Lighthouse performance scores shown for client projects | Content |
| L9 | No blog / topical content depth | Architecture |
| L10 | `og:image` points to `/pp.png` but file served is `/pp.webp` | `index.html`, `public/` |

---

## Screenshots

- Desktop (1280×800): `page-desktop.png`
- Mobile (375×812): `page-mobile.png`
