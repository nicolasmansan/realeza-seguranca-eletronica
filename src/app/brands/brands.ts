import { Component } from '@angular/core';

interface Brand {
  name: string;
  url: string;
}

@Component({
  selector: 'app-brands',
  imports: [],
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
    { name: 'Dahua', url: '/images/dahua.png' },
  ];
}
