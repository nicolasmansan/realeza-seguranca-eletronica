import { Component } from '@angular/core';
import { Service, servicesData } from '../../repositories/services';
import { Subtitle } from "../subtitle/subtitle";

@Component({
  selector: 'app-services-cards',
  imports: [Subtitle],
  templateUrl: './services-cards.html',
  styleUrl: './services-cards.scss'
})
export class ServicesCards {
  public services: Service[];

  constructor () {
    this.services = servicesData;
  }
}
