/**
 * Single source of truth for all UI copy. Keep both `en` and `fr` shapes
 * structurally identical so TypeScript can enforce parity.
 *
 * Pricing is in Tunisian Dinar (TND). The numeric strings use a thin
 * thousand separator that is appropriate per locale.
 */

export type Lang = "en" | "fr";

export type Dictionary = {
  nav: {
    services: string;
    packages: string;
    process: string;
    portfolio: string;
    about: string;
    cta: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    titleC: string;
    sub: string;
    ctaPrimary: string;
    ctaWa: string;
    stats: { projects: string; leads: string; sat: string };
  };
  marquee: string[];
  packages: {
    tag: string;
    titleA: string;
    titleB: string;
    sub: string;
    priceNote: string;
    cta: string;
    badge: string;
    items: {
      starter: { name: string; desc: string; price: string; features: string[] };
      growth: { name: string; desc: string; price: string; features: string[] };
      business: {
        name: string;
        desc: string;
        price: string;
        features: string[];
      };
    };
  };
  process: {
    tag: string;
    title: string;
    steps: { title: string; desc: string }[];
  };
  projects: {
    tag: string;
    titleA: string;
    titleB: string;
    viewAll: string;
    problemLabel: string;
    builtLabel: string;
    viewProject: string;
    items: {
      drivelux: {
        tag: string;
        name: string;
        problem: string;
        built: string;
        result: string;
      };
      elite: {
        tag: string;
        name: string;
        problem: string;
        built: string;
        result: string;
      };
    };
  };
  testimonials: {
    tag: string;
    title: string;
    items: {
      quote: string;
      initials: string;
      name: string;
      role: string;
    }[];
  };
  about: {
    tag: string;
    title: string;
    sub: string;
    features: { icon: string; title: string; desc: string }[];
    deliverTitle: string;
    metrics: { label: string; value: number }[];
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
  };
  cta: {
    tag: string;
    titleA: string;
    titleB: string;
    sub: string;
    schedule: string;
    openCalendly: string;
    whatsapp: string;
    fallback: { title: string; sub: string; envHint: string };
  };
  footer: {
    tagline: string;
    quickLinks: string;
    servicesH: string;
    contact: string;
    copyright: string;
    slogan: string;
    phoneDisplay: string;
    quick: { home: string; services: string; process: string; portfolio: string; about: string };
    services: { web: string; leadgen: string; automation: string; seo: string };
  };
};

