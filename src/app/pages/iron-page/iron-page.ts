import { Component } from '@angular/core';
import { Gallery } from "../../components/gallery/gallery";

@Component({
  selector: 'app-iron-page',
  imports: [Gallery],
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
    { src: '/images/serralheria/serra1.webp', title: 'Reparo em serralheria', description: 'Reparo em portão danificado' },
    { src: '/images/serralheria/serra2.webp', title: 'Reparo em serralheria', description: 'Reparo em portão danificado' },
    { src: '/images/serralheria/serra3.webp', title: 'Reparo em serralheria', description: 'Reparo em portão danificado' },
    { src: '/images/serralheria/serra4.webp', title: 'Reparo em serralheria', description: 'Reparo em portão danificado' }
  ];
}
