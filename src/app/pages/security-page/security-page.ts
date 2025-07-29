import { Component } from '@angular/core';

@Component({
  selector: 'app-security-page',
  imports: [],
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
    'assets/seguranca-eletronica/cftv.jpg',
    'assets/seguranca-eletronica/controle-acesso.jpg',
    'assets/seguranca-eletronica/cerca.jpg'
  ];
}
