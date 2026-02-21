# Audit Conversion — Portfolio Mokhmad
> Objectif : premières missions sur Malt France · Stack React/Node.js/PostgreSQL · Profil junior

---

## 1. Hero Section — Le test des 5 secondes

**Ce qui fonctionne :**
- "Votre site web vous fait perdre des clients ?" — accroche douleur efficace
- "Je transforme les visiteurs en clients payants" — promesse claire
- Les 3 checkmarks (délai, support, garantie) sont bien placés

**Ce qui coince :**
Le paragraphe de soutien *"Développeur web spécialisé en solutions qui génèrent des résultats business. Pas de jargon. Pas de retards. Juste des sites qui travaillent pour vous 24/7."* est générique. Un artisan, un coach, une PME qui atterrit sur la page ne sait pas s'il est dans la bonne cible.

**Ce qui est absent du hero :** une preuve concrète chiffrée. Tu as une stat en or cachée dans les témoignages (David K. : *"3x plus de demandes de devis, ROI en 6 semaines"*) — elle devrait être dans le hero.

**Score test 5 secondes : 6/10** — Un client comprend "il fait des sites web" mais pas pourquoi toi plutôt qu'un autre, ni pour quel type de projet/client tu es le mieux placé.

---

## 2. Proposition de valeur — La performance comme différenciateur

C'est là où il y a le plus gros problème structurel. Tu mets en avant les performances (chargement en 1 seconde, Core Web Vitals) dans les fiches projets, mais :

- La section Différenciateurs n'en parle pas directement
- Aucune preuve visuelle (pas de screenshot Lighthouse, pas de score PageSpeed)
- Le lien performances → résultats business n'est jamais explicité

**Un client non-technique ne comprend pas pourquoi "1 seconde de chargement" le concerne.** Il faut traduire : *"1 seconde de chargement = -20% d'abandon de page = plus de prospects qui restent et contactent."*

---

## 3. Présentation des projets — Client ou recruteur ?

