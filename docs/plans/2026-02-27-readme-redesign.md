# README Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remplacer le boilerplate Vite par un README professionnel orienté clients potentiels qui visitent le repo GitHub.

**Architecture:** Un seul fichier Markdown (`README.md`) à la racine. Contenu : description du repo, stack justifiée, projets listés, commandes pour lancer en local, liens de contact.

**Tech Stack:** Markdown uniquement.

---

### Task 1 : Écrire le nouveau README.md

**Files:**
- Modify: `README.md`

**Step 1 : Vérifier l'état actuel du fichier**

Run: `head -5 README.md`
Expected: "# React + Vite" (boilerplate Vite à remplacer)

**Step 2 : Remplacer intégralement le contenu**

Écrire le contenu suivant dans `README.md` :

```markdown
# Mokhmad — Portfolio Professionnel

Code source de mon portfolio freelance.
→ **[Voir le portfolio en ligne](https://nmokhmad.com)** *(remplacer par l'URL réelle si différente)*

---

## À propos

Je suis développeur web fullstack freelance. Je construis des applications et sites web qui génèrent des résultats business mesurables pour les PME — de l'idée au déploiement.

## Stack technique

| Technologie | Pourquoi ce choix |
|---|---|
| **React 19** | Composants réutilisables, rendering performant, écosystème mature |
| **Vite 7** | Build < 500ms en dev, HMR instantané — meilleure DX disponible |
| **Tailwind CSS v4** | Styles utilitaires sans feuilles CSS voluminneuses, cohérence garantie |
| **CSS variables custom** | Thème sombre/clair natif sans lib externe, zéro overhead JS |
| **EmailJS** | Formulaire de contact fonctionnel sans backend dédié ni serveur à maintenir |
| **Lucide React** | Icônes SVG optimisées, tree-shakeable, cohérentes visuellement |

## Projets présentés

| Projet | Description | Stack | Lien |
|---|---|---|---|
| **SkillSwap** | Plateforme communautaire d'échange de compétences | Node.js · Express · PostgreSQL · Socket.io | [Voir](https://clownfish-app-hy864.ondigitalocean.app/) |
| **IBAPerformance** | Site vitrine + CMS headless pour spécialiste automobile | React · Sanity · Vercel | [Voir](https://www.ibaperformance.com) |

## Lancer en local

```bash
npm install
npm run dev
```

Le projet tourne sur `http://localhost:5173`.

> Les variables d'environnement EmailJS (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) sont nécessaires pour le formulaire de contact. Sans elles, le formulaire affiche une erreur mais le reste du site fonctionne.

## Contact

- **Email :** [n.mokhmad@gmail.com](mailto:n.mokhmad@gmail.com)
- **LinkedIn :** [Mokhmad Noutsoulkhanov](https://www.linkedin.com/in/mokhmad-noutsoulkhanov-b74a56258/)
- **GitHub :** [@NMokhmad](https://github.com/NMokhmad)
```

**Step 3 : Vérifier le rendu**

Ouvrir `README.md` et vérifier que :
- [ ] La table Stack s'affiche correctement (pas de cellules mal alignées)
- [ ] Les liens sont bien formés (`[texte](url)`)
- [ ] Les blocs de code sont bien délimités par des triple-backticks

**Step 4 : Commit**

```bash
git add README.md
git commit -m "docs: replace Vite boilerplate with professional portfolio README"
```

---

### Task 2 : Commit du design doc

**Files:**
- Add: `docs/plans/2026-02-27-readme-redesign-design.md`
- Add: `docs/plans/2026-02-27-readme-redesign.md`

**Step 1 : Commit**

```bash
git add docs/plans/2026-02-27-readme-redesign-design.md docs/plans/2026-02-27-readme-redesign.md
git commit -m "docs: add README redesign design doc and implementation plan"
```
