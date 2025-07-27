import { Component } from '@angular/core';
import { Banner } from "../banner/banner";
import { Brands } from "../brands/brands";

@Component({
  selector: 'app-home',
  imports: [Banner, Brands],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
