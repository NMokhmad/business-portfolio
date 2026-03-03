# Pivot CDI — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transformer le portfolio de messaging freelance en messaging 100% CDI, ciblant des recruteurs tech.

**Architecture:** Modifications de contenu/copy ciblées sur 6 fichiers. Aucune modification de structure ou de design. Le design doc de référence est `docs/plans/2026-03-03-pivot-cdi-design.md`.

**Tech Stack:** React, données dans `src/data/*.js`, composants dans `src/components/*.jsx`

---

### Task 1 : Hero — H1 + eyebrow + description

**Files:**
- Modify: `src/components/Hero.jsx:58-116`

**Step 1 : Modifier l'eyebrow (ligne ~65)**

Remplacer :
```jsx
Développeur Web Fullstack
```
Par :
```jsx
Développeur Fullstack JS · Certifié DWWM · Disponible en CDI
```

**Step 2 : Modifier le H1 (lignes ~79-84)**

Remplacer :
```jsx
<span style={{ display: 'block', fontWeight: 300 }}>Vous avez</span>
<span style={{ display: 'block', fontWeight: 700, fontStyle: 'italic', color: 'var(--gold)' }}>
  une idée.
</span>
<span style={{ display: 'block', fontWeight: 300 }}>Je la transforme</span>
<span style={{ display: 'block', fontWeight: 400, fontStyle: 'italic' }}>en produit.</span>
```
Par :
```jsx
<span style={{ display: 'block', fontWeight: 300 }}>Développeur</span>
<span style={{ display: 'block', fontWeight: 700, fontStyle: 'italic', color: 'var(--gold)' }}>
  Fullstack JS.
</span>
<span style={{ display: 'block', fontWeight: 300 }}>Sécurité backend,</span>
<span style={{ display: 'block', fontWeight: 400, fontStyle: 'italic' }}>disponible en CDI.</span>
```

**Step 3 : Modifier la description (lignes ~113-116)**

Remplacer :
```jsx
Développeur fullstack spécialisé en solutions qui génèrent des{' '}
<strong style={{ color: 'var(--text)', fontWeight: 600 }}>résultats business</strong>.{' '}
Pas de retards. Un interlocuteur unique, de l'idée à la mise en ligne.
```
Par :
```jsx
Certifié DWWM, spécialisé{' '}
<strong style={{ color: 'var(--text)', fontWeight: 600 }}>sécurité backend</strong>.{' '}
Je cherche une équipe où mes compétences React / Node.js / PostgreSQL ajoutent de la valeur dès le premier sprint.
```

**Step 4 : Vérifier visuellement**

Lancer `npm run dev` (ou `bun dev`) et vérifier dans le navigateur que le H1 et la description sont corrects.

**Step 5 : Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat(cdi): pivot hero H1, eyebrow et description vers messaging CDI"
```

---

### Task 2 : Hero — stats

**Files:**
- Modify: `src/components/Hero.jsx:132-136`

**Step 1 : Remplacer les 3 stats**

Remplacer :
```js
{ value: '2–4', unit: ' sem.', label: 'Délai de livraison' },
{ value: '24h', unit: '', label: 'Devis garanti' },
{ value: '30j', unit: '', label: 'Support inclus' },
```
Par :
```js
{ value: '8.5', unit: ' /10', label: 'Audit sécurité' },
{ value: 'DWWM', unit: '', label: 'Certifié' },
{ value: 'Immédiat', unit: '', label: 'Disponibilité' },
```

**Step 2 : Vérifier visuellement**

Les 3 stats doivent s'afficher proprement dans la zone bordée. "DWWM" en Cormorant Garamond bold et "Immédiat" italic doivent rester lisibles. Ajuster `fontSize` si débordement sur mobile.

**Step 3 : Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat(cdi): remplacer stats freelance par métriques candidat CDI dans le hero"
```

---

### Task 3 : Hero — CTAs + badge portrait

**Files:**
- Modify: `src/components/Hero.jsx:173-235`

**Step 1 : Changer le CTA primary en lien téléchargement CV**

Remplacer :
```jsx
<button onClick={scrollToContact} className="btn-gold" style={{ fontSize: '0.82rem' }}>
  Discuter de votre projet <ArrowRight size={16} />
</button>
```
Par :
```jsx
<a
  href="/cv.pdf"
  download
  className="btn-gold"
  style={{ fontSize: '0.82rem', textDecoration: 'none' }}
>
  Télécharger mon CV <ArrowRight size={16} />
</a>
```

