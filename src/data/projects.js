export const projects = [
  {
    title: "SkillSwap — Plateforme d'échange de compétences",
    image: "/skillswap.webp",
    problem: "Les développeurs et créatifs galèrent à trouver des partenaires complémentaires pour collaborer ou échanger des compétences, sans passer par des plateformes freelance coûteuses.",
    solution: "Une plateforme communautaire full-stack (Node.js, Express, PostgreSQL) avec profils, système de notation 5 étoiles, messagerie privée en temps réel, recherche par compétence et flux d'onboarding guidé.",
    result: "Site ultra-rapide (chargement en moins d'1 seconde), aucun décalage visuel à l'affichage, et une navigation fluide sans aucun temps de blocage.",
    techDecisions: [
      { label: 'Argon2id', reason: 'Hashing mots de passe — résistant aux attaques GPU, standard de référence OWASP' },
      { label: 'JWT + cookie httpOnly', reason: 'Token inaccessible au JavaScript — protection XSS native' },
      { label: 'PostgreSQL relationnel', reason: 'Intégrité garantie entre profils, compétences, notations et messages' },
      { label: 'DigitalOcean App Platform', reason: 'Déploiement containerisé, SSL automatique, rollback one-click' },
    ],
    testimonial: "SkillSwap m'a permis de trouver un développeur back-end pour mon projet en moins d'une semaine. Le système de notation aide vraiment à identifier les bons profils.",
    author: "Utilisateur bêta",
    liveUrl: "https://clownfish-app-hy864.ondigitalocean.app/",
    caseStudyUrl: "#"
  },
  {
    title: "IBA Performance — Site vitrine & portfolio automobile",
    image: "/ibaperformance.webp",
    problem: "Un spécialiste de la reprogrammation moteur avec 15 ans d'expérience et 500+ véhicules préparés, mais aucune présence en ligne pour générer des leads qualifiés.",
    solution: "Création d'un site React avec CMS headless Sanity, portfolio filtrable (11 catégories), blog SEO, formulaire de contact, et optimisations performances (code splitting, lazy loading, analytics Vercel).",
    result: "Site rapide (chargement en 1 seconde), parfaitement référencé sur Google, et un client 100% autonome pour gérer son contenu sans faire appel à un développeur.",
    techDecisions: [
      { label: 'Sanity CMS headless', reason: 'Client autonome pour gérer le contenu sans intervention dev' },
      { label: 'Code splitting + lazy loading', reason: 'Score Lighthouse maintenu au-dessus de 90' },
      { label: 'Vercel', reason: 'CDN mondial, preview automatique par commit, zéro config' },
    ],
    testimonial: "Mokhmad a su comprendre notre métier et traduire notre expertise en un site professionnel qui reflète vraiment notre savoir-faire. Le CMS nous permet de gérer nos réalisations en toute autonomie.",
    author: "Gérant, IBAPerformance",
    liveUrl: "https://www.ibaperformance.com",
    caseStudyUrl: "#"
  }
];
