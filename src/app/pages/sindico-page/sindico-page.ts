import { Component } from '@angular/core';
import { Subtitle } from '../../components/subtitle/subtitle';

@Component({
  selector: 'app-sindico-page',
  imports: [Subtitle],
  templateUrl: './sindico-page.html',
  styleUrl: './sindico-page.scss'
})
export class SindicoPage {
  services = [
    'Reparos em portões metálicos existentes',
    'Soldas e reforços estruturais',
    'Adaptação de portões para instalação de motor',
    'Manutenção preventiva em estruturas metálicas',
    'Ajustes para nivelamento e segurança'
  ];
}
