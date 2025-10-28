import { Component, OnInit } from '@angular/core';
import { Gallery } from "../../components/gallery/gallery";
import { Subtitle } from "../../components/subtitle/subtitle";
import { Meta, Title } from '@angular/platform-browser';
import { GtmService } from '../../shared/services/gtm.service';
import { ConversionButton } from '../../components/conversion-button/conversion-button';

@Component({
  selector: 'app-iron-page',
  imports: [Gallery, Subtitle, ConversionButton],
  templateUrl: './iron-page.html',
  styleUrl: './iron-page.scss'
})
export class IronPage implements OnInit {
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

  constructor(private titleService: Title, private metaService: Meta, private gtmService: GtmService) {}

  ngOnInit() {
    this.titleService.setTitle('Serralheria | Realeza Segurança Eletrônica');
    this.metaService.updateTag({ name: 'description', content: 'Saiba mais sobre nossas soluções em serralheria.' });
    
    // Inicializar GTM
    // this.gtmService.init();
  }
}
