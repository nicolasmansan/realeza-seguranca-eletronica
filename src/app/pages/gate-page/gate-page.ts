import { Component } from '@angular/core';

@Component({
  selector: 'app-gate-page',
  imports: [],
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
    'assets/portoes-automaticos/portao1.jpg',
    'assets/portoes-automaticos/portao2.jpg',
    'assets/portoes-automaticos/portao3.jpg'
  ];
}
