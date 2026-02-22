# CDI Portfolio Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transformer le portfolio freelance en portfolio orienté recruteurs CDI, en gardant l'identité visuelle dark/or, sur la branche `feature/cdi-portfolio`.

**Architecture:** Modifications de contenu (data files) et de composants existants. Aucun changement de routing ni d'infrastructure. Une nouvelle section Skills remplace la section Problems.

**Tech Stack:** React 18, Vite, CSS variables, Lucide React, EmailJS

---

## Mise en place

### Task 0 : Créer la branche feature

**Step 1 : Créer et basculer sur la branche**

```bash
git checkout -b feature/cdi-portfolio
```

Expected: `Switched to a new branch 'feature/cdi-portfolio'`

---

## Données (data files)

### Task 1 : Mettre à jour `differentiators.js`

**Files:**
- Modify: `src/data/differentiators.js`

**Step 1 : Remplacer le contenu entier du fichier**

```js
export const differentiators = [
  {
    iconName: "Code2",
    title: "Stack maîtrisée de bout en bout",
    description: "React, Node.js, PostgreSQL — je prends en charge tout le cycle de vie d'une feature, du composant à l'API."
  },
  {
    iconName: "Users",
    title: "Mindset équipe",
    description: "Je documente, je fais des code reviews, je communique en standup ou en async. Je m'adapte à votre process."
  },
  {
    iconName: "Zap",
    title: "Delivery fiable",
    description: "J'estime correctement, je livre dans les temps, je préviens dès qu'un risque apparaît. Pas de surprises."
  },
  {
    iconName: "TrendingUp",
    title: "Vision produit",
    description: "Je comprends l'impact business de chaque tâche. Je ne code pas juste ce qui est demandé, je propose des améliorations."
  }
];
```

**Step 2 : Vérifier que `Differentiators.jsx` importe `Code2` et `Users` depuis lucide-react**

Ouvrir `src/components/Differentiators.jsx` et vérifier la map iconName → composant Lucide.
Si `Code2` et `Users` ne sont pas gérés, les ajouter dans le mapping.

**Step 3 : Commit**

```bash
git add src/data/differentiators.js
git commit -m "feat(cdi): update differentiators for employer audience"
```

---

### Task 2 : Créer `skills.js`

**Files:**
- Create: `src/data/skills.js`

**Step 1 : Créer le fichier**

```js
export const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "CSS / Tailwind", "Vite"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST API", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Outils & DevOps",
    skills: ["Git / GitHub", "Docker", "Vercel", "DigitalOcean", "Linux"]
  },
  {
    category: "Méthodo",
    skills: ["Agile / Scrum", "Code review", "Figma", "Notion", "Tests"]
  }
];
```

**Step 2 : Commit**

```bash
git add src/data/skills.js
git commit -m "feat(cdi): add skills data file"
```

---

### Task 3 : Mettre à jour `process.js`

**Files:**
- Modify: `src/data/process.js`

**Step 1 : Remplacer le contenu entier**

```js
export const processSteps = [
  {
    step: "1",
    title: "Comprendre",
    details: [
      "Je lis les tickets, je pose les bonnes questions avant de coder",
      "Je clarifie les critères d'acceptation et les cas limites"
    ]
  },
  {
    step: "2",
    title: "Concevoir",
    details: [
      "Je découpe la feature en étapes logiques et j'identifie les risques",
      "Je propose une approche claire avant de démarrer"
    ]
  },
  {
    step: "3",
    title: "Coder",
    details: [
      "Branche dédiée, commits atomiques et clairs",
      "Code lisible, commenté là où c'est nécessaire"
    ]
  },
  {
    step: "4",
    title: "Tester",
    details: [
      "Tests unitaires et d'intégration sur les parties critiques",
      "Je vérifie les cas d'erreur, pas seulement le happy path"
    ]
  },
  {
    step: "5",
    title: "Livrer",
    details: [
      "Pull request avec description claire, lien vers le ticket",
      "Je suis disponible pour répondre aux questions en code review"
    ]
  },
  {
    step: "6",
    title: "Itérer",
    details: [
      "Je prends en compte les retours et je les applique rapidement",
      "Je tire des enseignements pour les prochains sprints"
    ]
  }
];
```

