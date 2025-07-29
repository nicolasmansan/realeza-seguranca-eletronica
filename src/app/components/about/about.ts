import { Component } from '@angular/core';
import { Subtitle } from "../subtitle/subtitle";

@Component({
  selector: 'app-about',
  imports: [Subtitle],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  public yearsExpirience: number = 20;

  constructor() {
    this.yearsExpirience = new Date().getFullYear() - new Date('1977-06-01').getFullYear();
  }
}
