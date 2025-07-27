export interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const servicesData: Service[] = [
  {
    title: 'Portas de Abertura Automática',
    description: 'Abertura por meio de sistemas de interfonia, fechos eletromagnéticos acionados via botoeiras ou via controle de acesso.',
    image: 'assets/images/portas-abertura.svg',
    link: '/servicos/portas-abertura-automatica'
  },
  {
    title: 'Porteiro eletrônico e sistema de comunicação predial',
    description: 'Sistema de interfonia com câmera instalada para visualizar quem está tocando o interfone e instalação de interfones em residências e prédios.',
    image: 'assets/images/porteiro-eletronico.svg',
    link: '/servicos/porteiro-eletronico'
  },
  {
    title: 'Portões Automatizados',
    description: 'Instalação de Movimentadores Deslizantes ou Basculantes acionados por controle remoto. Ajustes em serralheria para instalação ou adaptação dos movimentadores.',
    image: 'assets/images/portoes.svg',
    link: '/servicos/portoes-automatizados'
  },
  {
    title: 'Iluminação de Emergência',
    description: 'Centrais munidas de baterias que acionam lâmpadas LED para iluminação em caso de falta de energia elétrica.',
    image: 'assets/images/iluminacao.svg',
    link: '/servicos/iluminacao-emergencia'
  },
  {
    title: 'Alarmes',
    description: 'Sistemas compostos de sensores infravermelho ou magnéticos que monitoram portas, portões e aberturas em geral. Muitos com a possibilidade de configurar avisos via SMS.',
    image: 'assets/images/alarmes.svg',
    link: '/servicos/alarmes'
  },
  {
    title: 'Cancelas Automáticas',
    description: 'Controle de acesso veicular em condomínios e prédios comerciais.',
    image: 'assets/images/cancelas.svg',
    link: '/servicos/cancelas-automaticas'
  },
  {
    title: 'Sistema de Monitoramento',
    description: 'Sistemas de Monitoramento com DVR e câmeras, visualização via monitor ou smartphone. Inclui CFTV (Circuito Fechado de TV).',
    image: 'assets/images/monitoramento.svg',
    link: '/servicos/monitoramento'
  },
  {
    title: 'Controle de Acesso',
    description: 'Acesso por chaveiros, cartões e TAG veicular. Integra cadastro com a portaria e armazena dados dos moradores.',
    image: 'assets/images/controle-acesso.svg',
    link: '/servicos/controle-de-acesso'
  },
  {
    title: 'Cercas Elétricas',
    description: 'Cercamento do perímetro com fios elétricos ligados a uma central que gera pulsos de alta tensão, impedindo acesso de invasores.',
    image: 'assets/images/cercas.svg',
    link: '/servicos/cercas-eletricas'
  },
  {
    title: 'Nobreak',
    description: 'Usado em sistemas como CFTV, movimentadores e portas automáticas, para garantir funcionamento mesmo sem energia elétrica.',
    image: 'assets/images/nobreak.svg',
    link: '/servicos/nobreak'
  }
];