**Step 2 : Commit**

```bash
git add src/data/process.js
git commit -m "feat(cdi): update process steps for developer workflow"
```

---

### Task 4 : Mettre à jour `faq.js`

**Files:**
- Modify: `src/data/faq.js`

**Step 1 : Remplacer le contenu entier**

```js
export const faqItems = [
  {
    question: "Quel est ton niveau d'expérience ?",
    answer: "Je suis développeur fullstack avec une expérience en React, Node.js et PostgreSQL. J'ai conçu et livré plusieurs projets de bout en bout — du design de la BDD à la mise en production. Je me situe en profil junior/médior avec une forte capacité d'autonomie."
  },
  {
    question: "Tu as déjà travaillé en équipe ?",
    answer: "Oui. J'ai travaillé en équipe sur des projets collaboratifs avec Git, pull requests, code reviews et communication async. Je m'adapte aussi bien à des équipes Agile (Scrum, Kanban) qu'à des structures plus souples."
  },
  {
    question: "Tu es disponible quand ?",
    answer: "Je suis disponible rapidement — contactez-moi pour préciser la date de démarrage souhaitée. Je peux m'adapter à vos délais."
  },
  {
    question: "Remote, hybride ou présentiel ?",
    answer: "Je suis ouvert aux trois formats. Je suis autonome et efficace en remote, et j'apprécie les moments en présentiel pour les phases de lancement et de collaboration intensive."
  },
  {
    question: "Quelle est ta stack principale ?",
    answer: "Principalement React côté front, Node.js / Express côté back, PostgreSQL en base de données. Je travaille aussi avec Next.js, MongoDB, Docker et j'apprends vite de nouvelles technologies."
  },
  {
    question: "Tu as un profil GitHub ou des projets à voir ?",
    answer: "Oui, mon GitHub est accessible via le bouton en haut de page. Vous trouverez le code source de mes projets principaux, dont SkillSwap (plateforme full-stack) et IBA Performance (site avec CMS headless)."
  }
];
```

**Step 2 : Commit**

```bash
git add src/data/faq.js
git commit -m "feat(cdi): update FAQ for recruiter audience"
```

---

### Task 5 : Mettre à jour `projects.js` — ajouter les stacks

**Files:**
- Modify: `src/data/projects.js`

**Step 1 : Ajouter un champ `stack` à chaque projet**

```js
export const projects = [
  {
    title: "SkillSwap — Plateforme d'échange de compétences",
    image: "/skillswap.webp",
    context: "Projet personnel",
    stack: ["Node.js", "Express", "PostgreSQL", "React", "Socket.io"],
    problem: "Les développeurs et créatifs galèrent à trouver des partenaires complémentaires pour collaborer ou échanger des compétences, sans passer par des plateformes freelance coûteuses.",
    solution: "Une plateforme communautaire full-stack (Node.js, Express, PostgreSQL) avec profils, système de notation 5 étoiles, messagerie privée en temps réel, recherche par compétence et flux d'onboarding guidé.",
    result: "Site ultra-rapide (chargement en moins d'1 seconde), aucun décalage visuel à l'affichage, et une navigation fluide sans aucun temps de blocage.",
    testimonial: "SkillSwap m'a permis de trouver un développeur back-end pour mon projet en moins d'une semaine. Le système de notation aide vraiment à identifier les bons profils.",
    author: "Utilisateur bêta",
    liveUrl: "https://clownfish-app-hy864.ondigitalocean.app/",
    caseStudyUrl: "#"
  },
  {
    title: "IBA Performance — Site vitrine & portfolio automobile",
    image: "/ibaperformance.webp",
    context: "Client",
    stack: ["React", "Sanity CMS", "Vite", "Vercel"],
    problem: "Un spécialiste de la reprogrammation moteur avec 15 ans d'expérience et 500+ véhicules préparés, mais aucune présence en ligne pour générer des leads qualifiés.",
    solution: "Création d'un site React avec CMS headless Sanity, portfolio filtrable (11 catégories), blog SEO, formulaire de contact, et optimisations performances (code splitting, lazy loading, analytics Vercel).",
    result: "Site rapide (chargement en 1 seconde), parfaitement référencé sur Google, et un client 100% autonome pour gérer son contenu sans faire appel à un développeur.",
    testimonial: "Mokhmad a su comprendre notre métier et traduire notre expertise en un site professionnel qui reflète vraiment notre savoir-faire. Le CMS nous permet de gérer nos réalisations en toute autonomie.",
    author: "Gérant, IBAPerformance",
    liveUrl: "https://www.ibaperformance.com",
    caseStudyUrl: "#"
  }
];
```

