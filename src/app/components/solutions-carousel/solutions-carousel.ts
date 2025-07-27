import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Solution, solutionsData } from '../../repositories/solutions';


@Component({
  selector: 'app-solutions-carousel',
  imports: [],
  templateUrl: './solutions-carousel.html',
  styleUrl: './solutions-carousel.scss'
})
export class SolutionsCarousel implements AfterViewInit {
  
  @ViewChild('carousel', { static: false }) carouselRef!: ElementRef<HTMLDivElement>;

  public intervalId: any = null;

  public solutions: Solution[];

  constructor() {
    this.solutions = solutionsData;
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.intervalId = setInterval(() => {
        const carousel = this.carouselRef.nativeElement;
        const el = carousel;
        const maxScroll = el.scrollWidth - el.clientWidth;

        if (Math.round(el.scrollLeft) >= maxScroll) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
           const card = carousel.querySelector('.carousel-item') as HTMLElement;
          const offset = card?.offsetWidth || 320;
    
          el.scrollBy({ left: offset, behavior: 'smooth' });
        }
      }, 10000);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  scroll(direction: 'left' | 'right') {
    const carousel = this.carouselRef?.nativeElement;
    if (!carousel) return;

    const card = carousel.querySelector('.carousel-item') as HTMLElement;
    const offset = card?.offsetWidth || 320;

    if (typeof carousel.scrollBy === 'function') {
      carousel.scrollBy({
        left: direction === 'right' ? offset : -offset,
        behavior: 'smooth'
      });
    }
  }
}
