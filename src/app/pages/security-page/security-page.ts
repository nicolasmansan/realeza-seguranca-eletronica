import { Component } from '@angular/core';
import { Gallery } from "../../components/gallery/gallery";

@Component({
  selector: 'app-security-page',
  imports: [Gallery],
  templateUrl: './security-page.html',
  styleUrl: './security-page.scss'
})
export class SecurityPage {
  services = [
    'Instalação e manutenção de câmeras de segurança (CFTV)',
    'Controle de acesso com senha, biometria ou cartão',
    'Instalação de cercas elétricas e concertinas',
    'Porteiro eletrônico e vídeo porteiro',
    'Monitoramento remoto e gravação em nuvem'
  ];

  differentials = [
    'Atendimento rápido e técnico especializado',
    'Produtos com garantia e alta durabilidade',
    'Suporte pós-instalação com manutenção programada',
    'Soluções personalizadas para residências, condomínios e empresas'
  ];

  galleryImages = [
    { src: '/images/seguranca/cameras.webp', title: 'Câmeras de Segurança', description: 'Imagem de câmeras de vigilância' },
    { src: '/images/seguranca/catraca-danificada.webp', title: 'Catraca Danificada', description: 'Imagem de catraca com avaria' },
    { src: '/images/seguranca/catraca2.webp', title: 'Catraca de Acesso 2', description: 'Catraca eletrônica para controle de acesso' },
    { src: '/images/seguranca/catraca3.webp', title: 'Catraca de Acesso 3', description: 'Catraca de controle' },
    { src: '/images/seguranca/cerca-e-camera.webp', title: 'Cerca e Câmera', description: 'Cerca elétrica com câmera de segurança' },
    { src: '/images/seguranca/controle-acesso.webp', title: 'Controle de Acesso', description: 'Sistema eletrônico de controle de entrada' },
    { src: '/images/seguranca/equipamento-facial.webp', title: 'Equipamento de Reconhecimento Facial', description: 'Dispositivo com leitor facial' },
    { src: '/images/seguranca/fachada1.webp', title: 'Fachada com Segurança', description: 'Fachada com câmeras e equipamentos' },
    { src: '/images/seguranca/facial-catraca.webp', title: 'Catraca com Reconhecimento Facial', description: 'Catraca integrada a sistema facial' },
    { src: '/images/seguranca/instalacao-camera-carro.webp', title: 'Câmera de acesso veícular', description: 'Câmera para acesso de veículos' },
    { src: '/images/seguranca/instalacao-controle-acesso.webp', title: 'Instalação de Controle de Acesso', description: 'Procedimento de instalação do sistema' },
    { src: '/images/seguranca/interfone1.webp', title: 'Interfone Residencial 1', description: 'Interfone fixado em parede' },
    { src: '/images/seguranca/interfone2.webp', title: 'Interfone Residencial 2', description: 'Modelo moderno de interfone' },
    { src: '/images/seguranca/interfone3.webp', title: 'Interfone Residencial 3', description: 'Outro modelo de interfone' },
    { src: '/images/seguranca/interfones-exibicao.webp', title: 'Exibição de Interfones', description: 'Diversos modelos de interfones em exposição' },
    { src: '/images/seguranca/leitor-tag-2.webp', title: 'Leitor de TAG 2', description: 'Leitor de TAG RFID para controle de acesso' },
    { src: '/images/seguranca/leitor-tag.webp', title: 'Leitor de TAG', description: 'Dispositivo para leitura de cartões ou tags' },
    { src: '/images/seguranca/porta-controle-acesso.webp', title: 'Porta com Controle de Acesso', description: 'Porta eletrônica com sistema de autenticação' },
    { src: '/images/seguranca/portao2.webp', title: 'Portão Eletrônico', description: 'Portão automatizado para controle de entrada' },
    { src: '/images/seguranca/produtos-camera.webp', title: 'Produtos - Câmeras', description: 'Vários modelos de câmeras de segurança' },
    { src: '/images/seguranca/produtos-cameras-2.webp', title: 'Produtos - Câmeras 2', description: 'Exposição de câmeras para venda' },
    { src: '/images/seguranca/produtos-gravador.webp', title: 'Produtos - Gravador', description: 'Gravador digital para câmeras de segurança' },
    { src: '/images/seguranca/reparo-rede.webp', title: 'Reparo de Rede', description: 'Técnico realizando manutenção em cabeamento' },
    { src: '/images/seguranca/servidor1.webp', title: 'Servidor de Segurança 1', description: 'Rack com equipamentos de rede e segurança' },
    { src: '/images/seguranca/servidor2.webp', title: 'Servidor de Segurança 2', description: 'Infraestrutura de TI para sistemas de vigilância' }
  ];
}
