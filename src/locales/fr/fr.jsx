export default {
  // Navigation
  nav: {
    logo: "DEMID KROM",
    tech: "TECHNOLOGIES",
    timeline: "CHRONOLOGIE",
    about: "À PROPOS",
    contact: "CONTACT",
    blog: "BLOG",
    projects: "PROJETS",
    download: "TÉLÉCHARGEMENTS",
  },

  // Common
  common: {
    fullName: "Demid Krom",
    ribbonNew: "Nouveau",
    prepositions: {
      on: "le",
    },
  },

  // Hero section
  hero: {
    title1: "Salut, je suis",
    title2: "Ingénieur DevOps / Platform",
    description:
      "Je construis et exploite des infrastructures automatisées, du CI/CD à Kubernetes en passant par le cloud, pour des logiciels fiables et sécurisés",
    cta: "Faire défiler",
    ctaSecondary: "Visitez mon blog",
    cards: {
      ide: "Développement",
      mobile: "DevOps",
      vr: "SysOps",
    },
  },

  // Timeline
  timeline: {
    title: "Mon Parcours",
    subtitle: "Un aperçu de mon développement",
    events: {
      derivatives: {
        title: "LPA / Derivatives Data Solutions",
        description:
          "Ingénieur DevOps Platform\n\nPiloté la migration de l'infrastructure sur site vers un centre de données incl. une plateforme VDI, réduisant la consommation électrique de 19 kW à ~4 kW grâce à l'orchestration automatisée (Kestra, Ansible, Terraform). Mis en place un environnement Proxmox (82 VMs) avec monitoring (Prometheus, Grafana) et une gestion centralisée des secrets (HashiCorp Vault, PKI dédiée).",
        date: "Décembre 2025 à présent",
      },
      odav: {
        title: "ODAV AG",
        description:
          "Développeur d'applications (Alternance)\n\nConçu et développé une application de gestion automatisée de la littérature et des médias (Tesseract OCR, Elasticsearch, Liquibase). Construit des pipelines CI/CD automatisés (GitLab, Kubernetes, ArgoCD) pour améliorer la stabilité et les flux de travail des développeurs.",
        date: "Septembre 2022 à Juillet 2025",
      },
      finalSchool: {
        title: "École Secondaire",
        description:
          "Diplôme de l'École Secondaire Herzog-Ludwig à Bogen avec certificat d'école intermédiaire",
        date: "Décembre 2017 à Septembre 2022",
      },
    },
  },

  // Tech stack
  tech: {
    title: "Technologies",
    subtitle:
      "Mon stack pour l'infrastructure, l'automatisation et l'exploitation",
    proficiencyLevels: {
      expert: "Expert",
      advanced: "Avancé",
      intermediate: "Intermédiaire",
      beginner: "Débutant",
    },
  },

  // Testimonials
  testimonials: {
    title: "Témoignages",
    subtitle:
      "Ce que les autres disent de travailler avec moi. Je valorise le code propre, la collaboration et les résultats significatifs.",
    at: "chez",
    items: {
      first: {
        text: "Demid a complètement transformé nos applications web. Son approche de développement moderne nous a fait économiser d'innombrables heures de développement tout en livrant des résultats professionnels. Les solutions sont intuitives pour notre équipe marketing tout en étant assez puissantes pour des fonctionnalités complexes.",
        author: "Sarah Chen",
        role: "CTO",
        company: "TechFlow",
      },
      second: {
        text: "Travailler avec Demid a été une excellente expérience. Son expertise technique et sa compréhension des exigences commerciales ont dépassé nos attentes.",
        author: "Michael Schmidt",
        role: "Chef de Projet",
        company: "Digital Solutions GmbH",
      },
      third: {
        text: "Compétences techniques impressionnantes associées à une communication claire. Demid n'a pas seulement livré ce dont nous avions besoin mais a aussi proposé de manière proactive des améliorations.",
        author: "Lisa Weber",
        role: "Chef de Produit",
        company: "Innovation Labs",
      },
    },
  },

  // Contact
  contact: {
    title: "Contactez-moi",
    subtitle: "Réponse sous 24 heures",
    description:
      "Vous avez des questions ? Contactez-moi et je vous répondrai dès que possible.",
    companyName: "Demid Krom",
    address: "Berlin, Allemagne",
    form: {
      name: "Nom",
      namePlaceholder: "Jean Dupont",
      email: "Email",
      emailPlaceholder: "jean.dupont@exemple.com",
      message: "Message",
      messagePlaceholder: "Votre message ici...",
      submit: "Envoyer",
    },
  },

  // Projects (for future use)
  projects: {
    title: "Mes Projets",
    subtitle: "Une vitrine de mes derniers travaux",
    viewProject: "Voir le Projet",
    viewCode: "Voir le Code",
    liveDemo: "Démo en Direct",
    technologies: "Technologies Utilisées",
    category: "Catégorie",
    status: "Statut",
    completed: "Terminé",
    inProgress: "En Cours",
    upcoming: "À Venir",
    items: {
      vuetris: "Un jeu de Tetris construit avec Vue.js",
      guessing: "Un jeu où il faut deviner le rapport d'aspect d'un iPhone",
    },
  },

  // Blog
  blog: {
    title: "Derniers Articles",
    subtitle: "Réflexions, tutoriels et insights",
    searchPlaceholder: "Rechercher un post ou un guide",
    cta: {
      title: "Bienvenue sur mon blog",
      description:
        "Plongez plus profondément dans mes réflexions et lisez tous les articles disponibles.",
      button: "Voir le Blog",
    },
    notFound: {
      title: "Article introuvable",
      description: "L'article de blog que vous cherchez n'existe pas.",
      back: "Retour au portfolio",
    },
    blogs: {
      leetcode: {
        title:
          "Pourquoi je suis partagé sur le fait que Leetcode vous aide vraiment à progresser",
        preview:
          "Leetcode est un phénomène. D'un côté, une plateforme " +
          "qui est considérée comme une référence mondiale pour la pensée algorithmique.",
        date: "24 mai 2025",
        readTime: "environ 10 minutes de lecture",
        kicker: "Réflexion",
        imageAlt: "Illustration d'un casse-tête Leetcode",
        blocks: [
          {
            type: "p",
            text: "Leetcode est un phénomène. D'un côté, une plateforme considérée dans le monde entier comme une référence pour la pensée algorithmique. De l'autre, pour beaucoup, un endroit où l'on planche pendant des heures sans jamais ressentir de réelle valeur ajoutée pour le quotidien de développeur. J'ai moi-même développé une relation ambivalente avec cette plateforme. Et ce n'est pas sans raison.",
          },
          { type: "h3", text: "Le premier sentiment : la réussite" },
          {
            type: "p",
            text: "Mon premier contact avec Leetcode a été, comme pour beaucoup, une entrée en matière facile. Quelques énigmes simples, dont le fameux FizzBuzz. Une boucle, une condition modulo, quelques sorties. Terminé en quelques minutes. Le sentiment de réussite était là. Je me sentais malin. Motivé, j'ai continué à cliquer. Des problèmes toujours plus difficiles. Toujours plus de code. Des solutions toujours plus courtes. Un jour, je me suis retrouvé devant un problème de parsing de chaînes qui m'a coûté trois heures. À la fin, j'avais une solution qui fonctionnait. Mais qu'est-ce que j'y avais vraiment gagné ?",
          },
          { type: "h3", text: "Aucun lien avec la réalité" },
          {
            type: "p",
            text: "Et c'est exactement là que mon problème avec Leetcode a commencé. Cela semblait de plus en plus artificiel. Presque comme un jeu intellectuel qui s'isole du développement logiciel réel. Car dans aucun de mes vrais projets je n'ai jamais eu à résoudre FizzBuzz. Ni à implémenter un trie. Ni à extraire les niveaux les plus profonds d'une chaîne avec des parenthèses imbriquées. Même pas de loin.",
          },
          {
            type: "p",
            text: "Au lieu de cela, il s'agissait souvent de questions toutes différentes. Comment dimensionner une architecture pour un nombre d'utilisateurs que l'on ne connaît pas ? Comment garder une interface fluide alors que les réponses de l'API sont lentes ? Comment tester des parcours utilisateurs complexes ? Ce sont ces problèmes qui représentent un vrai défi. Et ils ne figurent sur aucune liste Leetcode.",
          },
          { type: "h3", text: "Là où Leetcode aide quand même" },
          {
            type: "p",
            text: "Pourtant, je ne peux pas complètement condamner Leetcode. Celui qui se confronte à des tâches complexes devient plus analytique. Grâce à cette plateforme, j'ai appris l'importance d'un raisonnement clair. Comment transformer un problème non structuré en une stratégie claire. Comment repérer les cas limites avant qu'ils n'explosent. Ce sont des compétences utiles partout, pas seulement en entretien.",
          },
          {
            type: "p",
            text: "L'aspect concentration n'est pas non plus à sous-estimer. Leetcode vous oblige à rester longtemps sur une tâche. On entraîne son esprit à ne pas abandonner immédiatement. Certains problèmes ne se résolvent pas rapidement. Exactement comme dans la vraie vie. Cette endurance mentale est un gain caché que beaucoup sous-estiment.",
          },
          { type: "h3", text: "La différence décisive" },
          {
            type: "p",
            text: "Il reste néanmoins une différence décisive que je ne peux pas ignorer. Dans le développement logiciel réel, c'est l'objectif qui prime. Sur Leetcode, c'est l'énigme qui prime. Ce n'est pas un détail. Celui qui résout des problèmes Leetcode pendant des jours deviendra peut-être un meilleur penseur. Mais pas automatiquement un meilleur développeur.",
          },
          {
            type: "p",
            text: "En revanche, celui qui construit de vraies applications apprend à gérer la pression du temps, les ambiguïtés et les décisions. On apprend la communication en équipe. On apprend ce que doit être un code sur le long terme pour pouvoir être maintenu. Ces choses sont difficiles à transmettre. Et elles ne sont directement représentées sur aucune plateforme comme Leetcode.",
          },
          { type: "h3", text: "Ma conclusion" },
          {
            type: "p",
            text: "Je vois désormais Leetcode plutôt comme un jeu de geek pour vrais passionnés. Un jeu de réflexion avec des règles claires. On peut s'y perdre si l'on aime les défis logiques. Et oui, on peut aussi s'y améliorer énormément si l'on s'y plonge assez profondément. Certains rapportent même que cela a changé toute leur vision du code.",
          },
          {
            type: "p",
            text: "Mais comme unique voie vers un meilleur niveau de développeur, cela ne suffit pas à mon avis. Celui qui veut grandir a besoin de vrais défis. De retours issus de vrais projets. D'erreurs qui peuvent causer de vrais dégâts. De décisions qui ont des conséquences.",
          },
          {
            type: "p",
            text: "Aujourd'hui, je fais les deux. De temps en temps, je résous délibérément quelques exercices Leetcode choisis, simplement pour garder les idées claires. En parallèle, je construis des choses. Des outils, des sites web, des jeux. Parce que c'est là que j'ai le sentiment que ce que j'apprends reste.",
          },
          {
            type: "ul",
            items: [
              "Leetcode est un terrain d'entraînement utile, mais ne remplace pas la pratique réelle.",
              "Si vous visez des entretiens dans de grandes entreprises tech, utilisez-le absolument.",
              "La plateforme entraîne la concentration et l'analyse, mais ni le travail d'équipe ni la vision produit.",
              "Dans le développement réel, il ne s'agit pas de motifs, mais de décisions dans l'incertitude.",
            ],
          },
          {
            type: "p",
            text: "Peut-être que Leetcode vous fera progresser. Peut-être pas. Je pense que tout dépend de la façon dont vous l'utilisez. Celui qui le considère comme un outil et non comme une religion peut en profiter. Mais seul celui qui construit aussi grandira vraiment.",
          },
        ],
      },
      barcodes: {
        title:
          "Des Codes-barres aux Caméras : Pourquoi la voie simple est souvent la plus difficile",
        preview:
          "Tout a commencé par une idée. Je voulais construire une application de gestion de littérature. " +
          "Simple, épurée et fonctionnelle. Pas d'IA, pas de gadgets de caméra.",
        date: "15 février 2025",
        readTime: "environ 12 minutes de lecture",
        kicker: "Développement",
        imageAlt:
          "Étagère de livres, image conceptuelle du scanner de codes-barres",
        blocks: [
          {
            type: "p",
            text: "Tout a commencé par une idée. Je voulais créer une application de gestion de littérature. Simple, épurée et fonctionnelle. Pas de gadgets, pas d'IA, pas d'expériences avec la caméra. À la place, un plan clair : scanner les codes-barres, lire l'ISBN, obtenir le titre, terminé. Exactement comme au supermarché. Les caisses y reconnaissent bien chaque produit uniquement par son code-barres. Alors pourquoi pas les livres ?",
          },
          {
            type: "p",
            text: "Au début, le concept fonctionnait parfaitement dans ma tête. J'imaginais des utilisateurs scannant un livre, et aussitôt apparaissent le titre, l'auteur et la couverture. Le tout sans fioritures. Rapide, numérique, efficace. J'ai construit les premiers prototypes, lu les spécifications de l'ISBN et intégré des bases de données de test. J'étais optimiste.",
          },
          {
            type: "p",
            text: "Mais la réalité était différente. Premier grand obstacle : les bases de données publiques. Il s'est avéré que des API comme OpenLibrary ou Google Books existent, mais leur couverture était lacunaire, obsolète et incomplète. Même des livres récents restaient parfois introuvables. D'autres menaient à des titres complètement faux. L'ISBN d'un livre de théologie renvoyait soudain un guide français sur l'élevage de chevaux. J'ai vérifié le numéro trois fois. Rien à faire.",
          },
          {
            type: "blockquote",
            text: "Je me suis dit : ce n'est pas possible. Cela fonctionne dans toutes les librairies. Leurs systèmes de caisse le font des dizaines de fois par jour. Pourquoi pas ici ?",
          },
          {
            type: "p",
            text: "J'ai donc téléphoné aux éditeurs. Des gens aimables, serviables, mais aussi désemparés. Beaucoup de données ne seraient pas du tout disponibles de manière centralisée. Il faudrait des contrats, un accès à des bases de données propriétaires ou une collaboration directe avec des grossistes comme Libri ou KNV. J'ai demandé quelles étaient les possibilités et on m'a fait patienter. Licences, coûts, protection des données. Bref : aucune chance.",
          },
          {
            type: "p",
            text: "J'ai développé des solutions de contournement, essayé d'intégrer du web scraping, et je suis tombé sur des captchas, des limites de débit et une roulette de JSON. Chaque nouvelle approche était un pas de plus vers la frustration. J'ai compris : cela ne mènerait à rien. J'avais une vision, mais les outils ne m'étaient pas accessibles.",
          },
          { type: "h3", text: "Et puis vint la caméra" },
          {
            type: "p",
            text: "En serrant les dents, j'ai fait demi-tour. Si la voie du code-barres était bloquée, il ne restait qu'un chemin : la caméra. Je voulais d'abord l'éviter. Trop lourd. Trop imprécis. Mais c'était la seule possibilité de rendre le projet utilisable.",
          },
          {
            type: "p",
            text: "J'ai donc commencé à travailler avec l'analyse d'images. Les utilisateurs photographient la couverture du livre et la recadrent, et j'utilise des algorithmes pour reconnaître les titres ou au moins fournir la base visuelle pour une saisie manuelle. L'effort était énorme. Mais : cela fonctionnait. Pas parfaitement, mais de manière exploitable. Et bien plus proche de ce qui fonctionne dans le monde réel.",
          },
          { type: "h3", text: "Que reste-t-il ?" },
          {
            type: "p",
            text: "Avec le recul, je suis content d'avoir fait ce détour. J'ai beaucoup appris. Sur les métadonnées, sur les éditeurs et sur la différence entre le logiciel théorique et le monde réel. Je comprends maintenant tout ce qui se cache dans les systèmes fermés et qui y paraît si évident.",
          },
          {
            type: "p",
            text: "Ce qui ressemble à de la magie aux caisses de supermarché est souvent un système bien huilé, plein de données fermées, de contrats coûteux et d'interfaces vieilles de plusieurs décennies. On n'y accède pas en tant qu'individu avec une idée et une ligne de code.",
          },
          { type: "h3", text: "Conclusion" },
          {
            type: "ul",
            items: [
              "En pratique, les codes-barres ne donnent souvent pas de résultats fiables.",
              "Les API publiques sont lacunaires et difficiles à maintenir.",
              "Les éditeurs n'ont pas de point d'accès unifié pour les données ISBN.",
              "La caméra n'est pas élégante, mais elle est fonctionnelle et universelle.",
              "Le bon chemin n'est parfois pas le plus direct, mais le plus réaliste.",
            ],
          },
          {
            type: "p",
            text: "Et si aujourd'hui vous photographiez un livre pour qu'il apparaisse dans l'application, souvenez-vous : ce n'était jamais le plan. Mais c'était le seul chemin qui a vraiment fonctionné. Et c'est peut-être la leçon la plus importante de toutes : ne faites pas ce qui semble le plus simple. Faites ce qui fonctionne à la fin.",
          },
        ],
      },
      debt: {
        title:
          "Pourquoi la dette technique a fondamentalement changé ma vision de l'informatique",
        preview:
          "La dette technique est un terme qui revient régulièrement dans le développement logiciel, " +
          "mais elle est souvent mal comprise ou minimisée.",
        date: "29 septembre 2024",
        readTime: "environ 12 minutes de lecture",
        kicker: "Réflexion",
        imageAlt: "Image conceptuelle de la dette technique",
        blocks: [
          {
            type: "p",
            text: "La dette technique est un terme qui revient sans cesse dans le développement logiciel, et pourtant elle est souvent mal comprise ou minimisée. Pour moi, la confrontation avec la dette technique a été un tournant qui a complètement changé mon regard sur l'informatique. Ce n'est pas un concept abstrait, mais un outil pratique qui explique pourquoi de nombreux projets échouent ou stagnent, et comment mieux gérer cela.",
          },
          { type: "h3", text: "Qu'est-ce que la dette technique, vraiment ?" },
          {
            type: "p",
            text: "La dette technique apparaît chaque fois que des solutions pragmatiques ou à court terme sont mises en place : elles fonctionnent, mais nuisent à long terme à la maintenabilité, à l'extensibilité et à la qualité d'un système. Cela peut être une couverture de tests insuffisante, une documentation lacunaire, une architecture monolithique ou un refactoring absent. Il est important de comprendre : la dette technique n'est pas mauvaise ou évitable en soi. Elle est même souvent nécessaire pour réagir rapidement aux exigences du marché. Elle ne devient problématique que lorsqu'elle est ignorée ou qu'elle n'est pas traitée systématiquement.",
          },
          {
            type: "h3",
            text: "Les migrations big bang, cas particulier de dette technique",
          },
          {
            type: "p",
            text: "Un cas particulièrement critique de dette technique est ce qu'on appelle la migration big bang. Un système ou un projet y est entièrement converti ou remplacé en une seule grande étape, sans migration progressive. Le problème : des risques massifs apparaissent, car les erreurs, les tests manquants ou les interfaces floues ne sont pas détectés à temps. Les migrations big bang sont souvent le symptôme d'une dette technique accumulée pendant des années, laissant un système qui n'est plus ni modulaire ni maintenable. En pratique, il vaut généralement mieux découper même les grands systèmes en parties plus petites et gérables et migrer progressivement, même si ce n'est pas toujours facile.",
          },
          { type: "h3", text: "Le TDD comme clé contre la dette technique" },
          {
            type: "p",
            text: "L'une des leçons les plus importantes pour moi a été de voir à quel point le développement piloté par les tests (TDD) peut limiter la dette technique. En écrivant systématiquement les tests avant le code, le TDD impose un code propre et modulaire, plus facile à maintenir et à étendre. Le TDD crée une documentation vivante et permet un retour précoce, ce qui minimise la dette technique dès sa naissance. J'ai constaté que les équipes avec une bonne culture de test souffrent nettement moins de dette technique cachée, et que leurs projets sont donc plus stables et plus prévisibles.",
          },
          { type: "h3", text: "Les monolithes ne sont pas toujours coupables" },
          {
            type: "p",
            text: "Un mythe répandu veut que les monolithes génèrent par définition de la dette technique et que les microservices soient la solution à tous les problèmes. Cette vision est trop unidimensionnelle. Les architectures monolithiques peuvent être propres, testables et maintenables, surtout lorsqu'elles sont bien modularisées et soigneusement entretenues. Les microservices, en revanche, apportent souvent de nouveaux défis comme les systèmes distribués, la communication complexe et les obstacles au déploiement. Mais c'est une histoire pour une autre fois. La leçon la plus importante : l'architecture doit correspondre au problème et à l'équipe, chaque tendance n'est pas meilleure en soi.",
          },
          {
            type: "h3",
            text: "Pourquoi la situation semble souvent difficile en Allemagne et dans de nombreuses entreprises",
          },
          {
            type: "p",
            text: "Dans de nombreuses entreprises, en particulier en Allemagne, je vois souvent des projets considérés comme « terminés » alors que la dette technique persiste et que le produit continue d'être maintenu. Cela vient du fait que la dette technique n'est souvent pas considérée comme un cycle de vie à part entière. Un projet n'est en réalité jamais vraiment fini ; il vit tant que le produit est utilisé. Pourtant, beaucoup d'entreprises voient leurs projets de manière statique, avec des budgets et des plannings figés qui ne laissent aucune place au refactoring continu ni à la réduction de la dette technique. Cela conduit à des systèmes qui stagnent, à des coûts de maintenance élevés et à une innovation entravée.",
          },
          { type: "h3", text: "Conclusion" },
          {
            type: "p",
            text: "La confrontation avec la dette technique a profondément marqué ma vision du développement logiciel. Le TDD est pour moi l'une des méthodes les plus efficaces pour limiter la dette technique. Les monolithes ne sont pas mauvais en soi ; ils sont souvent même le choix le plus intelligent face à un paysage de microservices anarchique. Les migrations big bang sont risquées et symptomatiques d'une dette technique accumulée. Et enfin : un projet ne se termine techniquement que lorsque le produit est abandonné. Pour les entreprises, cela signifie accepter la dette technique comme une partie intégrante du cycle de vie du produit et prévoir délibérément des ressources pour sa gestion. C'est la seule façon de créer des produits logiciels durables et robustes.",
          },
        ],
      },
    },

    tags: {
      learning: "développement personnel",
      interview: "entretien d'embauche",
      opinion: "opinion personnelle",
      bug: "bug",
      barcodes: "codes-barres",
      info: "informatif",
      planing: "planification",
    },
  },

  // Download Section
  download: {
    title: "Demid Krom",
    subtitle: "Téléchargement du CV",
    heading: "Mon CV",
    description:
      "Téléchargez mon CV allemand actuel en PDF. Apprenez-en plus sur mon expérience et mes qualifications.",
    fileInfo: {
      type: "Type de Fichier :",
      size: "Taille :",
      typeValue: "PDF",
      sizeValue: "~2,1 MB",
    },
    button: "Télécharger le CV",
    footer: "Cliquez pour télécharger • S'ouvre dans un nouvel onglet",
  },

  // Downloads Section Heading
  downloads: {
    title: "Téléchargements",
    subtitle: "CV, certificats et références",
  },

  // Certificates Card
  certificates: {
    title: "Certificats et Cours",
    subtitle: "Formation Continue",
    heading: "Télécharger les Certificats",
    description:
      "Tous les cours suivis et certificats obtenus. Preuve de formation continue et de développement des compétences.",
    fileInfo: {
      type: "Format",
      size: "Taille",
      typeValue: "PDF",
      sizeValue: "~590 KB",
    },
    button: "Télécharger",
    footer: "Collection de tous les certificats de formation continue",
  },

  // Reference Card
  reference: {
    title: "Lettre de Recommandation",
    subtitle: "Référence Actuelle",
    heading: "Télécharger la Lettre de Recommandation",
    description:
      "Ma lettre de recommandation actuelle avec évaluations confirmées et références. Aperçu de mon développement professionnel et de mes compétences.",
    fileInfo: {
      type: "Format",
      size: "Taille",
      typeValue: "PDF",
      sizeValue: "~120 KB",
    },
    button: "Télécharger",
    footer: "Document confidentiel à des fins de candidature uniquement",
  },

  // Footer
  footer: {
    description:
      "Ingénieur DevOps / Platform passionné par les infrastructures fiables et l'automatisation.",
    quickLinks: "Liens Rapides",
    services: "Services",
    servicesList: {
      webDev: "CI/CD & Automatisation",
      mobileApp: "Infrastructure Cloud",
      uiux: "Conteneurs & Kubernetes",
      consulting: "Conseil",
    },
    contact: "Infos Contact",
    social: "Suivez-moi",
    newsletter: {
      title: "Newsletter",
      description: "Abonnez-vous aux mises à jour de mes derniers projets",
      placeholder: "Entrez votre email",
      subscribe: "S'abonner",
      success: "Abonnement réussi !",
      error: "Échec de l'abonnement. Veuillez réessayer.",
    },
    rights: "Tous droits réservés",
    builtWith: "Construit avec React & Tailwind CSS",
    madeWith: "Fait avec ❤️ par",
    funfacts: {
      title: "Funfacts",
      item1: "Manga préféré : Death Note",
      item2: "Eat. Sleep. Code. Repeat.",
      item3: "TypeScript ? Toujours.",
      item4: "Je ne teste pas en production.",
    },
  },

  // Fire easter egg
  fire: {
    alarm: {
      line1: "ALARME",
      line2: "INCENDIE",
      hintIdle: "En cas d'incendie, brisez la vitre",
      hintHits: "Encore {count} coups",
      hintPress: "Appuyez sur le bouton",
      hintUrgent: "APPUYEZ MAINTENANT !",
      button: "APPUYER",
      ariaBreak: "Briser la vitre",
      ariaExtinguish: "Éteindre le feu",
    },
    gameOver: {
      message:
        "Monstre sans cœur, tu as regardé mon portfolio brûler sans rien faire. Sans cœur, tout simplement sans cœur.",
      rebuild: "Reconstruction dans {seconds}s …",
    },
  },
};
