# Design — Portfolio CDI

**Date** : 2026-02-22
**Branche** : `feature/cdi-portfolio`
**Contexte** : Adapter le portfolio freelance (orienté acquisition clients) en un portfolio destiné à des recruteurs pour un CDI Développeur Fullstack.

---

## Objectif

Repositionner le portfolio de "outil de vente freelance" à "vitrine pour recruteurs", en gardant l'identité visuelle (dark mode, or, style premium) mais en changeant la structure et le wording pour répondre aux attentes d'un employeur.

---

## Stack technique actuelle

- React + Vite
- CSS variables (dark/light mode)
- Données dans `src/data/*.js`
- Composants dans `src/components/`

---

## Sections — Modifications par section

### 1. Hero

**Modifications :**
- H1 : "Développeur Fullstack" (neutre, professionnel)
- Sous-titre : "Je conçois et livre des applications web robustes, du front React au back Node.js."
- Description : "Disponible pour un CDI — j'apporte une vision technique claire et un sens des priorités business."
- CTA primaire : "Télécharger mon CV" + "Me contacter"
- Trust badges : remplacement des badges freelance par → lien GitHub | stack principale | disponibilité CDI

### 2. Differentiators → "Ce que j'apporte à une équipe"

**Modifications :**
Remplacer le message freelance (prix, délais, business-talk) par 4 cards orientées employeur :

| Icône | Titre | Description |
|-------|-------|-------------|
| Code2 | Stack maîtrisée de bout en bout | React, Node.js, PostgreSQL — je prends en charge tout le cycle de vie d'une feature |
| Users | Mindset équipe | Je documente, je fais des code reviews, je communique en standup ou en async |
| Zap | Delivery fiable | J'estime correctement, je livre dans les temps, je préviens dès qu'un risque apparaît |
| TrendingUp | Vision produit | Je comprends l'impact business de chaque tâche, pas seulement le code |

**Fichier** : `src/data/differentiators.js`

### 3. Problems → Skills & Stack (section remplacée)

**Modifications :**
Supprimer la section Problems (douleurs client freelance) et la remplacer par une section Skills visuels.

Structure :
- **Technique** : grille de badges pour React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Git, Docker, Vercel, DigitalOcean
- **Outils & méthodo** : Figma, Notion, GitHub, Agile/Scrum

**Fichiers** :
- Supprimer `src/data/problems.js` (ou garder mais ne pas utiliser)
- Créer `src/data/skills.js`
- Remplacer `src/components/Problems.jsx` par `src/components/Skills.jsx`
- Mettre à jour `src/App.jsx`

### 4. Projects (ajustements mineurs)

**Modifications :**
- Afficher les technologies utilisées sous forme de badges (React, Node.js, PostgreSQL, etc.)
- Ajouter une ligne "Contexte" : projet personnel ou client
- Le fond reste identique (problem/solution/result)

**Fichier** : `src/data/projects.js` + `src/components/Projects.jsx`

### 5. Process → "Ma façon de travailler"

**Modifications :**
Remplacer le process freelance (Brief → Devis → Livraison) par un process développeur :

```
Comprendre → Concevoir → Coder → Tester → Livrer → Itérer
```

Description de chaque étape orientée équipe : lecture de tickets, création de branche, PR, code review, merge, monitoring.

**Fichiers** : `src/data/process.js` + `src/components/Process.jsx`

### 6. Testimonials (inchangé)

Pas de modification — social proof valide pour les recruteurs aussi.

### 7. FAQ (adapter les questions)

**Modifications :**
Remplacer les questions client freelance par des questions recruteur :

- "Quel est ton niveau d'expérience ?"
- "Tu as travaillé en équipe ?"
- "Tu es disponible quand ?"
- "Tu peux travailler en remote / hybride ?"
- "Tu es junior, médior ou senior ?"

**Fichier** : `src/data/faq.js`

### 8. Contact (ajouts)

**Modifications :**
- Garder le formulaire existant
- Ajouter un bouton "Télécharger mon CV (PDF)" — lien vers un fichier `/public/cv.pdf`
- Afficher GitHub + LinkedIn avec icônes cliquables

**Fichier** : `src/components/Contact.jsx`

### 9. Navbar

**Modifications :**
- Renommer "Démarrer un projet" → "Me contacter"
- Ajuster les labels de navigation si certaines sections changent de nom

**Fichier** : `src/components/Navbar.jsx`

### 10. Footer

**Modifications :**
- Ajouter liens GitHub + LinkedIn bien visibles

**Fichier** : `src/components/Footer.jsx`

---

## Fichiers nouveaux

- `src/data/skills.js` — données pour la section Skills
- `src/components/Skills.jsx` — composant Skills & Stack
- `public/cv.pdf` — CV PDF à déposer manuellement

---

## Ce qui ne change pas

- Identité visuelle : dark mode, couleur or, style premium
- Structure générale de la page (one-page scroll)
- Police, animations, transitions
- Section Testimonials
- Logique dark/light mode

---

## Critères de succès

- Un recruteur qui arrive sur le portfolio comprend immédiatement : stack, disponibilité, niveau
- Les CTAs mènent vers un CV PDF et un formulaire de contact
- Aucune mention de "tarif", "devis", "satisfait ou remboursé"
- GitHub et LinkedIn accessibles en 1 clic
