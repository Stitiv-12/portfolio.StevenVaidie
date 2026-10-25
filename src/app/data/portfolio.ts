/** Informations publiques vérifiées dans le portfolio et le CV de Steven. */
export const PROFILE = {
  name: 'Steven Vaidie',
  email: 'steven.vaidie10@gmail.com',
  github: 'https://github.com/Stitiv-12',
  linkedin: 'https://www.linkedin.com/in/steven-vaidie-ab1234267/',
  cv: 'assets/documents/cv.pdf',
};

export type ProjectCategory = 'Web' | 'Mobile' | 'Expérimentation';
export interface Project {
  title: string;
  fragment: string;
  category: ProjectCategory;
  number: string;
  tagline: string;
  description: string;
  objective: string;
  contribution: string;
  features: readonly string[];
  technologies: readonly string[];
  githubUrl?: string;
  visual: string;
}

export const PROJECTS: readonly Project[] = [
  {
    title: 'Sanatio',
    fragment: 'sanatio-app-mobile',
    category: 'Mobile',
    number: '01',
    tagline: 'Le bon traitement. Au bon moment.',
    description:
      'Une application mobile pour accompagner le suivi des traitements médicaux.',
    objective:
      'Faciliter la gestion des prescriptions, des prises de médicaments et des stocks.',
    contribution:
      'Développement en équipe de sept personnes, avec React Native pour l’application et Express pour les API.',
    features: [
      'Ajout de prescriptions manuellement ou par scan d’ordonnance',
      'Calendrier et rappels des prises',
      'Suivi des stocks et de la validité des ordonnances',
    ],
    technologies: ['React Native', 'Express', 'Mobile'],
    githubUrl: 'https://github.com/Stitiv-12/Sanatio-App',
    visual: 'sanatio',
  },
  {
    title: 'Générateur de particules',
    fragment: 'generateur-de-particules',
    category: 'Expérimentation',
    number: '02',
    tagline: 'Un peu de code. Beaucoup de mouvement.',
    description:
      'Un terrain de jeu interactif pour explorer le langage Go et l’animation.',
    objective:
      'Apprendre Go en construisant un générateur de particules piloté à la souris.',
    contribution:
      'Création du générateur et des interactions : déplacement, taille, couleur, gravité et collisions.',
    features: [
      'Création et déplacement des particules à la souris',
      'Personnalisation de la taille et de la couleur',
      'Simulation de la gravité et des collisions',
    ],
    technologies: ['Go', 'Simulation', 'Interaction'],
    githubUrl: 'https://github.com/Stitiv-12/Generateur_particule',
    visual: 'particles',
  },
  {
    title: 'E-commerce de parfums',
    fragment: 'site-e-commerce-de-parfum',
    category: 'Web',
    number: '03',
    tagline: 'Du catalogue à la commande.',
    description:
      'Une expérience de boutique en ligne, du choix du parfum à la gestion des commandes.',
    objective:
      'Mettre en pratique Laravel et PHP dans un site e-commerce complet.',
    contribution:
      'Réalisation en équipe de quatre personnes : produits, paniers, paiement et profils utilisateurs.',
    features: [
      'Recherche et tri du catalogue',
      'Panier et parcours de commande',
      'Historique d’achat et profils utilisateurs',
    ],
    technologies: ['Laravel', 'PHP', 'E-commerce'],
    visual: 'perfume',
  },
  {
    title: 'Puissance 4',
    fragment: 'puissance-4',
    category: 'Expérimentation',
    number: '04',
    tagline: 'Deux joueurs. Une connexion.',
    description:
      'Le classique revisité en multijoueur, avec un serveur pour relier les joueurs.',
    objective:
      'Découvrir les communications réseau et la programmation concurrente.',
    contribution:
      'Développement du jeu et du serveur en Go, avec des goroutines pour gérer les échanges.',
    features: [
      'Parties entre deux joueurs en ligne',
      'Communication asynchrone via un serveur',
      'Gestion des interactions en temps réel',
    ],
    technologies: ['Go', 'Goroutines', 'Réseau'],
    githubUrl: 'https://github.com/Stitiv-12/Puissance-4',
    visual: 'connect',
  },
  {
    title: 'Pickomino',
    fragment: 'pickomino',
    category: 'Expérimentation',
    number: '05',
    tagline: 'Les règles du jeu, en code.',
    description:
      'Une adaptation numérique du jeu de société, avec une interface JavaFX.',
    objective: 'Traduire les règles de Pickomino dans une application jouable.',
    contribution:
      'Projet en équipe de quatre personnes, avec Kotlin pour la logique et JavaFX pour l’interface.',
    features: [
      'Reproduction des règles du jeu de société',
      'Interface graphique JavaFX',
      'Gestion du multijoueur et des interactions',
    ],
    technologies: ['Kotlin', 'JavaFX', 'Jeu'],
    githubUrl: 'https://github.com/Stitiv-12/Pickomino',
    visual: 'dice',
  },
  {
    title: 'Données industrielles',
    fragment: 'stage-2eme-annee-en-entreprise',
    category: 'Web',
    number: '06',
    tagline: 'Relier l’interface et les données.',
    description:
      'Un convertisseur de données et une interface de saisie, réalisés pendant mon stage.',
    objective:
      'Convertir des données structurées et proposer une interface web pour les saisir.',
    contribution:
      'Développement du convertisseur en C#, de l’interface en React et de la gestion des données au format AML.',
    features: [
      'Conversion de formats de données',
      'Interface de saisie en React',
      'Transfert et stockage de fichiers AML via Google Drive',
    ],
    technologies: ['React', 'C#', 'AML'],
    visual: 'data',
  },
  {
    title: 'Ce portfolio',
    fragment: 'portfolio',
    category: 'Web',
    number: '07',
    tagline: 'Apprendre. Construire. Recommencer.',
    description:
      'D’un premier pas en Angular à une nouvelle façon de présenter mon travail.',
    objective:
      'Montrer mes projets, mon parcours et ma capacité à apprendre une nouvelle technologie.',
    contribution:
      'Un premier portfolio construit seul pour découvrir Angular, puis repensé autour de mon évolution et de mon expérience.',
    features: [
      'Présentation du parcours et des compétences',
      'Exploration des projets par catégorie',
      'Interface responsive et navigation accessible',
    ],
    technologies: ['Angular', 'TypeScript', 'CSS'],
    githubUrl: 'https://github.com/Stitiv-12/portfolio.StevenVaidie',
    visual: 'portfolio',
  },
  {
    title: 'ClashRoyal',
    fragment: 'clashroyal',
    category: 'Web',
    number: '08',
    tagline: 'Se présenter carte sur table.',
    description:
      'Un projet scolaire où un deck de cartes devient un portrait personnel.',
    objective:
      'Créer un site de présentation inspiré des cartes de Clash Royale.',
    contribution:
      'Conception et développement du site en HTML et CSS dans le cadre d’un projet scolaire.',
    features: [
      'Présentation sous forme de deck de cartes',
      'Consultation des decks des autres participants',
    ],
    technologies: ['HTML', 'CSS', 'Créativité'],
    githubUrl: 'https://github.com/Stitiv-12/ClashRoyal',
    visual: 'cards',
  },
];