**IBA Performance** : bon cas client réel (15 ans d'expérience, 500+ véhicules). Mais les résultats sont encore techniques :
- ✅ "Site rapide (1 seconde)" → langage technique
- ❌ Absent : "+X% de contacts entrants", "+X leads/mois", "classé page 1 sur [ville] + métier"

**SkillSwap** : c'est le vrai problème. C'est un projet personnel présenté comme une réalisation client. Le témoignage de l'"Utilisateur bêta" est la phrase qui tue le plus la crédibilité — et ironiquement, tu as mis juste en-dessous *"Pas de faux témoignages. De vraies personnes."*

Un prospect sophistiqué (un dirigeant qui a déjà été brûlé par un dev) va instantanément détecter que cette "preuve" est fragile. Les deux boutons *"Case Study — Bientôt disponible"* aggravent les choses : tu promets une preuve et tu ne la fournis pas.

---

## 4. Frictions qui bloquent le contact

**Points positifs :**
- Formulaire court (3 champs requis) — excellent
- Le processus "ce qui se passe ensuite" en 5 étapes est rassurant
- Multiples points d'entrée vers le formulaire

**Frictions identifiées :**

1. **Les placeholders du formulaire** (`"Mokhmad"`, `"Mokhmad@email.com"`) peuvent dérouter — utiliser `"Jean"`, `"jean@exemple.fr"` serait plus neutre

2. **Aucun lien vers ton profil Malt** alors que c'est ta plateforme cible. Si quelqu'un veut vérifier ton profil ou voir tes avis Malt, il n'y a aucun chemin direct.

3. **La note de scarcité** (*"Mon agenda se remplit vite"*) — tactique valide mais elle peut sonner faux pour un profil qui cherche ses premières missions. Un prospect qui fait une recherche minimale le sentira.

4. **Pas de Calendly** — "Réserver un appel découverte" mais pas de lien vers un outil de calendrier. Le prospect doit attendre ta réponse de 24h pour convenir d'un créneau, alors qu'un lien Calendly convertit immédiatement.

---

## 5. Ce qui manque pour rassurer un prospect qui ne te connaît pas

**Preuves non vérifiables :**
- Thomas B., Nathalie R., David K. — initiales de nom de famille, pas de LinkedIn cliquable. La mention *"Pas de faux témoignages"* est contre-productive car elle rend le prospect suspicieux alors que rien ne lui permet de vérifier.
- "Voir tous les témoignages sur LinkedIn" — est-ce que ces recommandations existent réellement sur ton profil LinkedIn public ?

**Absent :**
- Le nombre de projets livrés (même "5 clients satisfaits" rassure)
- Ton profil Malt (si tu as déjà des avis)
- Des preuves visuelles de performance (capture Lighthouse, PageSpeed Insights)
- Ta formation/parcours — un junior sans historique a besoin de compenser avec transparence sur qui il est

---

## Les 3 changements prioritaires

### Priorité 1 — Injecter la preuve de résultats dans le hero

**Impact : élevé · Effort : faible**

Remplace le paragraphe générique du hero par quelque chose qui ancre immédiatement sur un résultat business réel :

```
Votre site web vous fait perdre des clients ?
Je transforme les visiteurs en clients payants.
Comme IBA Performance : de 0 présence en ligne à page 1 Google,
ou David K. qui génère 3x plus de devis depuis son nouveau site.
```

Puis sous les CTAs, ajoute une social proof courte :
> **"2 clients livrés · 100% satisfaits · Réponse garantie sous 24h"**

Cela répond immédiatement à "pourquoi lui ?" sans que le visiteur ait besoin de scroller.

---

### Priorité 2 — Remplacer SkillSwap par un vrai cas client (ou le requalifier radicalement)

**Impact : élevé · Effort : moyen**

SkillSwap affaiblit ta crédibilité au lieu de la renforcer. Deux options :

**Option A :** Supprime-le et ne garde qu'IBA Performance + une carte "Ce que je peux construire pour vous" avec une liste de types de projets (site vitrine, MVP, app métier, etc.).

**Option B :** Requalifie SkillSwap en "Projet perso / Démonstration technique" avec un badge explicite, supprime le témoignage "Utilisateur bêta", et mets en avant uniquement les métriques techniques (screenshot Lighthouse, temps de réponse API, etc.).

**Pour IBA Performance :** Contacte ton client pour obtenir des données business — même approximatives. "+X appels entrants depuis le site", "classé #1 sur [mot-clé local]". Ces chiffres valent de l'or.

---

### Priorité 3 — Rendre les témoignages vérifiables + ajouter un lien Calendly

**Impact : moyen-élevé · Effort : faible**

**Témoignages :** Pour chaque témoignage, ajoute un lien LinkedIn cliquable. Si tu n'as pas encore de recommandations LinkedIn de ces clients, demande-leur — c'est 2 minutes pour eux et ça change tout pour ta crédibilité. Un prospect peut vérifier en 10 secondes.

**Calendly :** Remplace "Réserver un appel découverte" par un lien Calendly intégré ou externe. Tu élimines un cycle complet d'échanges email (= 24h de délai en moins = prospects qui ne changent pas d'avis entre-temps).

**Malt :** Ajoute ton profil Malt dans le footer et/ou dans la section contact. Si un client veut t'engager via Malt, donne-lui ce chemin direct.

---

## Résumé des scores

| Aspect | Score | Principal problème |
|--------|-------|-------------------|
| Hero (5 secondes) | 6/10 | Pas de preuve chiffrée visible |
| Proposition de valeur | 6/10 | Performance pas traduite en ROI business |
| Projets | 5/10 | SkillSwap / témoignages non vérifiables |
| Friction contact | 7/10 | Pas de Calendly, pas de lien Malt |
| Social proof | 5/10 | Témoignages non vérifiables, 0 chiffre de volume |

---

## Note générale

Le portfolio a une **bonne structure et un bon copywriting**. Le travail de fond (tone of voice, sections, processus, FAQ, garanties) est solide — bien au-dessus de la moyenne pour un junior. Les 3 priorités ci-dessus sont des ajustements de contenu et de preuve, pas une refonte.
