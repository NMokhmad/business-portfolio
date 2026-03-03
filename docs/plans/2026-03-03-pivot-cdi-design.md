# Design : Pivot CDI complet

**Date** : 2026-03-03
**Branche** : feature/cdi-portfolio
**Objectif** : Transformer un portfolio orienté freelance en portfolio 100% CDI, ciblant des recruteurs tech en France.

## Contexte

Mokhmad, 25 ans, développeur fullstack JS junior (React, Node.js, Express, PostgreSQL, TailwindCSS), certifié DWWM, disponible immédiatement en CDI. Point différenciateur clé : expertise sécurité backend (Argon2, protection timing attacks, audit SkillSwap 8.5/10).

**Problème principal** : Le portfolio actuel envoie des signaux 100% freelance (H1 orienté client, stats "délai de livraison / devis garanti / support inclus", section Problems adressant des clients, CTA "Démarrer un projet"). Un recruteur CDI ne se reconnaît pas dans ce message.

## Scope des modifications

### 1. Hero (Hero.jsx)

**Eyebrow**
- Avant : "Développeur Web Fullstack"
- Après : "Développeur Fullstack JS · Certifié DWWM · Disponible en CDI"

**H1 (4 lignes)**
- Avant : "Vous avez / une idée. / Je la transforme / en produit."
- Après : "Développeur / Fullstack JS. / Sécurité backend, / disponible en CDI."

**Description**
- Avant : "Développeur fullstack spécialisé en solutions qui génèrent des résultats business. Pas de retards. Un interlocuteur unique, de l'idée à la mise en ligne."
- Après : "Certifié DWWM, spécialisé sécurité backend. Je cherche une équipe où mes compétences React / Node.js / PostgreSQL ajoutent de la valeur dès le premier sprint."

**Stats (3 métriques)**
- Avant : `2–4 sem. · Délai de livraison` / `24h · Devis garanti` / `30j · Support inclus`
- Après : `8.5 / 10 · Audit sécurité SkillSwap` / `DWWM · Certifié` / `Immédiat · Disponibilité`

**CTAs**
- Avant : "Discuter de votre projet" (scroll contact) + "Voir mes réalisations" (scroll projects)
- Après : "Télécharger mon CV" (`<a href="/cv.pdf" download>`) + "Voir mes projets" (scroll projects)

**Badge portrait**
- Avant : "Disponible"
- Après : "Disponible en CDI"

### 2. Differentiators (src/data/differentiators.js)

Remplacer le différenciateur #4 "Vision produit" par "Sécurité backend intégrée".

```js
{
  iconName: "Shield",
  title: "Sécurité backend intégrée",
  description: "Argon2, protection contre les timing attacks, sessions sécurisées. SkillSwap a obtenu un audit indépendant à 8.5/10 — un niveau rare pour un profil junior."
}
```

Les 3 autres restent intacts (Stack fullstack, Mindset équipe, Delivery fiable).

### 3. Projets (src/data/projects.js)

**SkillSwap — champ `result`**
- Avant : "Site ultra-rapide (chargement en moins d'1 seconde), aucun décalage visuel à l'affichage, et une navigation fluide sans aucun temps de blocage."
- Après : "Audit sécurité indépendant : 8.5/10 (Argon2, protection timing attacks, sessions sécurisées). Site ultra-rapide : chargement < 1 seconde, navigation sans blocage."

**SkillSwap — champ `techDecisions` (nouveau)**
```js
techDecisions: [
  { label: "Argon2 (hachage)", reason: "Résistant aux attaques GPU/ASIC — recommandation OWASP 2024, supérieur à bcrypt pour les mots de passe." },
  { label: "Comparaison temps constant", reason: "Prévient l'énumération d'utilisateurs via timing attacks sur le login." },
  { label: "Socket.io (temps réel)", reason: "Messagerie WebSocket avec fallback polling pour la compatibilité navigateurs." },
]
```

### 4. Problems section (src/data/problems.js + Problems.jsx)

**Eyebrow** : "Vos situations" → "Vos attentes"

**4 items — pivot client → recruteur**

| # | Avant | Après |
|---|-------|-------|
| 1 | "Mon site est lent, moche…" | "Vous cherchez un junior opérationnel dès le premier sprint" |
| 2 | "J'ai une super idée d'app…" | "Vous ne voulez pas gérer des vulnérabilités introduites par un junior" |
| 3 | "Mon développeur précédent m'a lâché…" | "Vous avez besoin d'un seul dev fullstack, pas de deux spécialistes" |
| 4 | "J'ai besoin d'automatiser…" | "Vous cherchez quelqu'un qui s'intègre sans supervision constante" |

**CTA bas de section** : "Réserver un appel découverte gratuit" → "Prendre contact"

**Problems.jsx — texte du CTA paragraphe** : adapter pour recruteur.

### 5. Navbar (Navbar.jsx)

- CTA desktop + mobile : "Démarrer un projet" → "Me contacter"

## Ce qui ne change pas

- Design (couleurs, typographie, layout, animations)
- Section Process — déjà parfaitement orientée CDI (tickets, PR, code reviews)
- Section FAQ — déjà orientée CDI (équipe, remote/hybride, disponibilité)
- Section Contact — neutre, fonctionnel tel quel
- Section Testimonials — aucun changement
- Section Skills — aucun changement

## Critères de succès

1. En 5 secondes, un recruteur comprend : fullstack JS, cherche CDI, spécialité sécurité
2. L'audit 8.5/10 est visible dans au moins 3 endroits (stats hero, differentiators, résultat SkillSwap)
3. Aucun CTA ni stat ne renvoie à une prestation freelance
4. Le bouton CV est accessible depuis le hero
