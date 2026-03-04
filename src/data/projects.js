export const projects = [
  {
    title: "SkillSwap — Plateforme d'échange de compétences",
    image: "/skillswap.webp",
    context: "Projet personnel",
    stack: ["Node.js", "Express", "PostgreSQL", "React", "Socket.io"],
    problem: "Les développeurs et créatifs galèrent à trouver des partenaires complémentaires pour collaborer ou échanger des compétences, sans passer par des plateformes freelance coûteuses.",
    solution: "Une plateforme communautaire full-stack (Node.js, Express, PostgreSQL) avec profils, système de notation 5 étoiles, messagerie privée en temps réel, recherche par compétence et flux d'onboarding guidé.",
    result: "Sécurité backend : Argon2, protection timing attacks, sessions sécurisées (pratiques OWASP 2024). Site ultra-rapide : chargement < 1 seconde, navigation sans blocage.",
    techDecisions: [
      { label: "Argon2 (hachage)", reason: "Résistant aux attaques GPU/ASIC — recommandation OWASP 2024, supérieur à bcrypt pour les mots de passe." },
      { label: "Comparaison temps constant", reason: "Prévient l'énumération d'utilisateurs via timing attacks sur le formulaire de login." },
      { label: "Socket.io (temps réel)", reason: "Messagerie WebSocket avec fallback polling pour la compatibilité navigateurs anciens." },
    ],
    testimonial: "SkillSwap m'a permis de trouver un développeur back-end pour mon projet en moins d'une semaine. Le système de notation aide vraiment à identifier les bons profils.",
    author: "Utilisateur bêta",
    liveUrl: "https://clownfish-app-hy864.ondigitalocean.app/",
    caseStudyUrl: "#"
  },
  {
    title: "IBA Performance — Site vitrine & portfolio automobile",
    image: "/ibaperformance.webp",
    context: "Client",
    stack: ["React", "Sanity CMS", "Vite", "Vercel"],
    problem: "Un spécialiste de la reprogrammation moteur avec 15 ans d'expérience et 500+ véhicules préparés, mais aucune présence en ligne pour générer des leads qualifiés.",
    solution: "Création d'un site React avec CMS headless Sanity, portfolio filtrable (11 catégories), blog SEO, formulaire de contact, et optimisations performances (code splitting, lazy loading, analytics Vercel).",
    result: "Site rapide (chargement en 1 seconde), parfaitement référencé sur Google, et un client 100% autonome pour gérer son contenu sans faire appel à un développeur.",
    testimonial: "Mokhmad a su comprendre notre métier et traduire notre expertise en un site professionnel qui reflète vraiment notre savoir-faire. Le CMS nous permet de gérer nos réalisations en toute autonomie.",
    author: "Gérant, IBAPerformance",
    liveUrl: "https://www.ibaperformance.com",
    caseStudyUrl: "#"
  }
];
