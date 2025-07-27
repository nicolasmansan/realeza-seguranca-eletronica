import { Component } from '@angular/core';
import { Banner } from "../../components/banner/banner";
import { Brands } from "../../components/brands/brands";
import { Reviews } from "../../components/reviews/reviews";
import { SolutionsCarousel } from "../../components/solutions-carousel/solutions-carousel";

@Component({
  selector: 'app-home',
  imports: [Banner, Brands, Reviews, SolutionsCarousel],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
