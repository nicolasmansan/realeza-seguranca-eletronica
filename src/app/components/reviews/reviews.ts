import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Review, reviewsData } from '../../repositories/reviews';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss'
})
export class Reviews implements AfterViewInit {
  
  @ViewChild('carousel', { static: false }) carouselRef!: ElementRef<HTMLDivElement>;

  public intervalId: any = null;

  public reviews: Review[];

  constructor() {
    this.reviews = reviewsData;
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
          const left = window.innerWidth >= 768 ? Math.round(el.clientWidth / 3) : el.clientWidth;
          el.scrollBy({ left, behavior: 'smooth' });
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

    const card = carousel.querySelector('.review-card') as HTMLElement;
    const offset = card?.offsetWidth + 16 || 320;

    if (typeof carousel.scrollBy === 'function') {
      carousel.scrollBy({
        left: direction === 'right' ? offset : -offset,
        behavior: 'smooth'
      });
    }
  }
}
