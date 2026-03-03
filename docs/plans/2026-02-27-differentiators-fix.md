# Differentiators Fix Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Corriger la card 1 (description qui répète le Hero) et remplacer la card 3 (contradictoire avec les décisions techniques) dans la section différenciateurs.

**Architecture:** 2 fichiers touchés — données (`differentiators.js`) puis composant (`Differentiators.jsx`). Aucune restructuration visuelle.

**Tech Stack:** React JSX, Lucide React (`Code2` remplace `MessageSquare`)

---

### Task 1 : Mettre à jour les données différenciateurs

**Files:**
- Modify: `src/data/differentiators.js`

**Step 1 : Lire le fichier actuel**

Run: `cat src/data/differentiators.js`
Expected: 4 cards dont card 1 avec `iconName: "Layers"` et card 3 avec `iconName: "MessageSquare"`

**Step 2 : Remplacer le contenu intégral par :**

```js
export const differentiators = [
  {
    iconName: "Layers",
    title: "Full ownership du projet",
    description: "Architecture, développement, déploiement, SSL, domaine — je gère l'ensemble. Vous ne perdez pas de temps à coordonner un designer, un dev back et un hébergeur."
  },
  {
    iconName: "DollarSign",
    title: "Transparent sur les prix, pas de devis fleuve",
    description: "Vous savez exactement ce que vous payez. Pas de frais cachés découverts à la fin."
  },
  {
    iconName: "Code2",
    title: "Code maintenable, pas jetable",
    description: "Je livre du code qu'un autre développeur peut reprendre, faire évoluer ou auditer. Pas un prototype qui tient par miracle."
  },
  {
    iconName: "AlertCircle",
    title: "Transparence sur les blocages",
    description: "Quand quelque chose prend plus de temps que prévu, vous êtes prévenu avant de le découvrir. Pas de mauvaises surprises à la livraison."
  }
];
```

**Step 3 : Vérifier la syntaxe**

Run: `npm run lint`
Expected: aucune erreur

**Step 4 : Commit**

```bash
git add src/data/differentiators.js
git commit -m "feat: fix differentiators — card 1 description and replace card 3"
```

---

### Task 2 : Mettre à jour l'iconMap dans Differentiators.jsx

**Files:**
- Modify: `src/components/Differentiators.jsx`

**Step 1 : Lire les 5 premières lignes**

Run: `head -5 src/components/Differentiators.jsx`
Expected: `import { Layers, DollarSign, MessageSquare, AlertCircle, ArrowRight } from 'lucide-react';`

**Step 2 : Edit 1 — remplacer la ligne d'import**

Remplacer :
```jsx
import { Layers, DollarSign, MessageSquare, AlertCircle, ArrowRight } from 'lucide-react';
```
par :
```jsx
import { Layers, DollarSign, Code2, AlertCircle, ArrowRight } from 'lucide-react';
```

**Step 3 : Edit 2 — remplacer l'iconMap**

Remplacer :
```jsx
const iconMap = { Layers, DollarSign, MessageSquare, AlertCircle };
```
par :
```jsx
const iconMap = { Layers, DollarSign, Code2, AlertCircle };
```

**Step 4 : Vérifier le build**

Run: `npm run build`
Expected: `✓ built` sans erreur ni warning

**Step 5 : Commit**

```bash
git add src/components/Differentiators.jsx
git commit -m "feat: swap MessageSquare for Code2 icon in differentiators"
```