**Step 2 : Changer le texte du badge portrait**

Remplacer (ligne ~234) :
```jsx
Disponible
```
Par :
```jsx
Disponible en CDI
```

**Step 3 : Vérifier visuellement**

- Cliquer sur "Télécharger mon CV" → doit déclencher le téléchargement de `/cv.pdf`
- Le badge sous la photo doit afficher "Disponible en CDI" avec le point vert pulsant

Si "Disponible en CDI" déborde du badge (il est `whiteSpace: 'nowrap'`), ajuster le `padding` :
```jsx
padding: '0.4rem 0.75rem',
```

**Step 4 : Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat(cdi): CTA primary → téléchargement CV, badge → 'Disponible en CDI'"
```

---

### Task 4 : Differentiators — ajouter sécurité backend

**Files:**
- Modify: `src/data/differentiators.js`

**Step 1 : Remplacer le différenciateur #4**

Remplacer :
```js
{
  iconName: "TrendingUp",
  title: "Vision produit",
  description: "Je comprends l'impact business de chaque tâche. Je ne code pas juste ce qui est demandé, je propose des améliorations."
}
```
Par :
```js
{
  iconName: "Shield",
  title: "Sécurité backend intégrée",
  description: "Argon2, protection contre les timing attacks, sessions sécurisées. SkillSwap a obtenu un audit indépendant à 8.5/10 — un niveau rare pour un profil junior."
}
```

**Step 2 : Vérifier visuellement**

La section "Ce qui me différencie" doit maintenant montrer sécurité en #4. Le design (manifesto list avec hover gold) s'applique sans modification de composant.

**Step 3 : Commit**

```bash
git add src/data/differentiators.js
git commit -m "feat(cdi): remplacer 'Vision produit' par 'Sécurité backend intégrée' dans les différenciateurs"
```

---

### Task 5 : Projets — SkillSwap résultat + décisions techniques

**Files:**
- Modify: `src/data/projects.js`

**Step 1 : Mettre à jour le champ `result` de SkillSwap**

Remplacer :
```js
result: "Site ultra-rapide (chargement en moins d'1 seconde), aucun décalage visuel à l'affichage, et une navigation fluide sans aucun temps de blocage.",
```
Par :
```js
result: "Audit sécurité indépendant : 8.5/10 (Argon2, protection timing attacks, sessions sécurisées). Site ultra-rapide : chargement < 1 seconde, navigation sans blocage.",
```

**Step 2 : Ajouter le champ `techDecisions` à SkillSwap**

Juste après la ligne `result`, ajouter :
```js
techDecisions: [
  { label: "Argon2 (hachage)", reason: "Résistant aux attaques GPU/ASIC — recommandation OWASP 2024, supérieur à bcrypt pour les mots de passe." },
  { label: "Comparaison temps constant", reason: "Prévient l'énumération d'utilisateurs via timing attacks sur le formulaire de login." },
  { label: "Socket.io (temps réel)", reason: "Messagerie WebSocket avec fallback polling pour la compatibilité navigateurs anciens." },
],
```

**Step 3 : Vérifier visuellement**

Dans la section Projets, la carte SkillSwap doit afficher :
- Le résultat avec "8.5/10" en gras (le champ est `bold: true`)
- Le bloc "Décisions techniques" avec les 3 entrées (ce bloc est conditionnel : `project.techDecisions && project.techDecisions.length > 0`)

**Step 4 : Commit**

```bash
git add src/data/projects.js
git commit -m "feat(cdi): ajouter audit 8.5/10 et décisions techniques sécurité dans SkillSwap"
```

---

### Task 6 : Problems — pivot messaging recruteur

**Files:**
- Modify: `src/data/problems.js`
- Modify: `src/components/Problems.jsx:22-78`

**Step 1 : Réécrire les 4 items dans problems.js**

Remplacer le contenu entier du tableau :
```js
export const problems = [
  {
    emoji: "🎯",
    problem: "Vous cherchez un junior opérationnel dès le premier sprint",
    solution: "Commits atomiques, code lisible, PR documentées. Je m'intègre sans 3 mois de mise à niveau."
  },
  {
    emoji: "🔒",
    problem: "Vous ne voulez pas gérer des vulnérabilités introduites par un junior",
    solution: "Argon2, protection timing attacks, sessions sécurisées. Audit SkillSwap : 8.5/10. La sécurité est un réflexe, pas une case à cocher."
  },
  {
    emoji: "⚡",
    problem: "Vous avez besoin d'un dev fullstack, pas de deux spécialistes",
    solution: "React + Node.js + PostgreSQL — je prends une feature de bout en bout sans faire la navette entre équipes."
  },
  {
    emoji: "🤝",
    problem: "Vous cherchez quelqu'un qui s'intègre sans supervision constante",
    solution: "Documentation, standups, async, code reviews — je m'adapte à votre process dès le premier sprint."
  }
];
```

**Step 2 : Mettre à jour l'eyebrow dans Problems.jsx**

Remplacer (ligne ~22) :
```jsx
Vos situations
```
Par :
```jsx
Vos attentes
```

**Step 3 : Mettre à jour le texte du CTA bas de section dans Problems.jsx**

Remplacer :
```jsx
Si vous vous reconnaissez dans l'un de ces scénarios,{' '}
<strong style={{ color: 'var(--text)', fontWeight: 600 }}>parlons-en 15 minutes. Sans engagement.</strong>
```
Par :
```jsx
Si l'un de ces points vous parle,{' '}
<strong style={{ color: 'var(--text)', fontWeight: 600 }}>échangeons 20 minutes. Sans engagement.</strong>
```

**Step 4 : Mettre à jour le bouton CTA dans Problems.jsx**

Remplacer :
```jsx
Réserver un appel découverte gratuit <ArrowRight size={16} />
```
Par :
```jsx
Prendre contact <ArrowRight size={16} />
```

**Step 5 : Vérifier visuellement**

La section doit maintenant afficher 4 lignes problem/solution ciblant des recruteurs. Le layout 2 colonnes (italic serif | solution) doit être intact.

**Step 6 : Commit**

```bash
git add src/data/problems.js src/components/Problems.jsx
git commit -m "feat(cdi): pivot section Problems — problèmes clients → attentes recruteurs"
```

---

### Task 7 : Navbar — CTA

**Files:**
- Modify: `src/components/Navbar.jsx:57-144`

**Step 1 : Changer le CTA desktop (ligne ~57)**

Remplacer :
```jsx
<button onClick={scrollToContact} className="btn-gold" style={{ padding: '0.6rem 1.4rem' }}>
  Démarrer un projet
