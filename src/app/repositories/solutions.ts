export interface Solution {
  title: string;
  description: string;
  image: string;
}

export const solutionsData: Solution[] = [
  {
    title: 'Portas de Abertura Automática',
    description: 'Abertura por meio de sistemas de interfonia, fechos eletromagnéticos acionados via botoeiras ou via controle de acesso.',
    image: '/images/porta-automatica.webp',
  },
  {
    title: 'Porteiro eletrônico e Interfones',
    description: 'Sistema de interfonia com câmera instalada para visualizar quem está tocando o interfone e instalação de interfones em residências e prédios.',
    image: '/images/interfone.webp',
  },
  {
    title: 'Portões Automatizados',
    description: 'Instalação de Movimentadores Deslizantes ou Basculantes acionados por controle remoto. Ajustes em serralheria para instalação ou adaptação dos movimentadores.',
    image: '/images/portao-eletronico.webp'
  },
  {
    title: 'Iluminação de Emergência',
    description: 'Centrais munidas de baterias que acionam lâmpadas LED para iluminação em caso de falta de energia elétrica.',
    image: '/images/iluminacao-emergencia.webp'
  },
  {
    title: 'Alarmes',
    description: 'Sistemas compostos de sensores infravermelho ou magnéticos que monitoram portas, portões e aberturas em geral. Muitos com a possibilidade de configurar avisos via SMS.',
    image: '/images/alarme.webp'
  },
  {
    title: 'Cancelas Automáticas',
    description: 'Controle de acesso veicular em condomínios e prédios comerciais.',
    image: '/images/cancela-automatica.webp'
  },
  {
    title: 'Sistema de Monitoramento',
    description: 'Sistemas de Monitoramento com DVR e câmeras, visualização via monitor ou smartphone. Inclui CFTV (Circuito Fechado de TV).',
    image: '/images/monitoramento.webp'
  },
  {
    title: 'Controle de Acesso',
    description: 'Acesso por chaveiros, cartões e TAG veicular. Integra cadastro com a portaria e armazena dados dos moradores.',
    image: '/images/controle-acesso.webp'
  },
  {
    title: 'Cercas Elétricas',
    description: 'Cercamento do perímetro com fios elétricos ligados a uma central que gera pulsos de alta tensão, impedindo acesso de invasores.',
    image: '/images/cerca-eletrica.webp'
  },
  {
    title: 'Nobreak',
    description: 'Usado em sistemas como CFTV, movimentadores e portas automáticas, para garantir funcionamento mesmo sem energia elétrica.',
    image: '/images/nobreak.webp'
  }
];
