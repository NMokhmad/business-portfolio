# Hero Rewrite Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Réécrire 4 textes dans le Hero pour parler aux deux cibles (sites + applications) et supprimer les incohérences.

**Architecture:** Modifications textuelles uniquement dans `src/components/Hero.jsx`. 4 Edit ciblés, aucune restructuration du composant.

**Tech Stack:** React JSX (éditions de strings uniquement)

---

### Task 1 : Réécrire les 4 textes du Hero

**Files:**
- Modify: `src/components/Hero.jsx`

**Step 1 : Lire le fichier actuel**

Run: `head -110 src/components/Hero.jsx`
Expected: voir les 4 éléments à modifier (h1, subhead, description, badges)

**Step 2 : Edit 1 — Headline (h1)**

Remplacer :
```jsx
          Votre site vous fait{' '}
          <span style={{ color: 'var(--red)', fontStyle: 'italic' }}>perdre des clients</span>
          {' '}?
```
par :
```jsx
          Vous avez une idée.{' '}
          <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Je la transforme en produit.</span>
```

**Step 3 : Edit 2 — Subheading**

Remplacer :
```jsx
          Je transforme les visiteurs en clients payants.
```
par :
```jsx
          Sites vitrines, applications, MVP — de la première ligne de code à la mise en ligne.
```

**Step 4 : Edit 3 — Description**

Remplacer :
```jsx
          Développeur web spécialisé en solutions qui génèrent des{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>résultats business</strong>.{' '}
          Pas de jargon. Pas de retards. Juste des sites qui travaillent pour vous 24/7.
```
par :
```jsx
          Développeur fullstack spécialisé en solutions qui génèrent des{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>résultats business</strong>.{' '}
          Pas de retards. Un interlocuteur unique, de l'idée à la mise en ligne.
```

**Step 5 : Edit 4 — Badge "Satisfait ou remboursé"**

Remplacer :
```jsx
            'Satisfait ou remboursé',
```
par :
```jsx
            'Devis sous 24h',
```

**Step 6 : Vérifier le build**

Run: `npm run build`
Expected: `✓ built` sans erreur

**Step 7 : Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat: rewrite hero copy for dual audience (sites + apps)"
```
