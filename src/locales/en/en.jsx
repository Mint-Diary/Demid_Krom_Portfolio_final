export default {
  // Navigation
  nav: {
    logo: "DEMID KROM",
    tech: "TECHNOLOGIES",
    timeline: "TIMELINE",
    about: "ABOUT ME",
    contact: "CONTACT",
    blog: "BLOG",
    projects: "PROJECTS",
    download: "DOWNLOADS",
  },

  // Common
  common: {
    fullName: "Demid Krom",
    ribbonNew: "New",
    prepositions: {
      on: "on",
    },
  },

  // Hero section
  hero: {
    title1: "Hello, I'm",
    title2: "DevOps / Platform Engineer",
    description:
      "I build and run automated infrastructure, from CI/CD and Kubernetes to the cloud, so software runs reliably and securely",
    cta: "Scroll down",
    ctaSecondary: "Visit my blog",
    cards: {
      ide: "Development",
      mobile: "DevOps",
      vr: "SysOps",
    },
  },

  // Timeline
  timeline: {
    title: "My Journey",
    subtitle: "An overview of my development",
    events: {
      derivatives: {
        title: "LPA / Derivatives Data Solutions",
        description:
          "DevOps Platform Engineer\n\nLed the on-premises to data-center migration incl. a VDI platform, cutting power consumption from 19 kW to ~4 kW through automated orchestration (Kestra, Ansible, Terraform). Set up a Proxmox environment (82 VMs) with monitoring (Prometheus, Grafana) and central secrets management (HashiCorp Vault, custom PKI).",
        date: "December 2025 to present",
      },
      odav: {
        title: "ODAV AG",
        description:
          "IT Specialist in Application Development (Apprentice)\n\nDesigned and built an application for automated literature and media management (Tesseract OCR, Elasticsearch, Liquibase). Built automated CI/CD pipelines (GitLab, Kubernetes, ArgoCD) to improve system stability and developer workflows.",
        date: "September 2022 to July 2025",
      },
      finalSchool: {
        title: "Secondary School",
        description:
          "Graduation from Herzog-Ludwig Secondary School in Bogen with intermediate school certificate",
        date: "December 2017 to September 2022",
      },
    },
  },

  // Tech stack
  tech: {
    title: "Technologies",
    subtitle: "My stack for infrastructure, automation, and operations",
    proficiencyLevels: {
      expert: "Expert",
      advanced: "Advanced",
      intermediate: "Intermediate",
      beginner: "Beginner",
    },
  },

  // Testimonials
  testimonials: {
    title: "Testimonials",
    subtitle:
      "What others say about working with me. I value clean code, collaboration, and meaningful results.",
    at: "at",
    items: {
      first: {
        text: "Demid completely transformed our web applications. His modern development approach saved us countless development hours while delivering professional results. The solutions are intuitive for our marketing team while being powerful enough for complex functionalities.",
        author: "Sarah Chen",
        role: "CTO",
        company: "TechFlow",
      },
      second: {
        text: "Working with Demid was an excellent experience. His technical expertise and understanding of business requirements exceeded our expectations.",
        author: "Michael Schmidt",
        role: "Project Manager",
        company: "Digital Solutions GmbH",
      },
      third: {
        text: "Impressive technical skills paired with clear communication. Demid not only delivered what we needed but also proactively suggested improvements.",
        author: "Lisa Weber",
        role: "Product Manager",
        company: "Innovation Labs",
      },
    },
  },

  // Contact
  contact: {
    title: "Get in touch",
    subtitle: "Response within 24 hours",
    description:
      "Have questions? Contact me and I'll get back to you as soon as possible.",
    companyName: "Demid Krom",
    address: "Berlin, Germany",
    form: {
      name: "Name",
      namePlaceholder: "John Doe",
      email: "Email",
      emailPlaceholder: "john.doe@example.com",
      message: "Message",
      messagePlaceholder: "Your message here...",
      submit: "Send",
    },
  },

  // Projects (for future use)
  projects: {
    title: "My Projects",
    subtitle: "A showcase of my latest work",
    viewProject: "View Project",
    viewCode: "View Code",
    liveDemo: "Live Demo",
    technologies: "Technologies Used",
    category: "Category",
    status: "Status",
    completed: "Completed",
    inProgress: "In Progress",
    upcoming: "Upcoming",
    items: {
      vuetris: "A Tetris game built with Vue.js",
      guessing: "A game where you have to guess the aspect ratio of an iPhone",
    },
  },

  // Blog
  blog: {
    title: "Welcome to my Blog",
    subtitle: "Thoughts, tutorials, and insights",
    searchPlaceholder: "Search post or guide",
    cta: {
      title: "Explore the Blog",
      description:
        "Dive deeper into my thoughts and read all available articles.",
      button: "View Blog",
    },
    notFound: {
      title: "Post not found",
      description: "The blog post you are looking for does not exist.",
      back: "Back to portfolio",
    },
    blogs: {
      leetcode: {
        title:
          "Why I'm torn about whether Leetcode actually helps you progress",
        preview:
          "Leetcode is a phenomenon. On one hand, a platform " +
          "that's considered a global reference for algorithmic thinking.",
        date: "May 24, 2025",
        readTime: "approx. 10 minutes read",
        kicker: "Reflection",
        imageAlt: "Illustration of a Leetcode puzzle",
        blocks: [
          {
            type: "p",
            text: "Leetcode is a phenomenon. On one hand, it is a platform that is considered a global reference for algorithmic thinking. On the other hand, for many it is a place where they puzzle for hours without ever feeling any real benefit for their everyday work as a developer. I myself have developed a conflicted relationship with this platform. And not without reason.",
          },
          { type: "h3", text: "The first feeling: success" },
          {
            type: "p",
            text: "My first contact with Leetcode was, as for many, an easy start. A few simple puzzles, including the infamous FizzBuzz. A loop, a modulo condition, a few outputs. Done within minutes. The sense of achievement was there. I felt clever. Motivated, I clicked on. Ever harder problems. Ever more code. Ever shorter solutions. At some point I was facing a string parsing problem that cost me three hours. In the end I had a solution that worked. But what exactly did I gain from it?",
          },
          { type: "h3", text: "No connection to reality" },
          {
            type: "p",
            text: "And this is exactly where my problem with Leetcode began. It felt increasingly unnatural. Artificial. Almost like an intellectual game that isolates itself from real software development. In none of my real projects did I ever have to solve FizzBuzz. Or implement a trie. Or extract the innermost levels from a string with nested brackets. Not even close.",
          },
          {
            type: "p",
            text: "Instead, it was often about entirely different questions. How do you scale an architecture for user numbers you do not know? How do you keep a UI fluid even though API responses are slow? How do you test complex user flows? Those are the problems that truly challenge you. And they do not appear on any Leetcode list.",
          },
          { type: "h3", text: "Where Leetcode still helps" },
          {
            type: "p",
            text: "Still, I cannot write Leetcode off completely. Anyone who is confronted with complex tasks becomes more analytical. Through this platform I learned how important clear reasoning is. How to shape a clear strategy out of an unstructured problem. How to spot corner cases before they blow up. Those are skills that are useful everywhere, not just in the interview room.",
          },
          {
            type: "p",
            text: "The aspect of focus should not be underestimated either. Leetcode forces you to stay with one task for a long time. You train your mind not to give up immediately. Some problems cannot be solved quickly. Just like in real life. This mental endurance is a hidden gain that many underestimate.",
          },
          { type: "h3", text: "The decisive difference" },
          {
            type: "p",
            text: "Nevertheless, there is a decisive difference I cannot ignore. In real software development, the goal is the focus. On Leetcode, the puzzle is the focus. That is no small thing. Someone who solves Leetcode problems for days may become a better thinker. But not automatically a better developer.",
          },
          {
            type: "p",
            text: "Whoever builds real applications, on the other hand, learns to deal with time pressure, ambiguity, and decisions. You learn team communication. You learn how code has to feel in the long run so that it can be maintained. These things are hard to teach. And they are not directly represented on any platform like Leetcode.",
          },
          { type: "h3", text: "My conclusion" },
          {
            type: "p",
            text: "These days I see Leetcode more as a nerd game for true enthusiasts. A thinking game with clear rules. You can lose yourself in it if you enjoy logical challenges. And yes, you can also improve dramatically if you dig in deep enough. Some even report that it changed their entire view of code.",
          },
          {
            type: "p",
            text: "But in my opinion it does not work as the sole path to becoming a better developer. If you want to grow, you need real challenges. Feedback from real projects. Mistakes that can cause real damage. Decisions that have consequences.",
          },
          {
            type: "p",
            text: "Today I do both. Every now and then I deliberately solve a few selected Leetcode problems, simply to keep my thinking sharp. At the same time I build things. Tools, websites, games. Because that is where I feel that what I learn actually sticks.",
          },
          {
            type: "ul",
            items: [
              "Leetcode is a useful training ground, but no substitute for real practice.",
              "If you are planning interviews at big tech companies, you should definitely use it.",
              "The platform trains focus and analysis, but not teamwork or product thinking.",
              "Real development is not about patterns, it is about decisions under uncertainty.",
            ],
          },
          {
            type: "p",
            text: "Maybe Leetcode will take you further. Maybe not. I think it depends on how you use it. If you treat it as a tool and not as a religion, you can profit from it. But only those who also build will truly grow.",
          },
        ],
      },
      barcodes: {
        title:
          "From Barcodes to Cameras: Why the simple way is often the hardest",
        preview:
          "It all started with an idea. I wanted to build a literature management app. " +
          "Simple, lean, and functional. No AI, no camera gimmicks.",
        date: "February 15, 2025",
        readTime: "approx. 12 minutes read",
        kicker: "Development",
        imageAlt: "Bookshelf as a concept image for the barcode scanner",
        blocks: [
          {
            type: "p",
            text: "It all started with an idea. I wanted to build an app for managing literature. Simple, lean, and functional. No gimmicks, no AI, no camera experiments. Instead, a clear plan: scan barcodes, read the ISBN, get the title, done. Just like in a supermarket. The checkouts there also recognize every product purely by its barcode. So why not books?",
          },
          {
            type: "p",
            text: "At first, the concept worked perfectly in my head. I imagined users scanning a book, and instantly the title, author, and cover appear. All of it without frills. Fast, digital, efficient. I built the first prototypes, read ISBN specifications, and integrated test databases. I was optimistic.",
          },
          {
            type: "p",
            text: "But reality looked different. The first big hurdle: public databases. It turned out that while APIs like OpenLibrary or Google Books exist, their coverage was patchy, outdated, and incomplete. Even modern books sometimes could not be found. Others led to completely wrong titles. The ISBN of a theological book suddenly returned a French guide on horse keeping. I checked the number three times. It stayed that way.",
          },
          {
            type: "blockquote",
            text: "I thought to myself: this cannot be right. It works in every bookstore. The checkout systems there do this dozens of times a day. Why not here?",
          },
          {
            type: "p",
            text: "So I called publishers. Friendly people, helpful, but also at a loss. Much of the data was not centrally available at all. You would need contracts, access to proprietary databases, or direct partnerships with wholesalers like Libri or KNV. I asked about options and was put off. Licenses, costs, data protection. In short: no chance.",
          },
          {
            type: "p",
            text: "I developed workarounds, tried to add web scraping, and ran into captchas, rate limits, and JSON roulette. Every new approach was a step toward frustration. I realized: this was going nowhere. I had a vision, but the tools for it were not available to me.",
          },
          { type: "h3", text: "And then came the camera" },
          {
            type: "p",
            text: "Gritting my teeth, I turned around. If the barcode path was blocked, only one path remained: the camera. I wanted to avoid it at first. Too elaborate. Too imprecise. But it was the only way to make the project usable at all.",
          },
          {
            type: "p",
            text: "So I started working with image analysis. Users photograph the book cover and crop it, and I use algorithms to recognize titles or at least provide the image basis for manual input. The effort was enormous. But: it worked. Not perfectly, but usably. And much closer to what works in the real world.",
          },
          { type: "h3", text: "What remains?" },
          {
            type: "p",
            text: "Looking back, I am glad I took this detour. I learned a lot. About metadata, about publishers, and about the difference between theoretical software and the real world. I now understand how much is hidden inside closed systems that seems so natural there.",
          },
          {
            type: "p",
            text: "What looks like magic at supermarket checkouts is often a well-oiled system full of closed data, expensive contracts, and decades-old interfaces. You do not get there as an individual with an idea and a single line of code.",
          },
          { type: "h3", text: "Conclusion" },
          {
            type: "ul",
            items: [
              "In practice, barcodes often do not deliver reliable results.",
              "Public APIs are patchy and hard to maintain.",
              "Publishers have no unified access point for ISBN data.",
              "The camera is not elegant, but it is functional and universal.",
              "The right way is sometimes not the direct one, but the realistic one.",
            ],
          },
          {
            type: "p",
            text: "And if you photograph a book today so that it appears in the app, remember: it was never the plan. But it was the only way that actually worked. And maybe that is the most important lesson of all: do not do what looks easiest. Do what works in the end.",
          },
        ],
      },
      debt: {
        title:
          "Why technical debt fundamentally changed my view on computer science",
        preview:
          "Technical debt is a term that comes up repeatedly in software development, " +
          "yet it's often misunderstood or downplayed.",
        date: "September 29, 2024",
        readTime: "approx. 12 minutes read",
        kicker: "Reflection",
        imageAlt: "Concept image for technical debt",
        blocks: [
          {
            type: "p",
            text: "Technical debt is a term that comes up again and again in software development, and yet it is often misunderstood or downplayed. For me personally, engaging with technical debt was a turning point that completely changed my view of computer science. It is not an abstract concept but a practical tool that explains why many projects fail or stagnate, and how to handle that better.",
          },
          { type: "h3", text: "What is technical debt really?" },
          {
            type: "p",
            text: "Technical debt arises whenever pragmatic or short-term solutions are implemented that work, but in the long run impair the maintainability, extensibility, and quality of a system. That can be insufficient test coverage, lacking documentation, a monolithic architecture, or missing refactoring. It is important to understand: technical debt is not inherently evil or avoidable. Often it is even necessary in order to react quickly to market demands. It only becomes a problem when it is ignored or not addressed systematically.",
          },
          {
            type: "h3",
            text: "Big bang migrations as a special case of technical debt",
          },
          {
            type: "p",
            text: "A particularly critical case of technical debt is the so-called big bang migration. Here, a system or project is completely converted or replaced in one big step, without gradual migration. The problem: massive risks arise because bugs, missing tests, or unclear interfaces are not detected in time. Big bang migrations are often a symptom of technical debt that has piled up over years, leaving the system no longer modular or maintainable. In practice it is usually better to break even large systems into smaller, manageable parts and migrate step by step, even if that is not always easy.",
          },
          { type: "h3", text: "TDD as a key against technical debt" },
          {
            type: "p",
            text: "One of the most important insights for me was how much test-driven development (TDD) can limit technical debt. By consistently writing tests before the code, TDD enforces clean, modular code that is easier to maintain and extend. TDD creates living documentation and enables early feedback, which minimizes technical debt at the moment it would arise. I have seen that teams with a good testing culture are plagued far less by hidden technical debt, and their projects therefore run more stably and predictably.",
          },
          { type: "h3", text: "Monoliths are not always the culprits" },
          {
            type: "p",
            text: "A widespread myth is that monoliths generate technical debt by definition and that microservices are the solution to all problems. This view is too one-dimensional. Monolithic architectures can be clean, testable, and maintainable, especially when they are well modularized and carefully looked after. Microservices, on the other hand, often bring new challenges such as distributed systems, complex communication, and deployment hurdles. But that is a story for another time. The most important lesson: the architecture has to fit the problem and the team, not every trend is inherently better.",
          },
          {
            type: "h3",
            text: "Why things often look difficult in Germany and many companies",
          },
          {
            type: "p",
            text: 'In many companies, especially in Germany, I frequently see projects considered "done" even though technical debt persists and the product continues to be maintained. That is because technical debt is often not treated as its own life cycle. A project is actually never truly finished; it lives as long as the product is used. Nevertheless, many companies view their projects statically, with fixed budgets and schedules that leave no room for continuous refactoring or paying down technical debt. That leads to stagnating systems, high maintenance costs, and hampered innovation.',
          },
          { type: "h3", text: "Conclusion" },
          {
            type: "p",
            text: "Engaging with technical debt has deeply shaped my view of software development. For me, TDD is one of the most effective methods to limit technical debt. Monoliths are not bad per se; often they are even the smarter choice compared to a wild microservice landscape. Big bang migrations are risky and symptomatic of accumulated technical debt. And last but not least: a project only ends technically when the product is discontinued. For companies this means accepting technical debt as a fixed part of the product life cycle and deliberately planning resources for managing it. Only then can sustainable and robust software products be created.",
          },
        ],
      },
    },

    tags: {
      learning: "personal development",
      interview: "job interview",
      opinion: "personal opinion",
      bug: "bug",
      barcodes: "barcodes",
      info: "informative",
      planing: "planning",
    },
  },

  // Download Section
  download: {
    title: "Demid Krom",
    subtitle: "Resume Download",
    heading: "My Resume",
    description:
      "Download my current German resume as PDF. Learn more about my experience and qualifications.",
    fileInfo: {
      type: "File Type:",
      size: "Size:",
      typeValue: "PDF",
      sizeValue: "~2.1 MB",
    },
    button: "Download Resume",
    footer: "Click to download • Opens in new tab",
  },

  // Downloads Section Heading
  downloads: {
    title: "Downloads",
    subtitle: "Resume, certificates and references",
  },

  // Certificates Card
  certificates: {
    title: "Certificates & Courses",
    subtitle: "Continuing Education",
    heading: "Download Certificates",
    description:
      "All courses attended and certificates earned. Proof of ongoing education and skill development.",
    fileInfo: {
      type: "Format",
      size: "Size",
      typeValue: "PDF",
      sizeValue: "~590 KB",
    },
    button: "Download",
    footer: "Collection of all continuing education certificates",
  },

  // Reference Card
  reference: {
    title: "Reference Letter",
    subtitle: "Current Reference",
    heading: "Download Reference Letter",
    description:
      "My current reference letter with confirmed evaluations and references. Insight into my professional development and skills.",
    fileInfo: {
      type: "Format",
      size: "Size",
      typeValue: "PDF",
      sizeValue: "~120 KB",
    },
    button: "Download",
    footer: "Confidential document for application purposes only",
  },

  // Footer
  footer: {
    description:
      "DevOps / Platform Engineer with a passion for reliable infrastructure and automation.",
    quickLinks: "Quick Links",
    services: "Services",
    servicesList: {
      webDev: "CI/CD & Automation",
      mobileApp: "Cloud Infrastructure",
      uiux: "Containers & Kubernetes",
      consulting: "Consulting",
    },
    contact: "Contact Info",
    social: "Follow Me",
    newsletter: {
      title: "Newsletter",
      description: "Subscribe to updates on my latest projects",
      placeholder: "Enter your email",
      subscribe: "Subscribe",
      success: "Successfully subscribed!",
      error: "Subscription failed. Please try again.",
    },
    rights: "All rights reserved",
    builtWith: "Built with React & Tailwind CSS",
    madeWith: "Made with ❤️ by",
    funfacts: {
      title: "Funfacts",
      item1: "Favorite manga: Death Note",
      item2: "Eat. Sleep. Code. Repeat.",
      item3: "TypeScript? Always.",
      item4: "I don't test in production.",
    },
  },

  // Fire easter egg
  fire: {
    alarm: {
      line1: "FIRE",
      line2: "ALARM",
      hintIdle: "In case of fire, break the glass",
      hintHits: "{count} more hits",
      hintPress: "Press the button",
      hintUrgent: "PRESS NOW!",
      button: "PRESS",
      ariaBreak: "Break the glass",
      ariaExtinguish: "Extinguish the fire",
    },
    gameOver: {
      message:
        "You heartless monster watched my portfolio burn down and did absolutely nothing. Heartless, simply heartless.",
      rebuild: "Rebuilding in {seconds}s …",
    },
  },
};
