export interface Service {
  title: string;
  image: string;
  description: string;
  link: string;
  highlight: boolean;
}

export const servicesData: Service[] = [
  {
    title: 'Portões Automáticos',
    image: '/images/servico-portao-eletronico-basculante.webp',
    description: 'Instalação e manutenção de motores para portões eletrônicos, com soluções personalizadas.',
    link: '/portoes-automaticos',
    highlight: false,
  },
  {
    title: 'Segurança Eletrônica',
    image: '/images/servico-seguranca-eletronica-real.webp',
    description: 'Instalação e manutenção de sistemas de segurança modernos: câmeras, cercas elétricas, controle de acesso e muito mais.',
    link: '/seguranca-eletronica',
    highlight: true,
  },
  {
    title: 'Serralheria Especializada',
    image: '/images/servico-serralheria.webp',
    description: 'Reparos e adaptações em estruturas metálicas para viabilizar a automação de portões.',
    link: '/serralheria',
    highlight: false,
  }
];