const en: Dictionary = {
  nav: {
    services: "Services",
    packages: "Packages",
    process: "Process",
    portfolio: "Portfolio",
    about: "About",
    cta: "Book a Free Call",
    langLabel: "Language",
  },
  hero: {
    eyebrow: "B2B Web Solutions That Drive Results",
    titleA: "Get a Website That",
    titleEm: "Books Clients",
    titleC: "While You Sleep.",
    sub: "We build high-converting websites and systems for B2B businesses — designed to attract, engage, and convert your ideal clients automatically.",
    ctaPrimary: "Book Your Free Strategy Call",
    ctaWa: "Chat on WhatsApp",
    stats: {
      projects: "Projects Delivered",
      leads: "Avg. Lead Increase",
      sat: "Client Satisfaction",
    },
  },
  marquee: [
    "Conversion-Focused Design",
    "WhatsApp Integration",
    "Lead Generation Systems",
    "SEO Optimization",
    "Advanced Automation",
    "Booking & Calendar Systems",
    "Analytics & Tracking",
  ],
  packages: {
    tag: "Packages Made to Get Results",
    titleA: "Simple Packages.",
    titleB: "Real Impact.",
    sub: "Everything your B2B business needs to attract and convert clients — built by experts who understand growth.",
    priceNote: "One-time payment",
    cta: "Get Started",
    badge: "Most Popular",
    items: {
      starter: {
        name: "Starter Launch",
        desc: "Perfect for businesses getting online for the first time.",
        price: "890 TND",
        features: [
          "Up to 5 Pages",
          "Mobile Responsive Design",
          "Contact + WhatsApp Integration",
          "Basic SEO Setup",
          "7–10 Days Delivery",
        ],
      },
      growth: {
        name: "Growth Engine",
        desc: "Everything you need to generate leads and grow consistently.",
        price: "1,690 TND",
        features: [
          "Up to 10 Pages",
          "Conversion-Focused Design",
          "WhatsApp + Lead Forms",
          "Basic Automation Setup",
          "SEO Optimization",
          "10–15 Days Delivery",
        ],
      },
      business: {
        name: "Business System",
        desc: "A complete system to attract, convert, and automate.",
        price: "2,990 TND",
        features: [
          "Up to 15 Pages",
          "Custom Design + Strategy",
          "Advanced Automation",
          "Booking/Calendar Integration",
          "Analytics + Tracking Setup",
          "15–20 Days Delivery",
        ],
      },
    },
  },
  process: {
    tag: "Our Process",
    title: "A Simple 4-Step Process That Delivers Results",
    steps: [
      {
        title: "Strategy",
        desc: "We understand your business, audience, and goals to create the right plan.",
      },
      {
        title: "Design",
        desc: "We design a clean, modern, and conversion-focused experience.",
      },
      {
        title: "Build",
        desc: "We build a fast, secure, and scalable website that works perfectly.",
      },
      {
        title: "Launch",
        desc: "We test, optimize, and launch your site — ready to attract your first clients.",
      },
    ],
  },
  projects: {
    tag: "Recent Projects",
    titleA: "Real Problems.",
    titleB: "Real Solutions.",
    viewAll: "View All Projects →",
    problemLabel: "The Problem",
    builtLabel: "What We Built",
    viewProject: "View Project",
    items: {
      drivelux: {
        tag: "Car Rental",
        name: "DriveLux Car Rental",
        problem:
          "No website presence, losing bookings to competitors with no digital footprint.",
        built:
          "A booking website with WhatsApp integration and clear reservation flow.",
        result: "4× more inquiries in the first month",
      },
      elite: {
        tag: "Healthcare",
        name: "Elite Dental Clinic",
        problem:
          "Online presence existed but clients couldn't book appointments easily.",
        built:
          "A complete website with online booking and automated confirmations.",
        result: "60% more appointments in 30 days",
      },
    },
  },
  testimonials: {
    tag: "What Clients Say",
    title: "Results That Speak for Themselves",
    items: [
      {
        quote:
          "Motion built a website that brought us more leads in the first month than we got in the last 6 months. Incredible results, fast delivery.",
        initials: "KB",
        name: "Karim B.",
        role: "CEO, DriveLux",
      },
      {
        quote:
          "Professional, fast, and truly focused on results. Our bookings increased dramatically after just one month with Motion.",
        initials: "SM",
        name: "Sara M.",
        role: "Clinic Manager",
      },
    ],
  },
  about: {
    tag: "About Motion",
    title: "We Build Systems That Grow Businesses.",
    sub: "Motion is a B2B web agency helping businesses go online and get more clients. Every project starts with a clear strategy — we help you attract the right visitors, convert them into leads, and automate follow-up.",
    features: [
      {
        icon: "🎯",
        title: "Strategy First",
        desc: "Every project begins with understanding your business goals and target clients.",
      },
      {
        icon: "⚡",
        title: "Results Focused",
        desc: "We measure success by the leads and bookings your website generates.",
      },
      {
        icon: "🤝",
        title: "Long-Term Partner",
        desc: "We build lasting partnerships so you can focus on running your business.",
      },
    ],
    deliverTitle: "What We Deliver",
    metrics: [
      { label: "Lead Generation", value: 95 },
      { label: "Conversion Rate Optimization", value: 88 },
      { label: "Speed & Performance", value: 99 },
      { label: "Client Satisfaction", value: 98 },
    ],
    stat1: { value: "50+", label: "Websites Launched" },
    stat2: { value: "3×", label: "Avg Lead Increase" },
  },
  cta: {
    tag: "Let's Get Your Business Online",
    titleA: "Book Your Free",
    titleB: "Strategy Call",
    sub: "Tell us about your business and let's build a plan that gets you real clients. Quick response · No obligation · Results focused.",
    schedule: "Schedule Your Call",
    openCalendly: "Open Calendly in a New Tab",
    whatsapp: "WhatsApp Us",
    fallback: {
      title: "Calendly booking goes here",
      sub: "Add your Calendly link in",
      envHint: "to enable inline booking:",
    },
  },
  footer: {
    tagline:
      "We help businesses go online and turn visitors into paying clients.",
    quickLinks: "Quick Links",
    servicesH: "Services",
    contact: "Contact",
    copyright: "© 2026 Motion Agency. All rights reserved.",
    slogan: "Websites that turn attention into clients.",
    phoneDisplay: "+216 24 146 409",
    quick: {
      home: "Home",
      services: "Services",
      process: "Process",
      portfolio: "Portfolio",
      about: "About",
    },
    services: {
      web: "Web Design",
      leadgen: "Lead Generation",
      automation: "Automation",
      seo: "SEO",
    },
  },
};

