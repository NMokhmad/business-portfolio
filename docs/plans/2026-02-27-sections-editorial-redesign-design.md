# Design doc — Refonte éditoriale complète des sections

**Date :** 2026-02-27
**Statut :** approuvé
**Approche :** Option A — "Presse éditoriale de luxe"

---

## Contexte

Le Hero a été redesigné (split asymétrique, portrait carré, ghost "01", stats éditoriaux).
Les 6 autres sections répètent toutes le même header : pill label centré + h2 centré + p centré.
Le Process utilise la timeline verticale numérotée (pattern le plus copié du web).
Les Testimonials = grille 3 cartes étoiles. Les Differentiators = 2×2 feature cards SaaS.

---

## Règle transversale

**Supprimer** la pill `.section-label` centrée de toutes les sections.
**Remplacer** par : ligne dorée 36px + eyebrow uppercase 0.65rem, aligné à gauche.
Conserver tous les tokens CSS, `btn-gold`, `btn-outline`, `animate-fade-up`, données.

---

## Sections — design détaillé

### Differentiators → "Liste manifeste"

- Header left-aligned : eyebrow "Pourquoi moi" + H2 grand
- 4 items en liste éditoriale (plus de cards) :
  - Index en grand Cormorant light (01–04), couleur `text-dim`
  - Titre bold + description alignés à droite de l'index
  - Séparés par lignes horizontales `var(--border)`
  - Hover : numéro passe en `var(--gold)`, ligne du dessus dorée
- Pas de background card, pas de border box, pas d'icône
- CTA conservé

### Problems → "Tension dramatique"

- Header left-aligned : eyebrow + H2 italic serif
- Chaque problème = ligne 2 colonnes :
  - Gauche (~55%) : problème en italic Cormorant `1.05rem`, guillemets typographiques
  - Droite (~45%) : solution en Outfit small caps, flèche dorée en prefix
  - Fine ligne verticale centrale `var(--border)` entre les deux
- Fond alterné subtil (surface / surface-2) par item
- Mobile : stack vertical (problème → solution)
- CTA conservé

### Projects → Ajustements seulement

- Supprimer pill centrée → eyebrow left-aligned
- Numéros de projet ghost plus grands (Cormorant 6rem, opacity 0.12) dans la zone image
- Layout alternance + PSR + tech decisions : conservés intégralement
- `gap: 2px background: border` → ligne fine entre projets

### Process → "Étapes horizontales"

- Header left-aligned : eyebrow + H2 en 2 lignes avec dernière ligne italic
- Desktop (≥768px) : 5 colonnes horizontales
  - En haut de chaque colonne : numéro Cormorant grand (01–05)
  - Ligne horizontale relie les colonnes, point doré sur chaque nœud
  - En dessous : titre bold + liste de détails
- Mobile (< 768px) : stack vertical avec numéros grands à gauche
- CTA conservé

### Testimonials → "Grand format magazine"

- Header left-aligned : eyebrow + H2
- Supprimer les étoiles
- Layout asymétrique :
  - Témoignage 1 (le plus fort) pleine largeur :
    - Citation en Cormorant italic `clamp(1.4rem, 2.5vw, 2rem)`
    - Grand guillemet décoratif en background
    - Auteur + rôle en petite caps dessous
  - Témoignages 2 et 3 côte à côte, plus compacts
  - Ligne horizontale entre les deux niveaux
- Lien LinkedIn conservé

### FAQ → Épuration

- Header left-aligned : eyebrow + H2
- Supprimer la border box globale
- Chaque item : border-bottom seulement
- Numéro d'index Cormorant light (01–06) à gauche du titre de question
- Question `1.05rem`, padding-left aligné après le numéro
- CTA conservé

---

## Responsive

Tous les layouts horizontaux (Process, Problems 2 colonnes) stackent à `≤ 720px` ou `≤ 768px`.
Conserver les `@media` existants dans `index.css`.

---

## Ce qui ne change pas

- Copy (aucun texte modifié)
- `src/data/` (aucun changement)
- `index.css` (ajout utilitaires mineurs si nécessaire)
- `Navbar.jsx`, `Footer.jsx`, `Contact.jsx`
