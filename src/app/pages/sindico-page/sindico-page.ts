import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { GtmService } from '../../shared/services/gtm.service';
import { ConversionButton } from '../../components/conversion-button/conversion-button';

@Component({
  selector: 'app-sindico-page',
  imports: [ConversionButton],
  templateUrl: './sindico-page.html',
  styleUrl: './sindico-page.scss'
})
export class SindicoPage implements OnInit {

  constructor(private titleService: Title, private metaService: Meta, private gtmService: GtmService) {}

  ngOnInit() {
    this.titleService.setTitle('Síndicos | Realeza Segurança Eletrônica');
    this.metaService.updateTag({ name: 'description', content: 'Saiba mais sobre nossas soluções para síndicos.' });
    
    // Inicializar GTM
    // this.gtmService.init();
  }
}
