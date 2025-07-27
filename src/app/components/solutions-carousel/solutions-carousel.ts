import { Component, OnInit } from '@angular/core';
import { Solution, solutionsData } from '../../repositories/solutions';


@Component({
  selector: 'app-solutions-carousel',
  imports: [],
  templateUrl: './solutions-carousel.html',
  styleUrl: './solutions-carousel.scss'
})
export class SolutionsCarousel implements OnInit {
  
  public solutions: Solution[];

  scrollInterval: any;

  constructor() {
    this.solutions = solutionsData;
  }

  ngOnInit() {
    this.startAutoScroll();
  }

  startAutoScroll() {
    if (typeof window !== 'undefined') {
      this.scrollInterval = setInterval(() => {
        const container = document.querySelector('.carousel-track-services') as HTMLElement;
        if (container) {
          const firstItem = container.children[0] as HTMLElement;
          container.appendChild(firstItem.cloneNode(true));
          container.removeChild(firstItem);
        }
      }, 10000);
    }
  }

  scroll(direction: 'left' | 'right') {
    const container = document.querySelector('.carousel-track-services') as HTMLElement;
    if (!container) return;

    if (direction === 'left') {
      const lastItem = container.lastElementChild as HTMLElement;
      container.insertBefore(lastItem.cloneNode(true), container.firstChild);
      container.removeChild(lastItem);
    } else {
      const firstItem = container.firstElementChild as HTMLElement;
      container.appendChild(firstItem.cloneNode(true));
      container.removeChild(firstItem);
    }
  }
}
