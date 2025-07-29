import { Component } from '@angular/core';

@Component({
  selector: 'app-iron-page',
  imports: [],
  templateUrl: './iron-page.html',
  styleUrl: './iron-page.scss'
})
export class IronPage {
  services = [
    'Reparos em portões metálicos existentes',
    'Soldas e reforços estruturais',
    'Adaptação de portões para instalação de motor',
    'Manutenção preventiva em estruturas metálicas',
    'Ajustes para nivelamento e segurança'
  ];

  galleryImages = [
    'assets/serralheria/servico1.jpg',
    'assets/serralheria/servico2.jpg',
    'assets/serralheria/servico3.jpg'
    // Adicione mais caminhos conforme necessário
  ];
}
