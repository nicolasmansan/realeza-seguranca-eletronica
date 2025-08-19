import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sindico-page',
  imports: [],
  templateUrl: './sindico-page.html',
  styleUrl: './sindico-page.scss'
})
export class SindicoPage implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Síndicos | Realeza Segurança Eletrônica');
    this.metaService.updateTag({ name: 'description', content: 'Saiba mais sobre nossas soluções para síndicos.' });
  }
}
