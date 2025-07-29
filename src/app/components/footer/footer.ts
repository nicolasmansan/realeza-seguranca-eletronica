import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  year: number = 2025;

  constructor() {
    this.year = new Date().getFullYear();
  }
}
