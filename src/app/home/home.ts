import { Component } from '@angular/core';
import { Banner } from "../banner/banner";
import { Brands } from "../brands/brands";
import { Reviews } from "../reviews/reviews";

@Component({
  selector: 'app-home',
  imports: [Banner, Brands, Reviews],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
