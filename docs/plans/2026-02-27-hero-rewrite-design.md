# Design — Réécriture du Hero

**Date :** 2026-02-27
**Contexte :** Le Hero actuel cible exclusivement les clients avec un site existant à refondre ("Votre site vous fait perdre des clients ?"). Or la cible est double : PME/artisans (sites) ET fondateurs (applications/MVP). 4 incohérences identifiées.
**Approche retenue :** B — Headline transformation ("Vous avez une idée. Je la transforme en produit.")

## Modifications dans `src/components/Hero.jsx`

### 1. Headline (h1)

**Avant :**
```
Votre site vous fait perdre des clients ?
```

**Après :**
```
Vous avez une idée. Je la transforme en produit.
```
— "produit" parle aux fondateurs ET aux artisans. Positif, pas centré sur un problème existant.

### 2. Subheading (p gold italic)

**Avant :**
```
Je transforme les visiteurs en clients payants.
```

**Après :**
```
Sites vitrines, applications, MVP — de la première ligne de code à la mise en ligne.
```
— Couvre explicitement les deux types de missions.

### 3. Description (p muted)

**Avant :**
```
Développeur web spécialisé en solutions qui génèrent des résultats business.
Pas de jargon. Pas de retards. Juste des sites qui travaillent pour vous 24/7.
```

**Après :**
```
Développeur fullstack spécialisé en solutions qui génèrent des résultats business.
Pas de retards. Un interlocuteur unique, de l'idée à la mise en ligne.
```
— Suppression de "Pas de jargon" (contradictoire avec les décisions techniques affichées dans les projets) et "des sites" (trop restrictif). Ajout de "fullstack" pour cohérence avec le label.

### 4. Badge 3 (trust badges)

**Avant :**
```
Satisfait ou remboursé
```

**Après :**
```
Devis sous 24h
```
— "Satisfait ou remboursé" est peu crédible dans le dev custom et signale un profil junior. "Devis sous 24h" est concret et valorise la réactivité.

## Ce qui ne change pas
- Structure générale (label → photo → headline → subhead → description → CTAs → badges)
- Photo avec anneau animé
- CTAs ("Discuter de votre projet" + "Voir mes réalisations")
- Badges 1 et 2 ("Livraison en 2–4 semaines", "Support inclus 30 jours")
- Toutes les animations

## Critère de succès
Un visiteur (PME ou fondateur) lit le Hero et comprend en 5 secondes que Mokhmad peut construire ce dont il a besoin — site OU application.