</button>
```
Par :
```jsx
<button onClick={scrollToContact} className="btn-gold" style={{ padding: '0.6rem 1.4rem' }}>
  Me contacter
</button>
```

**Step 2 : Changer le CTA mobile (ligne ~139)**

Remplacer :
```jsx
<button
  onClick={scrollToContact}
  className="btn-gold"
  style={{ marginTop: '1rem', justifyContent: 'center' }}
>
  Démarrer un projet
</button>
```
Par :
```jsx
<button
  onClick={scrollToContact}
  className="btn-gold"
  style={{ marginTop: '1rem', justifyContent: 'center' }}
>
  Me contacter
</button>
```

**Step 3 : Vérifier visuellement**

Desktop navbar : bouton gold dit "Me contacter". Menu mobile : même texte.

**Step 4 : Commit**

```bash
git add src/components/Navbar.jsx
git commit -m "feat(cdi): CTA navbar 'Démarrer un projet' → 'Me contacter'"
```

---

### Task 8 : Vérification finale

**Step 1 : Relire le portfolio comme un recruteur**

Ouvrir `http://localhost:5173` et répondre mentalement à ces questions :
1. En 5 secondes : est-ce que je comprends que c'est un candidat CDI fullstack JS spécialisé sécurité ? → Doit être OUI
2. Est-ce que l'audit 8.5/10 est visible dans au moins 3 endroits ? → Stats hero + differentiators + résultat SkillSwap
3. Est-ce que je vois le bouton CV immédiatement ? → Doit être OUI (hero, CTA primary)
4. Est-ce qu'un CTA ou une stat évoque une prestation freelance ? → Doit être NON

**Step 2 : Vérifier la cohérence mobile**

Passer en vue mobile (DevTools 375px). Vérifier que le badge "Disponible en CDI" ne déborde pas.

**Step 3 : Commit final si ajustements mineurs**

```bash
git add -p   # ajouter seulement les ajustements visuels
git commit -m "fix(cdi): ajustements visuels post-pivot CDI"
```
