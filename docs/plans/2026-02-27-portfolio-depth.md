# Portfolio Depth Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Ajouter de la profondeur technique aux cartes projets et remplacer 2 différenciateurs génériques par des arguments concrets.

**Architecture:** Modifications de données uniquement dans `src/data/` (projects.js, differentiators.js), puis mise à jour des composants qui les consomment (Projects.jsx, Differentiators.jsx). Aucune nouvelle dépendance, aucun nouveau composant.

**Tech Stack:** React 19, Lucide React (icons existantes + Layers + AlertCircle)

---

### Task 1 : Ajouter `techDecisions` aux données projets

**Files:**
- Modify: `src/data/projects.js`

**Step 1 : Lire le fichier actuel**

Run: `cat src/data/projects.js`
Expected: 2 projets sans champ `techDecisions`

**Step 2 : Remplacer le contenu de `src/data/projects.js` par :**

```js
export const projects = [
  {
    title: "SkillSwap — Plateforme d'échange de compétences",
    image: "/skillswap.webp",
    problem: "Les développeurs et créatifs galèrent à trouver des partenaires complémentaires pour collaborer ou échanger des compétences, sans passer par des plateformes freelance coûteuses.",
    solution: "Une plateforme communautaire full-stack (Node.js, Express, PostgreSQL) avec profils, système de notation 5 étoiles, messagerie privée en temps réel, recherche par compétence et flux d'onboarding guidé.",
    result: "Site ultra-rapide (chargement en moins d'1 seconde), aucun décalage visuel à l'affichage, et une navigation fluide sans aucun temps de blocage.",
    techDecisions: [
      { label: 'Argon2id', reason: 'Hashing mots de passe — résistant aux attaques GPU, standard recommandé en 2024' },
      { label: 'JWT + cookie httpOnly', reason: 'Token inaccessible au JavaScript — protection XSS native' },
      { label: 'PostgreSQL relationnel', reason: 'Intégrité garantie entre profils, compétences, notations et messages' },
      { label: 'DigitalOcean App Platform', reason: 'Déploiement containerisé, SSL automatique, rollback one-click' },
    ],
    testimonial: "SkillSwap m'a permis de trouver un développeur back-end pour mon projet en moins d'une semaine. Le système de notation aide vraiment à identifier les bons profils.",
    author: "Utilisateur bêta",
    liveUrl: "https://clownfish-app-hy864.ondigitalocean.app/",
    caseStudyUrl: "#"
  },
  {
    title: "IBA Performance — Site vitrine & portfolio automobile",
    image: "/ibaperformance.webp",
    problem: "Un spécialiste de la reprogrammation moteur avec 15 ans d'expérience et 500+ véhicules préparés, mais aucune présence en ligne pour générer des leads qualifiés.",
    solution: "Création d'un site React avec CMS headless Sanity, portfolio filtrable (11 catégories), blog SEO, formulaire de contact, et optimisations performances (code splitting, lazy loading, analytics Vercel).",
    result: "Site rapide (chargement en 1 seconde), parfaitement référencé sur Google, et un client 100% autonome pour gérer son contenu sans faire appel à un développeur.",
    techDecisions: [
      { label: 'Sanity CMS headless', reason: 'Client autonome pour gérer le contenu sans intervention dev' },
      { label: 'Code splitting + lazy loading', reason: 'Score Lighthouse maintenu au-dessus de 90' },
      { label: 'Vercel', reason: 'CDN mondial, preview automatique par commit, zéro config' },
    ],
    testimonial: "Mokhmad a su comprendre notre métier et traduire notre expertise en un site professionnel qui reflète vraiment notre savoir-faire. Le CMS nous permet de gérer nos réalisations en toute autonomie.",
    author: "Gérant, IBAPerformance",
    liveUrl: "https://www.ibaperformance.com",
    caseStudyUrl: "#"
  }
];
```

**Step 3 : Vérifier la syntaxe**

Run: `npm run lint`
Expected: pas d'erreurs

**Step 4 : Commit**

```bash
git add src/data/projects.js
git commit -m "feat: add techDecisions to project data"
```

---

### Task 2 : Afficher les décisions techniques dans la carte projet

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1 : Lire le composant actuel**

Run: `cat src/components/Projects.jsx`
Expected: Section PSR → testimonial → actions (pas de techDecisions)

**Step 2 : Ajouter la section techDecisions dans `ProjectCard`**

