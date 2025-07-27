import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service, servicesData } from '../../repositories/services';


@Component({
  selector: 'app-services-carousel',
  imports: [],
  templateUrl: './services-carousel.html',
  styleUrl: './services-carousel.scss'
})
export class ServicesCarousel implements OnInit {
  
  public services: Service[];

  scrollInterval: any;

  constructor(private router: Router) {
    this.services = servicesData;
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

  navigate(link: string) {
    this.router.navigate(['servicos'])
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
