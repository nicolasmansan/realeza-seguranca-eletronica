import { Component, Input } from '@angular/core';
import { AnalyticsService } from '../../shared/services/analytics.service';

@Component({
  selector: 'app-conversion-button',
  imports: [],
  templateUrl: './conversion-button.html',
  styleUrl: './conversion-button.scss'
})
export class ConversionButton {
  @Input() customClass: string = '';

  constructor(public analyticsService: AnalyticsService) {}

  openChat() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    
    let message = 'Olá Realeza! *Vim do site* e gostaria de ajuda!';
    
    if (utmSource) {
      message = 'Olá Realeza! *Vim do Google* e gostaria de ajuda!';
    }

    const conversionType = utmSource ? 'AdsConversion' : 'OrganicConversion';

    this.analyticsService.trackEvent('conversion_button_click', 'Clique no botão de WhatsApp', conversionType);

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=555130120735&text=${encodedMessage}&type=phone_number&app_absent=0`;
    
    window.open(whatsappUrl, '_blank');
  }
}
