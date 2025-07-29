import { Component } from '@angular/core';
import { Service, servicesData } from '../../repositories/services';

@Component({
  selector: 'app-services-cards',
  imports: [],
  templateUrl: './services-cards.html',
  styleUrl: './services-cards.scss'
})
export class ServicesCards {
  public services: Service[];

  constructor () {
    this.services = servicesData;
  }

  getBackgroundImage(image: string): { [klass: string]: any } {
    return {
      'background-image': `url(${image})`
    };
  }
}
