import { Component } from '@angular/core';
import { Gallery } from "../../components/gallery/gallery";
import { Subtitle } from "../../components/subtitle/subtitle";

@Component({
  selector: 'app-gate-page',
  imports: [Gallery, Subtitle],
  templateUrl: './gate-page.html',
  styleUrl: './gate-page.scss'
})
export class GatePage {
  services = [
    'Instalação de motores para portões deslizantes (de correr)',
    'Automação de portões basculantes e pivotantes',
    'Substituição de peças e manutenção corretiva',
    'Manutenção preventiva e ajustes técnicos',
    'Soluções para condomínios, residências e empresas'
  ];

  galleryImages = [
    { src: '/images/portao/cancela-andamento.webp', title: 'Instalação de Cancela', description: 'Cancela automática em processo de instalação' },
    { src: '/images/portao/cancela-ligada.webp', title: 'Cancela Ativada', description: 'Cancela eletrônica funcionando após instalação' },
    { src: '/images/portao/portao-motor.webp', title: 'Portão com Motor Automatizado', description: 'Portão com sistema de motor instalado' },
    { src: '/images/portao/portao-motor-2.webp', title: 'Portão Automatizado 2', description: 'Detalhe do motor em portão automático' },
    { src: '/images/portao/portao-motor-3.webp', title: 'Portão Automatizado 3', description: 'Vista lateral de portão com automação' },
    { src: '/images/portao/portao-motor-simples.webp', title: 'Portão com Motor Simples', description: 'Portão automatizado com motor de modelo simples' },
    { src: '/images/portao/portao-motor.webp', title: 'Portão Automatizado', description: 'Sistema de motor instalado em portão de acesso' },
    { src: '/images/portao/portao-simples.webp', title: 'Portão Simples', description: 'Portão de estrutura simples' }
  ];
}
