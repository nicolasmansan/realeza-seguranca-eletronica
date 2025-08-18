import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Subtitle } from "../subtitle/subtitle";

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  imports: [Subtitle],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements AfterViewInit {
  public yearsExpirience: number = 20;

  @ViewChild('expirienceNumber') expirienceNumber!: ElementRef<HTMLDivElement>;
  @ViewChild('clientNumber') clientNumber!: ElementRef<HTMLDivElement>;
  @ViewChild('gatesNumber') gatesNumber!: ElementRef<HTMLDivElement>;
  @ViewChild('camerasNumber') camerasNumber!: ElementRef<HTMLDivElement>;

  constructor(private el: ElementRef) {
    this.yearsExpirience = new Date().getFullYear() - new Date('1977-06-01').getFullYear();
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;
    requestAnimationFrame(() => {
      gsap.to(this.expirienceNumber.nativeElement, {
        innerText: this.yearsExpirience,
        duration: 2,
        ease: 'power1.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: this.expirienceNumber.nativeElement,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      gsap.to(this.clientNumber.nativeElement, {
        innerText: 90,
        duration: 2.5,
        ease: 'power1.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: this.clientNumber.nativeElement,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      gsap.to(this.gatesNumber.nativeElement, {
        innerText: 70,
        duration: 3,
        ease: 'power1.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: this.gatesNumber.nativeElement,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play none none none'
        }
      });

      gsap.to(this.camerasNumber.nativeElement, {
        innerText: 80,
        duration: 3.5,
        ease: 'power1.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: this.camerasNumber.nativeElement,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });
  }
}
