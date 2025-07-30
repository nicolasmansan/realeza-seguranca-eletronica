import { Component } from '@angular/core';
import { Banner } from "../../components/banner/banner";
import { Brands } from "../../components/brands/brands";
import { Reviews } from "../../components/reviews/reviews";
import { SolutionsCarousel } from "../../components/solutions-carousel/solutions-carousel";
import { ServicesCards } from "../../components/services-cards/services-cards";
import { Contact } from "../../components/contact/contact";
import { InstragramFeed } from "../../components/instragram-feed/instragram-feed";
import { About } from "../../components/about/about";
import { PlansApps } from "../../components/plans-apps/plans-apps";

@Component({
  selector: 'app-home',
  imports: [Banner, Brands, Reviews, SolutionsCarousel, ServicesCards, Contact, InstragramFeed, About, PlansApps],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
