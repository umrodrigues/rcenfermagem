export const SEO_CONFIG = {
  site: {
    name: 'RC Enfermagem Para Você',
    url: 'https://rcenfermagemparavoce.com.br',
    description: 'Oferecemos serviços especializados em enfermagem com qualidade, segurança e humanização. Consulta de enfermagem, procedimentos, atendimento domiciliar, teleconsulta, laserterapia e mais.',
    keywords: [
      'enfermagem',
      'consulta de enfermagem',
      'atendimento domiciliar',
      'teleconsulta',
      'procedimentos de enfermagem',
      'cuidados de saúde',
      'enfermeiro',
      'Porto Alegre',
      'laserterapia',
      'tratamento de lesões',
      'administração de medicamentos',
      'atendimento capilar',
      'RC educação',
      'ozonioterapia',
      'consultoria amamentação'
    ],
    locale: 'pt_BR',
    type: 'website',
    image: '/images/backgrounds/fundo1.jpeg',
    logo: '/logo.png',
  },

  contact: {
    email: 'contato@rcenfermagemparavoce.com.br',
    phone: ['+55-51-98416-3243', '+55-51-99782-2982'],
    address: {
      street: 'Rua Ramiro Barcelos, 630/1310',
      city: 'Porto Alegre',
      state: 'RS',
      postalCode: '90035-001',
      country: 'BR'
    },
    coordinates: {
      latitude: -30.0346,
      longitude: -51.2177
    },
    hours: 'Mo-Fr 08:00-18:00'
  },

  professionals: [
    {
      name: 'Grasiele Costa Rodrigues',
      title: 'Enfermeira',
      description: 'Mestranda em enfermagem pela UFCSPA, especialista em urgência, emergência e trauma, auditoria em saúde, DRG e enfermagem dermatológica.'
    },
    {
      name: 'Lucio Rodrigo Lucca de Camargo',
      title: 'Enfermeiro',
      description: 'Mestre em Reabilitação e Inclusão, especialista em Auditoria em Saúde.'
    }
  ],

  services: [
    {
      name: 'Consulta de Enfermagem',
      description: 'Avaliação completa e personalizada com foco na prevenção, promoção da saúde e bem-estar.',
      slug: 'consulta-de-enfermagem'
    },
    {
      name: 'Atendimento Domiciliar',
      description: 'Cuidados especializados no conforto do seu lar, com toda a segurança e profissionalismo.',
      slug: 'atendimento-domiciliar'
    },
    {
      name: 'Laserterapia',
      description: 'Tratamento avançado com laser para lesões, feridas e problemas de pele com tecnologia de ponta.',
      slug: 'laserterapia'
    },
    {
      name: 'Ozonioterapia',
      description: 'Tratamento com ozônio para diversas condições de saúde.',
      slug: 'ozonioterapia'
    },
    {
      name: 'Consultoria em Amamentação',
      description: 'Apoio especializado para mães durante o processo de amamentação.',
      slug: 'consultoria-amamentacao'
    }
  ],

  social: {
    facebook: 'https://www.facebook.com/rcenfermagemparavoce',
    instagram: 'https://www.instagram.com/rcenfermagemparavoce',
    linkedin: 'https://www.linkedin.com/company/rc-enfermagem-para-voce'
  },

  analytics: {
    googleAnalytics: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
    googleTagManager: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX',
    facebookPixel: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || 'YOUR_PIXEL_ID',
    linkedinInsight: process.env.NEXT_PUBLIC_LINKEDIN_ID || 'YOUR_LINKEDIN_ID',
    hotjar: process.env.NEXT_PUBLIC_HOTJAR_ID || 'YOUR_HOTJAR_ID',
    googleOptimize: process.env.NEXT_PUBLIC_GOOGLE_OPTIMIZE_ID || 'OPT-XXXXXXXX'
  },

  verification: {
    google: 'google1234567890abcdef',
    bing: 'BING_VERIFICATION_CODE',
    yandex: 'YANDEX_VERIFICATION_CODE'
  },

  sitemap: {
    priority: {
      home: 1.0,
      services: 0.9,
      serviceDetail: 0.8,
      about: 0.7,
      testimonials: 0.7,
      contact: 0.8,
      team: 0.6,
      privacy: 0.3,
      terms: 0.3
    },
    changeFreq: {
      home: 'weekly',
      services: 'weekly',
      serviceDetail: 'monthly',
      about: 'monthly',
      testimonials: 'weekly',
      contact: 'monthly',
      team: 'monthly',
      privacy: 'yearly',
      terms: 'yearly'
    }
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'RC Enfermagem Para Você'
  },

  twitter: {
    card: 'summary_large_image',
    site: '@rcenfermagem'
  },

  robots: {
    userAgent: '*',
    allow: '/',
    disallow: [
      '/private/',
      '/admin/',
      '/api/',
      '/_next/',
      '/node_modules/',
      '/.git/',
      '/.env'
    ]
  }
}

export const getFullUrl = (path: string): string => {
  return `${SEO_CONFIG.site.url}${path}`
}

export const getPageTitle = (title: string): string => {
  return `${title} - ${SEO_CONFIG.site.name}`
}

export const getPageDescription = (description: string): string => {
  return `${description} ${SEO_CONFIG.site.description}`
}

export const getPageKeywords = (keywords: string[]): string => {
  return [...keywords, ...SEO_CONFIG.site.keywords].join(', ')
}