**Step 2 : Commit**

```bash
git add src/data/projects.js
git commit -m "feat(cdi): add stack badges and context to projects data"
```

---

## Composants

### Task 6 : Mettre à jour `Hero.jsx`

**Files:**
- Modify: `src/components/Hero.jsx`

**Step 1 : Modifier le Hero**

Changements à faire dans `src/components/Hero.jsx` :

- H1 ligne 69 : remplacer le texte par `Développeur Fullstack`
  (supprimer le `<span>` rouge et le style italic)

- Sous-titre ligne 85 : remplacer par :
  `Je conçois et livre des applications web robustes, du front React au back Node.js.`
  (supprimer la couleur `var(--gold)` et le style italic — garder la taille)

- Description lignes 100-103 : remplacer par :
  `Disponible pour un{' '}<strong style={{ color: 'var(--text)', fontWeight: 600 }}>CDI</strong>{' '}— j'apporte une vision technique claire et un sens des priorités business.`

- CTA primaire ligne 110 : remplacer par :
  ```jsx
  <a href="/cv.pdf" download className="btn-gold" style={{ fontSize: '0.82rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    Télécharger mon CV <ArrowRight size={16} />
  </a>
  ```

- CTA secondaire ligne 113 : garder mais changer le texte en `Me contacter`

- Trust badges lignes 128-131 : remplacer le tableau par :
  ```js
  ['React · Node.js · PostgreSQL', 'GitHub actif', 'Disponible pour CDI']
  ```
  Et remplacer les `<CheckCircle>` par des icônes neutres, ou garder les `CheckCircle` — au choix visuel.

- Supprimer l'import `ArrowRight` s'il n'est plus utilisé, ou le garder si le lien CV l'utilise.

**Step 2 : Vérifier visuellement dans le navigateur**

```bash
npm run dev
```

Ouvrir http://localhost:5173 et vérifier le Hero.

