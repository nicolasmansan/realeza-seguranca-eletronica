import { Component } from '@angular/core';
import { Subtitle } from "../subtitle/subtitle";

interface Brand {
  name: string;
  url: string;
}

@Component({
  selector: 'app-brands',
  imports: [Subtitle],
  templateUrl: './brands.html',
  styleUrl: './brands.scss'
})
export class Brands {
  public brands: Brand[] = [
    { name: 'Intelbras', url: '/images/intelbras.webp' },
    { name: 'Thevear', url: '/images/thevear.webp' },
    { name: 'Hikvision', url: '/images/hikvision.png' },
    { name: 'Multilaser', url: '/images/multilaser.svg' },
    { name: 'TP-Link', url: '/images/tplink.svg' },
    { name: 'HDL', url: '/images/hdl.png' },
    { name: 'AGL', url: '/images/agl.webp' },
    { name: 'SPA', url: '/images/spa.webp' },
    { name: 'PPA', url: '/images/ppa.webp' },
  ];
}
