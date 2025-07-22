export const menuMock = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Empresa',
    subItems: [
      { label: 'Quem Somos', href: '#' },
      { label: 'Consultório', href: '#' },
    ],
  },
  {
    label: 'Serviços',
    href: '/servicos',
    subItems: [
      { label: 'Consulta de enfermagem', href: '/servicos/consulta-de-enfermagem' },
      { label: 'Procedimentos de enfermagem', href: 'servicos/procedimentos-de-enfermagem' },
      { label: 'Atendimento Domiciliar', href: '/servicos/atendimento-domiciliar' },
      { label: 'Administração de medicamentos', href: '/servicos/adminstracao-de-medicamentos' },

    ],
  },
  {
    label: 'Depoimentos',
    href: '/depoimentos',
  },
  {
    label: 'Contato',
    href: '/contato',
  },
];
