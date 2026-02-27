# Design — Profondeur technique & différenciateurs

**Date :** 2026-02-27
**Contexte :** Le portfolio est positionné fullstack généraliste mais manque de profondeur technique visible et de différenciateurs spécifiques.
**Approche retenue :** B — Projets + Différenciateurs (surface minimale, impact maximum)

---

## Section 1 — Projets : ajout de décisions techniques

### Objectif
Chaque carte projet affiche 3–4 décisions techniques avec le *pourquoi* en une ligne. Le client technique comprend immédiatement que les choix sont réfléchis.

### Modification des données (`src/data/projects.js`)

Ajout d'un champ `techDecisions: [{ label, reason }]` sur chaque projet.

**SkillSwap :**
```js
techDecisions: [
  { label: 'Argon2id', reason: 'Hashing mots de passe — résistant aux attaques GPU, standard recommandé en 2024' },
  { label: 'JWT + cookie httpOnly', reason: 'Token inaccessible au JavaScript — protection XSS native' },
  { label: 'PostgreSQL relationnel', reason: 'Intégrité garantie entre profils, compétences, notations et messages' },
  { label: 'DigitalOcean App Platform', reason: 'Déploiement containerisé, SSL automatique, rollback one-click' },
]
```

**IBAPerformance :**
```js
techDecisions: [
  { label: 'Sanity CMS headless', reason: 'Client autonome pour gérer le contenu sans intervention dev' },
  { label: 'Code splitting + lazy loading', reason: 'Score Lighthouse maintenu au-dessus de 90' },
  { label: 'Vercel', reason: 'CDN mondial, preview automatique par commit, zéro config' },
]
```

### Modification du composant (`src/components/Projects.jsx`)

Ajouter une section compacte de tags sous la section PSR, avant le témoignage. Chaque tag affiche : `label — reason` sur une ligne.

Style : petits badges avec fond subtil, cohérents avec le design existant (même palette CSS variables).

---

## Section 2 — Différenciateurs : remplacement cartes 1 et 4

### Objectif
Remplacer 2 cartes génériques par des différenciateurs concrets et vérifiables.

### Modification des données (`src/data/differentiators.js`)

**Carte 1 — Avant :**
```js
{ iconName: "Clock", title: "Livraison rapide, sans compromis qualité", description: "..." }
```

**Carte 1 — Après :**
```js
{
  iconName: "Layers",
  title: "Full ownership du projet",
  description: "Architecture, développement, déploiement, SSL, domaine — vous n'avez pas à coordonner 3 prestataires. Un interlocuteur unique, de l'idée à la mise en ligne."
}
```

**Carte 4 — Avant :**
```js
{ iconName: "TrendingUp", title: "Résultats mesurables", description: "..." }
```

**Carte 4 — Après :**
```js
{
  iconName: "AlertCircle",
  title: "Transparence sur les blocages",
  description: "Quand quelque chose prend plus de temps que prévu, vous êtes prévenu avant de le découvrir. Pas de mauvaises surprises à la livraison."
}
```

**Cartes 2 et 3 : conservées sans modification.**

### Modification du composant (`src/components/Differentiators.jsx`)

Ajouter `Layers` et `AlertCircle` à la `iconMap` en remplacement de `Clock` et `TrendingUp`.

---

## Critères de succès

- Un client technique ouvrant la section Projets voit immédiatement les choix d'auth, de BDD, de déploiement — sans avoir à lire le code
- Les différenciateurs 1 et 4 décrivent des comportements concrets, pas des promesses génériques
- Aucune restructuration visuelle majeure — le design existant est conservé
