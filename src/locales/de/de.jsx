export default {
  // Navigation
  nav: {
    logo: "DEMID KROM",
    timeline: "WERDEGANG",
    tech: "TECHNOLOGIEN",
    blog: "BLOG",
    projects: "PROJEKTE",
    download: "DOWNLOADS",
  },

  // Common
  common: {
    fullName: "Demid Krom",
    ribbonNew: "Neu",
    prepositions: {
      on: "am",
    },
  },

  // Hero section
  hero: {
    title1: "Hallo, ich bin",
    title2: "DevOps / Platform Engineer",
    description:
      "Ich baue und betreibe automatisierte Infrastruktur, von CI/CD über Kubernetes bis zur Cloud, damit Software zuverlässig und sicher läuft",
    cta: "Weiter",
    ctaSecondary: "Zu meinem Blog",
    cards: {
      ide: "Development",
      mobile: "DevOps",
      vr: "SysOps",
    },
  },

  // Timeline
  timeline: {
    title: "Mein Werdegang",
    subtitle: "Ein Überblick über meine Entwicklung",
    events: {
      derivatives: {
        title: "LPA / Derivatives Data Solutions",
        description:
          "DevOps Platform Engineer\n\nMigration der On-Premises-Infrastruktur ins Rechenzentrum inkl. VDI-Plattform geleitet und den Stromverbrauch durch automatisierte Orchestrierung (Kestra, Ansible, Terraform) von 19 kW auf ~4 kW gesenkt. Proxmox-Umgebung (82 VMs) mit Monitoring (Prometheus, Grafana) und zentrales Secrets-Management (HashiCorp Vault, eigene PKI) aufgebaut.",
        date: "Dezember 2025 bis heute",
      },
      odav: {
        title: "ODAV AG",
        description:
          "Fachinformatiker für Anwendungsentwicklung (Ausbildung)\n\nAnwendung zur automatisierten Literatur- und Medienverwaltung konzipiert und entwickelt (Tesseract OCR, Elasticsearch, Liquibase). Automatisierte CI/CD-Pipelines (GitLab, Kubernetes, ArgoCD) für mehr Systemstabilität und bessere Entwickler-Workflows aufgebaut.",
        date: "September 2022 bis Juli 2025",
      },
      finalSchool: {
        title: "Mittelschule",
        description:
          "Abschluss an der Herzog-Ludwig-Mittelschule in Bogen mit dem Mittleren Bildungsabschluss",
        date: "Dezember 2017 bis September 2022",
      },
    },
  },

  // Tech stack
  tech: {
    title: "Technologien",
    subtitle: "Mein Stack für Infrastruktur, Automatisierung und Betrieb",
    proficiencyLevels: {
      expert: "Experte",
      advanced: "Fortgeschritten",
      intermediate: "Mittel",
      beginner: "Anfänger",
    },
  },

  // Testimonials
  testimonials: {
    title: "Referenzen",
    subtitle:
      "Was andere über die Zusammenarbeit mit mir sagen. Ich lege Wert auf sauberen Code, Zusammenarbeit und bedeutungsvolle Ergebnisse.",
    at: "bei",
    items: {
      first: {
        text: "Demid hat unsere Webanwendungen komplett transformiert. Sein moderner Entwicklungsansatz hat uns unzählige Entwicklungsstunden erspart und dabei professionelle Ergebnisse geliefert. Die Lösungen sind intuitiv für unser Marketing-Team und gleichzeitig leistungsfähig genug für komplexe Funktionalitäten.",
        author: "Sarah Chen",
        role: "CTO",
        company: "TechFlow",
      },
      second: {
        text: "Die Zusammenarbeit mit Demid war eine ausgezeichnete Erfahrung. Seine technische Expertise und sein Verständnis für Geschäftsanforderungen haben unsere Erwartungen übertroffen.",
        author: "Michael Schmidt",
        role: "Projektmanager",
        company: "Digital Solutions GmbH",
      },
      third: {
        text: "Beeindruckende technische Fähigkeiten gepaart mit einer klaren Kommunikation. Demid hat nicht nur geliefert, was wir brauchten, sondern auch proaktiv Verbesserungen vorgeschlagen.",
        author: "Lisa Weber",
        role: "Produktmanagerin",
        company: "Innovation Labs",
      },
    },
  },

  // Contact
  contact: {
    title: "Kontakt aufnehmen",
    subtitle: "Antwort innerhalb von 24 Stunden",
    description:
      "Haben Sie Fragen? Kontaktieren Sie mich und ich melde mich schnellstmöglich bei Ihnen zurück.",
    companyName: "Demid Krom",
    address: "Berlin, Deutschland",
    form: {
      name: "Name",
      namePlaceholder: "Max Mustermann",
      email: "E-Mail",
      emailPlaceholder: "max.mustermann@example.com",
      message: "Nachricht",
      messagePlaceholder: "Ihre Nachricht hier...",
      submit: "Absenden",
    },
  },

  // Projects (for future use)
  projects: {
    title: "Meine Projekte",
    subtitle: "Eine Präsentation meiner neuesten Arbeiten",
    viewProject: "Projekt ansehen",
    viewCode: "Code ansehen",
    liveDemo: "Live Demo",
    technologies: "Verwendete Technologien",
    category: "Kategorie",
    status: "Status",
    completed: "Abgeschlossen",
    inProgress: "In Bearbeitung",
    upcoming: "Geplant",
    items: {
      vuetris: "Ein Tetris-Spiel, gebaut mit Vue.js",
      guessing:
        "Ein Spiel, bei dem man das Seitenverhältnis eines iPhones erraten muss",
    },
  },

  // Blog
  blog: {
    title: "Willkommen auf meinem Blog",
    subtitle: "Gedanken, Tutorials und Einblicke",
    searchPlaceholder: "Post oder Anleitung suchen",
    cta: {
      title: "Entdecke alle Artikel",
      description:
        "Tauche tiefer in meine Gedankenwelt ein und stöbere durch sämtliche Blog-Beiträge.",
      button: "Zum Blog",
    },
    notFound: {
      title: "Beitrag nicht gefunden",
      description: "Der gesuchte Blogbeitrag existiert leider nicht.",
      back: "Zurück zum Portfolio",
    },
    blogs: {
      leetcode: {
        title:
          "Wieso ich hin- und hergerissen bin, ob Leetcode einen weiterbringt",
        preview:
          "Leetcode ist ein Phänomen. Auf der einen Seite eine Plattform, " +
          "die weltweit als Referenz für algorithmisches Denken gilt.",
        date: "24. Mai 2025",
        readTime: "ca. 10 Minuten Lesezeit",
        kicker: "Reflexion",
        imageAlt: "Symbolbild für Leetcode-Rätsel",
        blocks: [
          {
            type: "p",
            text: "Leetcode ist ein Phänomen. Auf der einen Seite eine Plattform, die weltweit als Referenz für algorithmisches Denken gilt. Auf der anderen Seite für viele ein Ort, an dem sie stundenlang knobeln, ohne jemals einen echten Mehrwert für den Alltag als Entwickler zu spüren. Ich selbst habe eine zwiegespaltene Beziehung zu dieser Plattform entwickelt. Und das nicht ohne Grund.",
          },
          { type: "h3", text: "Das erste Gefühl: Erfolg" },
          {
            type: "p",
            text: "Mein erster Kontakt mit Leetcode war, wie bei vielen, ein einfacher Einstieg. Ein paar leichte Rätsel, darunter das berüchtigte FizzBuzz. Eine Schleife, eine Modulo-Bedingung, ein paar Ausgaben. Innerhalb von Minuten erledigt. Das Erfolgserlebnis war da. Ich fühlte mich clever. Motiviert klickte ich mich weiter. Immer schwerere Probleme. Immer mehr Code. Immer kürzere Lösungen. Irgendwann stand ich vor einem String-Parsing-Problem, das mich drei Stunden kostete. Am Ende hatte ich eine Lösung, die funktionierte. Aber was genau hatte ich davon?",
          },
          { type: "h3", text: "Kein Bezug zur Realität" },
          {
            type: "p",
            text: "Und genau hier begann mein Problem mit Leetcode. Es fühlte sich zunehmend unnatürlich an. Künstlich. Fast wie ein intellektuelles Spiel, das sich von der realen Softwareentwicklung abkapselt. Denn in keinem meiner echten Projekte musste ich je FizzBuzz lösen. Oder einen Trie implementieren. Oder aus einem String mit verschachtelten Klammern die innersten Ebenen extrahieren. Nicht einmal in der Nähe.",
          },
          {
            type: "p",
            text: "Stattdessen ging es oft um ganz andere Fragen. Wie skaliert man eine Architektur für Benutzerzahlen, die man nicht kennt? Wie hält man ein UI flüssig, obwohl API-Antworten langsam sind? Wie testet man komplexe User-Flows? Das sind die Probleme, die wirklich herausfordern. Und sie tauchen auf keiner Leetcode-Liste auf.",
          },
          { type: "h3", text: "Wo Leetcode trotzdem hilft" },
          {
            type: "p",
            text: "Dennoch kann ich Leetcode nicht vollständig abschreiben. Wer sich mit komplexen Aufgaben konfrontiert sieht, wird analytischer. Ich habe durch diese Plattform gelernt, wie wichtig klare Gedankengänge sind. Wie man aus einem unstrukturierten Problem eine klare Strategie formt. Wie man Corner Cases erkennt, bevor sie knallen. Das sind Fähigkeiten, die überall nützlich sind, nicht nur im Interviewraum.",
          },
          {
            type: "p",
            text: "Auch der Aspekt der Konzentration ist nicht zu unterschätzen. Leetcode zwingt einen, lange bei einer Aufgabe zu bleiben. Man schult den Kopf darin, nicht sofort aufzugeben. Manche Probleme lassen sich nicht schnell lösen. Genau wie im echten Leben. Diese mentale Ausdauer ist ein versteckter Gewinn, den viele unterschätzen.",
          },
          { type: "h3", text: "Der entscheidende Unterschied" },
          {
            type: "p",
            text: "Trotzdem gibt es einen entscheidenden Unterschied, den ich nicht ignorieren kann. In der echten Softwareentwicklung steht das Ziel im Vordergrund. Bei Leetcode steht das Rätsel im Vordergrund. Das ist keine Kleinigkeit. Wer tagelang Leetcode-Probleme löst, wird vielleicht ein besserer Denker. Aber nicht automatisch ein besserer Entwickler.",
          },
          {
            type: "p",
            text: "Wer hingegen echte Anwendungen baut, lernt, mit Zeitdruck, Unklarheiten und Entscheidungen umzugehen. Man lernt Teamkommunikation. Man lernt, wie sich Code langfristig anfühlen muss, damit man ihn warten kann. Diese Dinge sind schwer zu vermitteln. Und sie sind auf keiner Plattform wie Leetcode direkt abgebildet.",
          },
          { type: "h3", text: "Mein Fazit" },
          {
            type: "p",
            text: "Ich sehe Leetcode inzwischen eher als ein Nerd-Spiel für echte Liebhaber. Ein Denkspiel mit klaren Regeln. Man kann sich darin verlieren, wenn man Spaß an logischen Herausforderungen hat. Und ja, man kann sich darin auch extrem verbessern, wenn man sich tief genug hineinkniet. Manche berichten sogar, dass sich dadurch ihr gesamter Blick auf Code verändert hat.",
          },
          {
            type: "p",
            text: "Aber als alleiniger Weg zum besseren Entwickler taugt es meiner Meinung nach nicht. Wer wachsen will, braucht reale Herausforderungen. Feedback aus echten Projekten. Fehler, die echten Schaden anrichten können. Entscheidungen, die Konsequenzen haben.",
          },
          {
            type: "p",
            text: "Ich mache heute beides. Ich löse dann und wann bewusst einige ausgewählte Leetcode-Aufgaben, einfach um im Denken klar zu bleiben. Gleichzeitig baue ich Dinge. Tools, Webseiten, Spiele. Weil ich dort das Gefühl habe, dass das Gelernte bleibt.",
          },
          {
            type: "ul",
            items: [
              "Leetcode ist ein nützliches Trainingsfeld, aber kein Ersatz für reale Praxis.",
              "Wer Interviews bei großen Techfirmen plant, sollte es auf jeden Fall nutzen.",
              "Die Plattform trainiert Konzentration und Analyse, aber keine Teamarbeit und kein Produktdenken.",
              "In der echten Entwicklung geht es nicht um Muster, sondern um Entscheidungen unter Unsicherheit.",
            ],
          },
          {
            type: "p",
            text: "Vielleicht bringt Leetcode dich weiter. Vielleicht auch nicht. Ich denke, es kommt darauf an, wie du es nutzt. Wer es als Werkzeug betrachtet und nicht als Religion, kann davon profitieren. Aber nur wer auch baut, wird wirklich wachsen.",
          },
        ],
      },
      barcodes: {
        title:
          "Von Barcodes zu Kameras: Warum der einfache Weg oft der schwerste ist",
        preview:
          "Alles begann mit einer Idee. Ich wollte eine App zur Literaturverwaltung bauen. " +
          "Einfach, schlank und funktional. Keine KI, keine Kameraspielereien.",
        date: "15. Februar 2025",
        readTime: "ca. 12 Minuten Lesezeit",
        kicker: "Entwicklung",
        imageAlt: "Bücherregal als Konzeptbild für den Barcode-Scanner",
        blocks: [
          {
            type: "p",
            text: "Alles begann mit einer Idee. Ich wollte eine App zur Literaturverwaltung bauen. Einfach, schlank und funktional. Keine Spielereien, keine KI, keine Kameraexperimente. Stattdessen ein klarer Plan: Barcodes scannen, ISBN auslesen, Titel erhalten, fertig. Ganz wie im Supermarkt. Die Kassen dort erkennen ja auch jedes Produkt nur über den Strichcode. Warum also nicht auch Bücher?",
          },
          {
            type: "p",
            text: "Anfangs funktionierte das Konzept in meinem Kopf perfekt. Ich stellte mir Nutzer vor, die ein Buch einscannen, und sofort erscheinen Titel, Autor und Cover. Das Ganze ohne Schnickschnack. Schnell, digital, effizient. Ich baute erste Prototypen, las Spezifikationen zur ISBN und integrierte Testdatenbanken. Ich war optimistisch.",
          },
          {
            type: "p",
            text: "Doch die Realität sah anders aus. Die erste große Hürde: öffentliche Datenbanken. Es stellte sich heraus, dass es zwar APIs wie OpenLibrary oder Google Books gibt, aber die Abdeckung war lückenhaft, veraltet und unvollständig. Selbst moderne Bücher ließen sich teilweise nicht finden. Andere wiederum führten zu völlig falschen Titeln. Die ISBN eines theologischen Buchs ergab plötzlich einen französischen Ratgeber für Pferdehaltung. Ich überprüfte die Nummer dreimal. Es blieb dabei.",
          },
          {
            type: "blockquote",
            text: "Ich dachte mir: Das kann doch nicht sein. In jeder Buchhandlung funktioniert das. Die Kassensysteme dort machen das dutzendfach täglich. Warum nicht hier?",
          },
          {
            type: "p",
            text: "Also telefonierte ich mit Verlagen. Freundliche Menschen, hilfsbereit, aber auch ratlos. Viele Daten seien gar nicht zentral verfügbar. Man müsse Verträge haben, Zugang zu proprietären Datenbanken oder direkt mit Großhändlern wie Libri oder KNV zusammenarbeiten. Ich fragte nach Möglichkeiten und wurde vertröstet. Lizenzen, Kosten, Datenschutz. Kurzum: keine Chance.",
          },
          {
            type: "p",
            text: "Ich entwickelte Workarounds, versuchte, Web-Scraping einzubauen, und stieß auf Captchas, Rate-Limits und JSON-Roulette. Jeder neue Ansatz war ein Schritt in Richtung Frustration. Ich merkte: So würde das nichts. Ich hatte eine Vision, aber die Werkzeuge dazu standen mir nicht offen.",
          },
          { type: "h3", text: "Und dann kam die Kamera" },
          {
            type: "p",
            text: "Zähneknirschend drehte ich mich um. Wenn der Barcode-Weg blockiert war, blieb nur ein Pfad: die Kamera. Ich wollte es erst vermeiden. Zu aufwendig. Zu ungenau. Aber es war die einzige Möglichkeit, das Projekt überhaupt nutzbar zu machen.",
          },
          {
            type: "p",
            text: "Also begann ich, mit Bildanalyse zu arbeiten. Die Nutzer fotografieren das Buchcover und schneiden es zu, und ich nutze Algorithmen, um Titel zu erkennen oder wenigstens die Bildbasis für manuelle Eingaben zu bieten. Der Aufwand war enorm. Aber: Es funktionierte. Nicht perfekt, aber brauchbar. Und viel näher an dem, was in der echten Welt funktioniert.",
          },
          { type: "h3", text: "Was bleibt zurück?" },
          {
            type: "p",
            text: "Rückblickend bin ich froh, dass ich diesen Umweg gegangen bin. Ich habe viel gelernt. Über Metadaten, über Verlage und über den Unterschied zwischen theoretischer Software und der echten Welt. Ich verstehe nun, wie viel in geschlossenen Systemen steckt, das dort so selbstverständlich wirkt.",
          },
          {
            type: "p",
            text: "Was an Supermarktkassen wie Magie aussieht, ist oft ein gut geöltes System voller geschlossener Daten, teurer Verträge und jahrzehntealter Schnittstellen. Dorthin kommt man nicht als Einzelperson mit einer Idee und einer Zeile Code.",
          },
          { type: "h3", text: "Fazit" },
          {
            type: "ul",
            items: [
              "Barcodes liefern in der Praxis oft keine verlässlichen Ergebnisse.",
              "Öffentliche APIs sind lückenhaft und schwer wartbar.",
              "Verlage haben keinen einheitlichen Zugangspunkt für ISBN-Daten.",
              "Die Kamera ist nicht elegant, aber funktional und universell.",
              "Der richtige Weg ist manchmal nicht der direkte, sondern der realistische.",
            ],
          },
          {
            type: "p",
            text: "Und wenn du heute ein Buch fotografierst, damit es in der App erscheint, dann denk daran: Es war nie der Plan. Aber es war der einzige Weg, der wirklich funktioniert hat. Und vielleicht ist das die wichtigste Lektion überhaupt: Mach nicht das, was am einfachsten wirkt. Mach das, was am Ende funktioniert.",
          },
        ],
      },
      debt: {
        title:
          "Warum technische Schuld meine Sicht auf Informatik grundlegend verändert hat",
        preview:
          "Technische Schuld ist ein Begriff, der in der Softwareentwicklung immer wieder " +
          "auftaucht, und doch wird er häufig missverstanden oder verharmlost.",
        date: "29. September 2024",
        readTime: "ca. 12 Minuten Lesezeit",
        kicker: "Reflexion",
        imageAlt: "Symbolbild für technische Schuld",
        blocks: [
          {
            type: "p",
            text: "Technische Schuld ist ein Begriff, der in der Softwareentwicklung immer wieder auftaucht, und doch wird er häufig missverstanden oder verharmlost. Für mich persönlich war die Auseinandersetzung mit technischer Schuld ein Wendepunkt, der meinen Blick auf die Informatik komplett verändert hat. Sie ist kein abstraktes Konzept, sondern ein praktisches Werkzeug, das erklärt, warum viele Projekte scheitern oder stagnieren, und wie man das besser handhaben kann.",
          },
          { type: "h3", text: "Was ist technische Schuld wirklich?" },
          {
            type: "p",
            text: "Technische Schuld entsteht immer dann, wenn pragmatische oder kurzfristige Lösungen implementiert werden, die zwar funktionieren, langfristig aber die Wartbarkeit, Erweiterbarkeit und Qualität eines Systems beeinträchtigen. Das kann zum Beispiel unzureichende Testabdeckung sein, mangelnde Dokumentation, eine monolithische Architektur oder fehlendes Refactoring. Wichtig ist zu verstehen: Technische Schuld ist nicht per se böse oder vermeidbar. Oft ist sie sogar notwendig, um kurzfristig schnell auf Marktanforderungen zu reagieren. Problematisch wird sie erst, wenn sie ignoriert oder nicht systematisch adressiert wird.",
          },
          {
            type: "h3",
            text: "Big-Bang-Umstellungen als Sonderfall technischer Schuld",
          },
          {
            type: "p",
            text: "Ein besonders kritischer Fall technischer Schuld ist die sogenannte Big-Bang-Umstellung. Dabei wird ein System oder ein Projekt in einem großen Schritt komplett umgestellt oder ersetzt, ohne schrittweise Migration. Das Problem dabei: Es entstehen massive Risiken, weil Fehler, fehlende Tests oder unklare Schnittstellen nicht rechtzeitig erkannt werden. Big-Bang-Umstellungen sind oft ein Symptom dafür, dass technische Schuld über Jahre hinweg aufgestaut wurde und das System nicht mehr modular oder wartbar ist. In der Praxis ist es meist besser, auch große Systeme in kleinere, handhabbare Teile zu zerlegen und schrittweise zu migrieren, selbst wenn das nicht immer einfach ist.",
          },
          { type: "h3", text: "TDD als Schlüssel gegen technische Schuld" },
          {
            type: "p",
            text: "Eine der wichtigsten Erkenntnisse für mich war, wie sehr testgetriebene Entwicklung (TDD) technische Schuld begrenzen kann. Durch konsequentes Schreiben von Tests vor dem Code erzwingt TDD sauberen, modularen Code, der leichter zu warten und zu erweitern ist. TDD schafft eine lebendige Dokumentation und erlaubt frühzeitiges Feedback, was technische Schuld schon bei der Entstehung minimiert. Ich habe erlebt, dass Teams mit guter Testkultur deutlich weniger von versteckter technischer Schuld geplagt sind und ihre Projekte deshalb stabiler und planbarer laufen.",
          },
          { type: "h3", text: "Monolithen sind nicht immer die Schuldigen" },
          {
            type: "p",
            text: "Ein weit verbreiteter Mythos ist, dass Monolithen per Definition technische Schuld erzeugen und Microservices die Lösung aller Probleme sind. Diese Sicht ist zu eindimensional. Monolithische Architekturen können sauber, testbar und wartbar sein, gerade wenn sie gut modularisiert und sauber gepflegt werden. Microservices hingegen bringen oft neue Herausforderungen wie verteilte Systeme, komplexe Kommunikation und Deployment-Hürden mit sich. Aber das ist eine Geschichte für ein anderes Mal. Die wichtigste Lehre: Die Architektur muss zur Problemstellung und zum Team passen, nicht jeder Trend ist per se besser.",
          },
          {
            type: "h3",
            text: "Warum es in Deutschland und vielen Unternehmen oft schwierig aussieht",
          },
          {
            type: "p",
            text: "In vielen Unternehmen, besonders in Deutschland, sehe ich häufig, dass Projekte als „abgeschlossen“ gelten, obwohl technische Schuld weiterhin besteht und das Produkt weiter gepflegt wird. Das liegt daran, dass technische Schuld häufig nicht als eigenständiger Lebenszyklus betrachtet wird. Ein Projekt ist eigentlich nie wirklich fertig, sondern lebt, solange das Produkt genutzt wird. Trotzdem sehen viele Firmen ihre Projekte statisch, mit festen Budgets und Zeitplänen, die keinen Raum für kontinuierliche Refaktorierung oder technischen Schuldenabbau lassen. Das führt zu stagnierenden Systemen, hohen Wartungskosten und erschwerten Innovationen.",
          },
          { type: "h3", text: "Fazit" },
          {
            type: "p",
            text: "Die Auseinandersetzung mit technischer Schuld hat meine Sicht auf Softwareentwicklung tief geprägt. TDD ist für mich eine der wirksamsten Methoden, um technische Schuld zu begrenzen. Monolithen sind nicht per se schlecht, oft sind sie sogar die klügere Wahl im Vergleich zu einer wilden Microservice-Landschaft. Big-Bang-Umstellungen sind riskant und symptomatisch für aufgestaute technische Schuld. Und nicht zuletzt zeigt sich: Ein Projekt endet technisch erst, wenn das Produkt eingestellt wird. Für Unternehmen bedeutet das, technische Schuld als festen Teil des Produktlebenszyklus zu akzeptieren und gezielt Ressourcen für deren Management einzuplanen. Nur so lassen sich nachhaltige und robuste Softwareprodukte schaffen.",
          },
        ],
      },
    },

    tags: {
      learning: "persönliche Entwicklung",
      interview: "Vorstellungsgespräch",
      opinion: "eigene Meinung",
      bug: "Bug",
      barcodes: "Barcodes",
      info: "informativ",
      planing: "Planung",
    },
  },

  // Download Section
  download: {
    title: "Demid Krom",
    subtitle: "Lebenslauf Download",
    heading: "Mein Lebenslauf",
    description:
      "Laden Sie meinen aktuellen deutschen Lebenslauf als PDF herunter. Erfahren Sie mehr über meine Erfahrungen und Qualifikationen.",
    fileInfo: {
      type: "Dateityp:",
      size: "Größe:",
      typeValue: "PDF",
      sizeValue: "~2,1 MB",
    },
    button: "Lebenslauf herunterladen",
    footer: "Klicken zum Herunterladen • Öffnet in neuem Tab",
  },

  // Downloads Section Heading
  downloads: {
    title: "Downloads",
    subtitle: "Lebenslauf, Zertifikate und Referenzen",
  },

  // Certificates Card
  certificates: {
    title: "Zertifikate & Kurse",
    subtitle: "Weiterbildung",
    heading: "Zertifikate herunterladen",
    description:
      "Alle besuchten Kurse und erhaltenen Zertifikate. Nachweis für kontinuierliche Weiterbildung und Kompetenzentwicklung.",
    fileInfo: {
      type: "Format",
      size: "Größe",
      typeValue: "PDF",
      sizeValue: "~590 KB",
    },
    button: "Herunterladen",
    footer: "Sammlung aller Weiterbildungszertifikate",
  },

  // Reference Card
  reference: {
    title: "Arbeitszeugnis",
    subtitle: "Aktuelle Referenz",
    heading: "Arbeitszeugnis herunterladen",
    description:
      "Mein aktuelles Arbeitszeugnis mit bestätigten Bewertungen und Referenzen. Einblick in meine berufliche Entwicklung und Fähigkeiten.",
    fileInfo: {
      type: "Format",
      size: "Größe",
      typeValue: "PDF",
      sizeValue: "~120 KB",
    },
    button: "Herunterladen",
    footer: "Vertrauliches Dokument nur für Bewerbungszwecke",
  },

  // Footer
  footer: {
    description:
      "DevOps / Platform Engineer mit Leidenschaft für zuverlässige Infrastruktur und Automatisierung.",
    quickLinks: "Schnelllinks",
    services: "Dienstleistungen",
    servicesList: {
      webDev: "CI/CD & Automatisierung",
      mobileApp: "Cloud-Infrastruktur",
      uiux: "Container & Kubernetes",
      consulting: "Beratung",
    },
    contact: "Kontaktinfo",
    social: "Folgen Sie mir",
    funfacts: {
      title: "Funfacts",
      item1: "Lieblingsmanga: Death Note",
      item2: "Eat. Sleep. Code. Repeat.",
      item3: "TypeScript? Immer.",
    },
    newsletter: {
      title: "Newsletter",
      description: "Abonnieren Sie Updates zu meinen neuesten Projekten",
      placeholder: "Geben Sie Ihre E-Mail ein",
      subscribe: "Abonnieren",
      success: "Erfolgreich abonniert!",
      error: "Abonnement fehlgeschlagen. Bitte versuchen Sie es erneut.",
    },
    rights: "Alle Rechte vorbehalten",
    builtWith: "Erstellt mit React & Tailwind CSS",
    madeWith: "Gemacht mit ❤️ von",
  },

  // Fire easter egg
  fire: {
    alarm: {
      line1: "FEUER",
      line2: "MELDER",
      hintIdle: "Im Brandfall Scheibe einschlagen",
      hintHits: "Noch {count}× schlagen",
      hintPress: "Knopf drücken",
      hintUrgent: "JETZT DRÜCKEN!",
      button: "DRÜCKEN",
      ariaBreak: "Scheibe einschlagen",
      ariaExtinguish: "Feuer löschen",
    },
    gameOver: {
      message:
        "Du herzloses Monster hast meinem Portfolio beim Abbrennen zugeschaut und gar nichts unternommen. Herzlos, einfach herzlos.",
      rebuild: "Wiederaufbau in {seconds}s …",
    },
  },
};