Dans le composant `ProjectCard`, localiser le commentaire `{/* Testimonial */}` et ajouter le bloc suivant juste **avant** ce commentaire (entre la section PSR et le témoignage) :

```jsx
{/* Tech decisions */}
{project.techDecisions && project.techDecisions.length > 0 && (
  <div style={{
    marginBottom: '1.75rem',
    padding: '1rem 1.25rem',
    background: 'var(--surface-2)',
    borderLeft: '2px solid var(--border-hover)',
  }}>
    <p style={{
      fontSize: '0.68rem',
      color: 'var(--text-dim)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
      marginBottom: '0.6rem',
    }}>
      Décisions techniques
    </p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
      {project.techDecisions.map(({ label, reason }) => (
        <div key={label} style={{ fontSize: '0.82rem', lineHeight: 1.55 }}>
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{label}</strong>
          <span style={{ color: 'var(--text-muted)' }}> — {reason}</span>
        </div>
      ))}
    </div>
  </div>
)}
```

**Step 3 : Vérifier visuellement**

Run: `npm run dev`
Ouvrir http://localhost:5173 → section Projets
Expected: Chaque carte affiche une section "Décisions techniques" avec les labels en gras et les raisons en muted, avant le témoignage

**Step 4 : Vérifier le build**

Run: `npm run build`
Expected: ✓ built in < 2s, aucune erreur

**Step 5 : Commit**

```bash
git add src/components/Projects.jsx
git commit -m "feat: display techDecisions in project cards"
```

---

### Task 3 : Remplacer les différenciateurs 1 et 4

**Files:**
- Modify: `src/data/differentiators.js`

**Step 1 : Remplacer le contenu de `src/data/differentiators.js` par :**

```js
export const differentiators = [
  {
    iconName: "Layers",
    title: "Full ownership du projet",
    description: "Architecture, développement, déploiement, SSL, domaine — vous n'avez pas à coordonner 3 prestataires. Un interlocuteur unique, de l'idée à la mise en ligne."
  },
  {
    iconName: "DollarSign",
    title: "Transparent sur les prix, pas de devis fleuve",
    description: "Vous savez exactement ce que vous payez. Pas de frais cachés découverts à la fin."
  },
  {
    iconName: "MessageSquare",
    title: "Je parle \"business\", pas \"code\"",
    description: "Vous n'avez pas besoin de comprendre React. Vous avez besoin que ça marche et que ça vende."
  },
  {
    iconName: "AlertCircle",
    title: "Transparence sur les blocages",
    description: "Quand quelque chose prend plus de temps que prévu, vous êtes prévenu avant de le découvrir. Pas de mauvaises surprises à la livraison."
  }
];
```

**Step 2 : Vérifier la syntaxe**

Run: `npm run lint`
Expected: pas d'erreurs

**Step 3 : Commit**

```bash
git add src/data/differentiators.js
git commit -m "feat: replace generic differentiators with concrete ones"
```

---

### Task 4 : Mettre à jour l'iconMap dans Differentiators.jsx

**Files:**
- Modify: `src/components/Differentiators.jsx`

**Step 1 : Lire l'import actuel**

Run: `head -5 src/components/Differentiators.jsx`
Expected: `import { Clock, DollarSign, MessageSquare, TrendingUp } from 'lucide-react';`

**Step 2 : Remplacer la ligne d'import et l'iconMap**

Ligne 1 — remplacer :
```jsx
import { Clock, DollarSign, MessageSquare, TrendingUp } from 'lucide-react';
```
par :
```jsx
import { Layers, DollarSign, MessageSquare, AlertCircle } from 'lucide-react';
```

Ligne 4 — remplacer :
```jsx
const iconMap = { Clock, DollarSign, MessageSquare, TrendingUp };
```
par :
```jsx
const iconMap = { Layers, DollarSign, MessageSquare, AlertCircle };
```

**Step 3 : Vérifier visuellement**

Run: `npm run dev`
Ouvrir http://localhost:5173 → section "Pourquoi moi"
Expected:
- Carte 1 : icône Layers, titre "Full ownership du projet"
- Carte 4 : icône AlertCircle, titre "Transparence sur les blocages"
- Cartes 2 et 3 : inchangées

**Step 4 : Vérifier le build**

Run: `npm run build`
Expected: ✓ built sans erreur

**Step 5 : Commit**

```bash
git add src/components/Differentiators.jsx
git commit -m "feat: update iconMap for new differentiators"
```