**Step 3 : Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat(cdi): rewrite Hero for recruiter audience"
```

---

### Task 7 : Créer `Skills.jsx` et mettre à jour `App.jsx`

**Files:**
- Create: `src/components/Skills.jsx`
- Modify: `src/App.jsx`

**Step 1 : Créer `src/components/Skills.jsx`**

```jsx
import { skillGroups } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '6rem 2rem' }}>
      <hr className="section-sep" style={{ marginBottom: '6rem' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Compétences</span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem' }}
          >
            Stack & outils
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Les technologies que j'utilise au quotidien, du prototypage à la mise en production.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '1.75rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: '1.25rem',
                }}
              >
                {group.category}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.35rem 0.75rem',
                      border: '1px solid var(--border)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      background: 'var(--surface-2)',
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
```

**Step 2 : Mettre à jour `src/App.jsx`**

- Remplacer `import Problems from './components/Problems';` par `import Skills from './components/Skills';`
- Remplacer `<Problems darkMode={darkMode} scrollToContact={scrollToContact} />` par `<Skills />`

**Step 3 : Commit**

```bash
git add src/components/Skills.jsx src/App.jsx
git commit -m "feat(cdi): replace Problems section with Skills & Stack"
```

---

### Task 8 : Mettre à jour `Differentiators.jsx` — icônes `Code2` et `Users`

**Files:**
- Modify: `src/components/Differentiators.jsx`

**Step 1 : Lire le fichier pour voir le mapping d'icônes actuel**

**Step 2 : Ajouter `Code2` et `Users` dans les imports et le mapping si absents**

Chercher le pattern :
```js
const iconMap = { Clock: Clock, DollarSign: DollarSign, ... }
```
ou équivalent, et y ajouter :
```js
Code2, Users
```

**Step 3 : Commit**

```bash
git add src/components/Differentiators.jsx
git commit -m "feat(cdi): add Code2 and Users icons to Differentiators"
```

---

### Task 9 : Mettre à jour `Process.jsx` — titre de section

**Files:**
- Modify: `src/components/Process.jsx`

**Step 1 : Lire le fichier**

**Step 2 : Modifier le titre de la section**

Chercher le titre H2 de la section (probablement "Mon process" ou similaire) et le remplacer par :
`Ma façon de travailler`

Et le sous-titre par quelque chose du style :
`Comment je travaille au quotidien, du ticket à la mise en production.`

**Step 3 : Commit**

```bash
git add src/components/Process.jsx
git commit -m "feat(cdi): update Process section title for developer workflow"
```

---

### Task 10 : Mettre à jour `Projects.jsx` — afficher stack et contexte

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1 : Lire le fichier pour comprendre la structure des cards**

**Step 2 : Ajouter l'affichage des badges stack**

Dans chaque project card, après le titre, ajouter un bloc :
```jsx
{/* Stack badges */}
{project.stack && (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
    {project.stack.map((tech) => (
      <span
        key={tech}
        style={{
          padding: '0.25rem 0.6rem',
          border: '1px solid var(--border)',
          fontSize: '0.72rem',
          color: 'var(--gold)',
          background: 'var(--gold-glow)',
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {tech}
      </span>
    ))}
  </div>
)}
```

**Step 3 : Ajouter l'affichage du contexte (projet perso / client)**

Juste après le titre du projet, ajouter :
```jsx
{project.context && (
  <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
    {project.context}
  </p>
)}
```

**Step 4 : Commit**

```bash
git add src/components/Projects.jsx
git commit -m "feat(cdi): display tech stack badges and context in Projects"
```

---

### Task 11 : Mettre à jour `Contact.jsx`

**Files:**
- Modify: `src/components/Contact.jsx`

**Step 1 : Modifier le titre de la section**

Ligne ~52 : remplacer `Prêt à transformer votre idée ?` par `Discutons de votre besoin`

**Step 2 : Remplacer les steps (colonne gauche)**

Remplacer le tableau `steps` par :
```js
const steps = [
  'Vous remplissez le formulaire (30 secondes)',
  'Je vous réponds sous 24h',
  'On échange 15–30 min pour se découvrir',
  'Si ça matche, on avance ensemble',
];
```

**Step 3 : Remplacer les trust badges**

Remplacer :
```js
['Réponse sous 24h garantie', 'Appel découverte 100% gratuit', 'Aucune obligation']
```
par :
```js
['Réponse sous 24h', 'Appel découverte gratuit', 'Aucune obligation']
```

**Step 4 : Modifier le formulaire**

- Changer le label "Votre projet" → `Votre message`
- Changer le placeholder → `Présentez-vous, votre contexte, ce que vous cherchez…`
- Supprimer le champ "Budget estimé" (le `<select>` budget) entier
- Mettre à jour le `formData` initial : supprimer le champ `budget`
- Mettre à jour le handler onChange correspondant

**Step 5 : Changer le texte du bouton submit**

Remplacer `Démarrer mon projet` par `Envoyer mon message`

**Step 6 : Ajouter le bouton CV PDF au-dessus des icônes sociales**

Juste avant le bloc des icônes sociales (ligne ~98), ajouter :
```jsx
<div style={{ marginBottom: '1.5rem' }}>
  <a
    href="/cv.pdf"
    download
    className="btn-outline"
    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', textDecoration: 'none' }}
  >
    Télécharger mon CV (PDF)
  </a>
</div>
```

**Step 7 : Supprimer le bloc "urgency" (P.S.)**

Supprimer le `<div>` avec le texte "Mon agenda se remplit vite..." (lignes ~223-234).

**Step 8 : Commit**

```bash
git add src/components/Contact.jsx
git commit -m "feat(cdi): update Contact section for recruiter (remove budget, add CV download)"
```

---

### Task 12 : Mettre à jour `Navbar.jsx`

**Files:**
- Modify: `src/components/Navbar.jsx`

**Step 1 : Remplacer les labels des boutons**

- "Démarrer un projet" (desktop, ligne ~25) → `Me contacter`
- "Démarrer un projet" (mobile, ligne ~107) → `Me contacter`

**Step 2 : Ajouter un lien GitHub dans la navbar desktop**

Après les liens de navigation et avant le bouton CTA, ajouter :
```jsx
<a
  href="https://github.com/NMokhmad"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-link"
  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}
  aria-label="GitHub"
>
  <Github size={15} /> GitHub
</a>
```
Ajouter `Github` dans les imports lucide-react.

**Step 3 : Mettre à jour le label nav "Résultats" → "Projets"** (optionnel, plus clair pour un recruteur)

Dans les deux tableaux de nav items (desktop et mobile), changer `label: 'Résultats'` → `label: 'Projets'`

**Step 4 : Commit**

```bash
git add src/components/Navbar.jsx
git commit -m "feat(cdi): update Navbar CTA and add GitHub link"
```

---

### Task 13 : Mettre à jour `Footer.jsx`

**Files:**
- Modify: `src/components/Footer.jsx`

**Step 1 : Mettre à jour la tagline**

Ligne ~24 : remplacer :
`Développeur web fullstack — Je transforme vos idées en solutions qui génèrent des résultats.`
par :
`Développeur Fullstack — React · Node.js · PostgreSQL · Disponible pour un CDI.`

**Step 2 : Ajouter des icônes sociales dans le footer**

Dans le bloc Brand (après la tagline), ajouter :
```jsx
import { Github, Linkedin } from 'lucide-react';

// Après la tagline :
<div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
  {[
    { href: 'https://github.com/NMokhmad', icon: <Github size={16} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/mokhmad-noutsoulkhanov-b74a56258/', icon: <Linkedin size={16} />, label: 'LinkedIn' },
  ].map(({ href, icon, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '36px', height: '36px',
        border: '1px solid var(--border)',
        color: 'var(--text-muted)',
        textDecoration: 'none',
        transition: 'border-color 0.2s, color 0.2s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
    >
      {icon}
    </a>
  ))}
</div>
```

**Step 3 : Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat(cdi): update Footer tagline and add social links"
```

---

## Finalisation

### Task 14 : Vérification visuelle complète

**Step 1 : Lancer le serveur de dev**

```bash
npm run dev
```

**Step 2 : Parcourir toutes les sections et vérifier**

Checklist visuelle :
- [ ] Hero : titre "Développeur Fullstack", CTA CV, badges stack/CDI
- [ ] Differentiators : 4 cards orientées équipe (icônes Code2, Users, Zap, TrendingUp)
- [ ] Skills : 4 catégories avec badges de technos
- [ ] Projects : badges stack colorés en or, contexte "Client"/"Projet personnel"
- [ ] Process : 6 étapes dev (Comprendre → Itérer)
- [ ] Testimonials : inchangé
- [ ] FAQ : 6 questions recruteur
- [ ] Contact : formulaire sans budget, bouton CV PDF, pas de P.S. urgency
- [ ] Footer : tagline CDI, icônes GitHub + LinkedIn

**Step 3 : Vérifier en mode clair (light mode)**

Cliquer sur le bouton soleil/lune et vérifier que tout est lisible.

**Step 4 : Vérifier le responsive mobile**

Réduire la fenêtre à ~375px et vérifier les sections Skills et Projects.

---

### Task 15 : Build de production et commit final

**Step 1 : Build**

```bash
npm run build
```

Expected : build réussi sans erreurs dans `dist/`

**Step 2 : Commit final si tout est OK**

```bash
git add -A
git commit -m "feat(cdi): complete CDI portfolio transformation"
```

---

## Note : CV PDF

Déposer manuellement le fichier `cv.pdf` dans le dossier `public/` pour que le bouton "Télécharger mon CV" fonctionne :

```
public/cv.pdf
```

Sans ce fichier, le bouton téléchargera une 404. Ce n'est pas bloquant pour le développement.
