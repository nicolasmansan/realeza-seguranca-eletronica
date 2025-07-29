import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import GLightbox from 'glightbox';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class GlightboxService {
  private lightbox: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async init(selector: string = '.glightbox') {

    if (typeof window !== 'undefined') {
      const GLightbox = (await import('glightbox')).default;
      this.lightbox = GLightbox({ selector });
    }
  }

  refresh() {
    if (this.lightbox) {
      this.lightbox.reload();
    }
  }
}
