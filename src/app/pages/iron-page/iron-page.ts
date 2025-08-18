import { Component } from '@angular/core';
import { Gallery } from "../../components/gallery/gallery";
import { Subtitle } from "../../components/subtitle/subtitle";

@Component({
  selector: 'app-iron-page',
  imports: [Gallery, Subtitle],
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
    { src: '/images/serralheria/serra4.webp', title: 'Reparo em serralheria', description: 'Reparo em portão danificado' },
    { src: '/images/serralheria/serra2.webp', title: 'Reparo em serralheria', description: 'Reparo em portão danificado' },
    { src: '/images/marca/capa.webp', title: 'Reparo', description: 'Reparo em portão eletrônico' }
  ];
}
