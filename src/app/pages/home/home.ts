import { Component } from '@angular/core';
import { Banner } from "../../components/banner/banner";
import { Brands } from "../../components/brands/brands";
import { Reviews } from "../../components/reviews/reviews";
import { ServicesCarousel } from "../../components/services-carousel/services-carousel";

@Component({
  selector: 'app-home',
  imports: [Banner, Brands, Reviews, ServicesCarousel],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
