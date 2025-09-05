import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GtmService {
  private gtmId = 'GTM-W672F4J3';
  private isLoaded = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  init(): void {
    if (this.isLoaded || !isPlatformBrowser(this.platformId)) {
      return;
    }

    // Verifica se o GTM já foi carregado
    const existingScript = this.document.querySelector(`script[src*="googletagmanager.com/gtm.js"]`);
    if (existingScript) {
      this.isLoaded = true;
      return;
    }

    // Inicializa o dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];

    // Adiciona o script do GTM
    const script = this.document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${this.gtmId}`;
    this.document.head.appendChild(script);

    // Adiciona o código de inicialização
    const inlineScript = this.document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
    `;
    this.document.head.appendChild(inlineScript);

    this.isLoaded = true;
  }

  pushEvent(eventName: string, parameters?: any): void {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...parameters
      });
    }
  }
}