export interface Experience {
  period: string;
  company: string;
  role: string;
  description: string;
  tags: readonly string[];
  achievements?: readonly string[];
  current: boolean;
}

export const EXPERIENCES: readonly Experience[] = [
  {
    period: 'Une année d’expérience',
    company: 'A5sys',
    role: 'Concepteur développeur · Mission Seenergi',
    description:
      'Développement pour le client Seenergi, au sein d’une équipe d’environ huit développeurs. Une année pour construire des solutions concrètes et progresser au contact du collectif.',
    tags: [
      'Client Seenergi',
      'Équipe de ~8 développeurs',
      'Conception & développement',
    ],
    achievements: [] as readonly string[],
    current: true,
  },
  {
    period: 'Sept. 2024 — Août 2025',
    company: 'CIMPA · Sopra Steria',
    role: 'Alternant développeur',
    description:
      'Du front-end aux données industrielles : interfaces React, serveur C#, base Neo4j et exploration de ROS avec Python et Qt.',
    tags: ['React / TypeScript', 'C#', 'Neo4j', 'Python / Qt'],
    current: false,
  },
  {
    period: 'Avril — Juin 2024',
    company: 'CIMPA · Sopra Steria',
    role: 'Stagiaire développeur',
    description:
      'Développement d’une interface web et d’un serveur pour manipuler des données au format Automation Markup Language.',
    tags: ['React', 'TypeScript', 'C#', 'AML'],
    current: false,
  },
];

export const SKILL_GROUPS = [
  {
    number: '01',
    title: 'Donner vie aux interfaces',
    description:
      'Relier une intention visuelle à une interface claire et agréable à utiliser.',
    technologies: [
      'Angular',
      'React',
      'TypeScript',
      'JavaScript',
      'HTML / CSS',
      'Figma',
    ],
    tone: 'orange',
  },
  {
    number: '02',
    title: 'Construire les fondations',
    description:
      'Comprendre ce qui se passe derrière l’écran, des API aux données.',
    technologies: [
      'C# / .NET',
      'Node.js / Express',
      'PHP / Laravel / Symfony',
      'Python',
      'Java',
      'SQL / Neo4j',
    ],
    tone: 'purple',
  },
  {
    number: '03',
    title: 'Développer en équipe',
    description:
      'Partager le code, automatiser et vérifier pour faire avancer un projet ensemble.',
    technologies: [
      'Git / GitHub / GitLab',
      'Azure DevOps / Pipelines',
      'Docker',
      'Rundeck',
      'Tests unitaires',
      'PHPUnit',
    ],
    tone: 'green',
  },
  {
    number: '04',
    title: 'Explorer d’autres terrains',
    description:
      'Changer de contexte et continuer à apprendre, du mobile aux simulations.',
    technologies: [
      'React Native',
      'Flutter',
      'Android',
      'Go',
      'Kotlin / JavaFX',
      'ROS / Qt',
    ],
    tone: 'blue',
  },
] as const;
