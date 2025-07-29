import { Component } from '@angular/core';
import { Banner } from "../../components/banner/banner";
import { Brands } from "../../components/brands/brands";
import { Reviews } from "../../components/reviews/reviews";
import { SolutionsCarousel } from "../../components/solutions-carousel/solutions-carousel";
import { ServicesCards } from "../../components/services-cards/services-cards";

@Component({
  selector: 'app-home',
  imports: [Banner, Brands, Reviews, SolutionsCarousel, ServicesCards],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
