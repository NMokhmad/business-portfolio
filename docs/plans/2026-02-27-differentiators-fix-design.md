# Design — Correction différenciateurs cards 1 et 3

**Date :** 2026-02-27
**Contexte :** Après la réécriture du Hero, deux problèmes subsistent dans les différenciateurs :
- Card 1 : description répète "Un interlocuteur unique, de l'idée à la mise en ligne." (déjà dans le Hero)
- Card 3 : "Je parle business pas code" contredit la section Décisions techniques des projets

## Card 1 — Full ownership du projet

**Titre :** conservé

**Description avant :**
> "Architecture, développement, déploiement, SSL, domaine — vous n'avez pas à coordonner 3 prestataires. Un interlocuteur unique, de l'idée à la mise en ligne."

**Description après :**
> "Architecture, développement, déploiement, SSL, domaine — je gère l'ensemble. Vous ne perdez pas de temps à coordonner un designer, un dev back et un hébergeur."

Même message, formulé différemment. Suppression de la phrase répétée du Hero.

## Card 3 — Remplacement complet

**Avant :**
- iconName: `MessageSquare`
- title: "Je parle 'business', pas 'code'"
- description: "Vous n'avez pas besoin de comprendre React. Vous avez besoin que ça marche et que ça vende."

**Après :**
- iconName: `Code2`
- title: "Code maintenable, pas jetable"
- description: "Je livre du code qu'un autre développeur peut reprendre, faire évoluer ou auditer. Pas un prototype qui tient par miracle."

**Pourquoi ce choix :** Comble un vrai manque — aucune des 4 cartes ne parlait de qualité technique. Cohérent avec la section Décisions techniques visible dans les projets. Parle aux fondateurs (qui vont recruter) et aux PME (qui ont déjà eu de mauvaises expériences).

## Fichiers modifiés

- `src/data/differentiators.js` — textes + iconName card 3
- `src/components/Differentiators.jsx` — import `Code2` à la place de `MessageSquare`