const fr: Dictionary = {
  nav: {
    services: "Services",
    packages: "Offres",
    process: "Processus",
    portfolio: "Réalisations",
    about: "À propos",
    cta: "Réserver un appel gratuit",
    langLabel: "Langue",
  },
  hero: {
    eyebrow: "Solutions Web B2B qui Génèrent des Résultats",
    titleA: "Un site web qui",
    titleEm: "vous trouve des clients",
    titleC: "pendant que vous dormez.",
    sub: "Nous concevons des sites web et des systèmes à forte conversion pour les entreprises B2B — pensés pour attirer, engager et convertir automatiquement vos clients idéaux.",
    ctaPrimary: "Réservez votre appel stratégique gratuit",
    ctaWa: "Discuter sur WhatsApp",
    stats: {
      projects: "Projets livrés",
      leads: "Augmentation moyenne des leads",
      sat: "Satisfaction client",
    },
  },
  marquee: [
    "Design orienté conversion",
    "Intégration WhatsApp",
    "Systèmes de génération de leads",
    "Optimisation SEO",
    "Automatisation avancée",
    "Réservation & calendrier",
    "Analytique & tracking",
  ],
  packages: {
    tag: "Des offres pensées pour les résultats",
    titleA: "Des offres simples.",
    titleB: "Un impact réel.",
    sub: "Tout ce dont votre entreprise B2B a besoin pour attirer et convertir des clients — par des experts qui comprennent la croissance.",
    priceNote: "Paiement unique",
    cta: "Commencer",
    badge: "Plus populaire",
    items: {
      starter: {
        name: "Lancement Starter",
        desc: "Idéal pour les entreprises qui se mettent en ligne pour la première fois.",
        price: "890 TND",
        features: [
          "Jusqu'à 5 pages",
          "Design responsive mobile",
          "Contact + intégration WhatsApp",
          "SEO de base",
          "Livraison en 7–10 jours",
        ],
      },
      growth: {
        name: "Moteur de Croissance",
        desc: "Tout ce qu'il vous faut pour générer des leads et croître régulièrement.",
        price: "1 690 TND",
        features: [
          "Jusqu'à 10 pages",
          "Design orienté conversion",
          "WhatsApp + formulaires de leads",
          "Automatisation de base",
          "Optimisation SEO",
          "Livraison en 10–15 jours",
        ],
      },
      business: {
        name: "Système Business",
        desc: "Un système complet pour attirer, convertir et automatiser.",
        price: "2 990 TND",
        features: [
          "Jusqu'à 15 pages",
          "Design + stratégie sur mesure",
          "Automatisation avancée",
          "Intégration calendrier/réservation",
          "Analytique + tracking",
          "Livraison en 15–20 jours",
        ],
      },
    },
  },
  process: {
    tag: "Notre processus",
    title: "Un processus simple en 4 étapes pour des résultats concrets",
    steps: [
      {
        title: "Stratégie",
        desc: "Nous comprenons votre activité, votre audience et vos objectifs pour bâtir le bon plan.",
      },
      {
        title: "Design",
        desc: "Nous concevons une expérience moderne, claire et orientée conversion.",
      },
      {
        title: "Développement",
        desc: "Nous développons un site rapide, sécurisé et scalable qui fonctionne parfaitement.",
      },
      {
        title: "Lancement",
        desc: "Nous testons, optimisons et lançons votre site — prêt à attirer vos premiers clients.",
      },
    ],
  },
  projects: {
    tag: "Projets récents",
    titleA: "Des problèmes réels.",
    titleB: "Des solutions réelles.",
    viewAll: "Voir tous les projets →",
    problemLabel: "Le problème",
    builtLabel: "Ce que nous avons construit",
    viewProject: "Voir le projet",
    items: {
      drivelux: {
        tag: "Location de voitures",
        name: "DriveLux Car Rental",
        problem:
          "Aucune présence en ligne, des réservations perdues face à des concurrents sans empreinte digitale.",
        built:
          "Un site de réservation avec intégration WhatsApp et un parcours de réservation clair.",
        result: "4× plus de demandes le premier mois",
      },
      elite: {
        tag: "Santé",
        name: "Elite Dental Clinic",
        problem:
          "Une présence en ligne existait, mais les clients ne pouvaient pas prendre rendez-vous facilement.",
        built:
          "Un site complet avec réservation en ligne et confirmations automatisées.",
        result: "60 % de rendez-vous en plus en 30 jours",
      },
    },
  },
  testimonials: {
    tag: "Ce que disent les clients",
    title: "Des résultats qui parlent d'eux-mêmes",
    items: [
      {
        quote:
          "Motion a construit un site qui nous a apporté plus de leads en un mois qu'au cours des 6 derniers. Des résultats incroyables, livrés rapidement.",
        initials: "KB",
        name: "Karim B.",
        role: "CEO, DriveLux",
      },
      {
        quote:
          "Professionnels, rapides, et vraiment focalisés sur les résultats. Nos réservations ont explosé après un seul mois avec Motion.",
        initials: "SM",
        name: "Sara M.",
        role: "Responsable de clinique",
      },
    ],
  },
  about: {
    tag: "À propos de Motion",
    title: "Nous bâtissons des systèmes qui font croître les entreprises.",
    sub: "Motion est une agence web B2B qui aide les entreprises à se mettre en ligne et à acquérir plus de clients. Chaque projet commence par une stratégie claire — nous attirons les bons visiteurs, les convertissons en leads et automatisons le suivi.",
    features: [
      {
        icon: "🎯",
        title: "La stratégie d'abord",
        desc: "Chaque projet commence par la compréhension de vos objectifs et de vos clients cibles.",
      },
      {
        icon: "⚡",
        title: "Orientés résultats",
        desc: "Nous mesurons le succès aux leads et aux réservations que votre site génère.",
      },
      {
        icon: "🤝",
        title: "Partenaire long terme",
        desc: "Nous construisons des partenariats durables pour que vous puissiez vous concentrer sur votre activité.",
      },
    ],
    deliverTitle: "Ce que nous livrons",
    metrics: [
      { label: "Génération de leads", value: 95 },
      { label: "Optimisation du taux de conversion", value: 88 },
      { label: "Vitesse & performance", value: 99 },
      { label: "Satisfaction client", value: 98 },
    ],
    stat1: { value: "50+", label: "Sites lancés" },
    stat2: { value: "3×", label: "Augmentation moyenne des leads" },
  },
  cta: {
    tag: "Mettons votre entreprise en ligne",
    titleA: "Réservez votre",
    titleB: "appel stratégique gratuit",
    sub: "Parlez-nous de votre activité et bâtissons un plan qui vous amène de vrais clients. Réponse rapide · Sans engagement · Orienté résultats.",
    schedule: "Planifier votre appel",
    openCalendly: "Ouvrir Calendly dans un nouvel onglet",
    whatsapp: "Nous écrire sur WhatsApp",
    fallback: {
      title: "Réservation Calendly à venir",
      sub: "Ajoutez votre lien Calendly dans",
      envHint: "pour activer la réservation intégrée :",
    },
  },
  footer: {
    tagline:
      "Nous aidons les entreprises à passer en ligne et à transformer les visiteurs en clients payants.",
    quickLinks: "Liens rapides",
    servicesH: "Services",
    contact: "Contact",
    copyright: "© 2026 Motion Agency. Tous droits réservés.",
    slogan: "Des sites web qui transforment l'attention en clients.",
    phoneDisplay: "+216 24 146 409",
    quick: {
      home: "Accueil",
      services: "Services",
      process: "Processus",
      portfolio: "Réalisations",
      about: "À propos",
    },
    services: {
      web: "Conception web",
      leadgen: "Génération de leads",
      automation: "Automatisation",
      seo: "SEO",
    },
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, fr };
