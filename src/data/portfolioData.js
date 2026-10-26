export const PROFILE = {
  name: 'Nelxie Adisso',
  role: 'Ingénieure Machine Learning',
  location: 'Calavi, Bénin',
  email: 'steenaadisso@gmail.com',
  phone: '+229 01 57 17 21 60',
  bio: "Je conçois des solutions d'intelligence artificielle avec une conviction : la technologie doit servir ceux qu'elle oublie trop souvent. Diplômée d'une licence en IA et certifiée Machine Learning Engineer, je veux rendre la technologie accessible à ceux qui restent en marge du numérique.",
  tagline: "La technologie doit servir ceux qu'elle oublie trop souvent.",
  status: 'Ouverte aux opportunités · 2026',
}

export const EXPERIENCE = [
  {
    role: 'ML Developer',
    company: 'Tamebi AI',
    period: 'Mai 2026 – Oct. 2026',
    current: false,
    bullets: [
      'Conception et développement de solutions open source.',
      "Conception de produits numériques et contribution à l'identité visuelle et au développement de la marque et des services Tamebi AI.",
    ],
  },
  {
    role: 'Développeuse IA',
    company: 'Becotrac Re (Assurances)',
    period: 'Juin 2025 – Janv. 2026',
    current: false,
    bullets: [
      "Conception et déploiement de solutions d'automatisation basées sur l'IA pour le secteur de l'assurance, plus précisément l'assurance paramétrique : modèles intelligents, chatbots et automatisation des processus métier.",
    ],
  },
  {
    role: 'Contributeur en Recherche et Développement IA',
    company: 'FRIARE',
    period: 'Juil. 2024 – Présent',
    current: true,
    bullets: [
      'Suivi des avancées et tendances en intelligence artificielle, machine learning et technologies émergentes.',
      "Analyse et expérimentation de nouvelles technologies et outils IA ; identification des innovations pertinentes pour les projets de R&D.",
    ],
  },
]

export const PROJECTS = [
  {
    slug: 'healthyguard',
    name: 'HealthyGuard',
    subtitle: "Audit d'éthique et de fiabilité des chatbots de santé",
    links: [
      { label: 'PyPI', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
    tags: ['Python', 'Open Source', 'MIT', 'v0.1.1', 'Santé'],
    description:
      "Package Python open source (v0.1.1, licence MIT) qui permet aux développeurs et aux acteurs techniques de la santé de vérifier que leurs chatbots santé sont éthiques et fiables avant publication.",
    status: 'phare',
  },
  {
    slug: 'equinox',
    name: 'EQUINOX',
    subtitle: "Système intelligent d'accompagnement des travaux de groupes",
    links: [{ label: 'equi-nox.vercel.app', href: 'https://equi-nox.vercel.app/' }],
    tags: ['IA', 'Analyse audio', 'NLP', 'Collaboration'],
    description:
      "Conception d'un système intelligent dédié à l'analyse des réunions de travail afin d'améliorer l'efficacité des collaborations en groupe.",
    status: 'phare',
  },
]

export const ACCOMPLISHMENTS = [
  {
    rank: '1ʳᵉ',
    title: 'Hack the Media, SENUM',
    date: 'Novembre 2025',
    description: "Développement d'une IA détectrice de fausses nouvelles (fake news).",
  },
  {
    rank: '1ʳᵉ',
    title: 'Women Techmakers Hackathon, Bénin',
    date: 'Avril 2025',
    description:
      "Co-développement d'une application mobile de santé vocale en langues locales aidant les personnes analphabètes à identifier leurs médicaments et comprendre les dosages.",
  },
  {
    rank: '4ᵉ',
    title: 'IndabaX Challenge (Zindi)',
    date: 'Juillet 2024',
    description:
      'Machine learning pour détecter les transactions frauduleuses sur une plateforme de cryptomonnaie.',
  },
  {
    rank: '2ᵉ',
    title: 'Multimodal & Multilingual AI Challenge, Bénin',
    date: 'Mai 2024',
    description:
      "Système d'IA qui lit et transforme en audio des textes imprimés en langues locales pour les personnes non alphabétisées.",
  },
]

export const SKILLS = {
  languages: ['Python', 'C/C++', 'Java', 'Rust'],
  machine_learning: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'LLaMa', 'RAG'],
  backend: ['FastAPI', 'SQL', 'NoSQL'],
  frontend: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJs', 'VueJs'],
  tools: ['Docker', 'GitHub', 'Gradio', 'PySpark'],
}

export const EDUCATION = [
  {
    title: 'Bachelor Engineering in AI',
    place: "Université d'Abomey-Calavi (UAC), Calavi",
    period: '2022 – 2026',
    description:
      'Spécialisation en statistiques appliquées, machine learning, deep learning, NLP, vision par ordinateur, et projets pratiques certifiants.',
  },
]

export const CERTIFICATIONS = [
  {
    name: 'Machine Learning Engineer',
    issuer: 'Isheero',
    link: 'https://drive.google.com/file/d/1B_BKRXYM9HV3EbVrZTiIM9QiTIDoYaSN/view?usp=sharing',
  },
  {
    name: "Éthique et gouvernance de l'IA pour la santé",
    issuer: 'OMS',
    link: '#',
    description:
      "Réglementation et conformité de la santé numérique ; éthique des technologies et protection des données de santé ; enjeux de l'intégration de l'IA dans le parcours de soin.",
  },
]

export const LANGUAGES = [
  { lang: 'Français', level: 'natif' },
  { lang: 'Anglais', level: 'courant' },
  { lang: 'Fon', level: 'natif' },
]

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/CrazyXXi' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nelxie-adisso-♡-99b1a4258' },
  { label: 'Discord', href: '#' },
]

export const REFERENCES = [
  {
    name: 'Danielle ASSOGBA',
    role: 'Cloud Engineer & Lead du Lab',
    company: 'Tamebi AI',
    email: 'danielle@tamebi.ai',
  },
]
