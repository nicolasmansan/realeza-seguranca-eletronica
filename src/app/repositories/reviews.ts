export interface Review {
  name: string;
  condo: string;
  date: string;
  text: string;
}

export const reviewsData: Review[] = [
  {
    name: 'Michelle Vieira',
    condo: 'Anônimo',
    date: '27/05/2025',
    text: 'Excelente atendimento tanto na venda quanto no pós venda, o serviço ficou perfeito, pontualidade, agilidade, comprometimento com o cliente e qualidade. Super recomendo. Muito obrigada, estou super satisfeita.'
  },
  {
    name: 'Patricia Zanella',
    condo: 'Anônimo',
    date: '24/07/2025',
    text: 'Serviço deles muito bom! Sou síndica de um Condomínio e super indico!'
  },
  {
    name: 'Luiza Helena Gama dos Reis',
    condo: 'Anônimo',
    date: '01/07/2024',
    text: 'A empresa respondeu aos questionamentos com agilidade, e prestou um ótimo serviço em nosso portão de garagem, fazendo os reparos necessários, e também trocou a bateria do nobreak e colocou uma placa de acionamento rápido, deixando o portão muito ágil no abrir e fechar. Um serviço de qualidade que recomendamos.'
  },
  {
    name: 'Pedro Garcia',
    condo: 'Anônimo',
    date: '12/03/2024',
    text: 'Minha experiência com a empresa realeza foi ótima, com atendimento do técnico que venho na minha residência executar o serviço muito atencioso, tirando todas as minhas dúvidas a respeito da aquisição da câmera mibo que adquiri com eles, ótimo produto da Intelbras com app fácil de lidar. Equipe nota 10!!!! Super recomendo.'
  }
];