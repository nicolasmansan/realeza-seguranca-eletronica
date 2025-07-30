import { AfterViewInit, Component, ElementRef } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Subtitle } from '../subtitle/subtitle';
import { servicesData } from '../../repositories/services';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-services-cards',
  imports: [Subtitle],
  templateUrl: './services-cards.html',
  styleUrl: './services-cards.scss'
})
export class ServicesCards implements AfterViewInit {
  public services = servicesData;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const section = this.el.nativeElement as HTMLElement;

    const hasWindow = typeof window !== 'undefined';

    gsap.from(section.querySelector('.from-left'), {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: section.querySelector('.from-left'),
        start: 'top 80%',
        end: 'top 40%',
        toggleActions: 'play reverse play reverse',
        scrub: true
      }
    });

    gsap.from(section.querySelector('.from-bottom'), {
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: section.querySelector('.from-bottom'),
        start: 'top 80%',
        end: 'top 30%',
        scrub: true
      }
    });

    gsap.from(section.querySelector('.from-right'), {
      x: hasWindow && window?.innerWidth >= 998 ? 200 : -200,
      opacity: 0,
      scrollTrigger: {
        trigger: section.querySelector('.from-right'),
        start: 'top 80%',
        end: 'top 40%',
        scrub: true
      }
    });
  }
}
