import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

interface Review {
  name: string;
  condo: string;
  text: string;
}

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss'
})
export class Reviews implements AfterViewInit {
  
  @ViewChild('carousel', { static: false }) carouselRef!: ElementRef<HTMLDivElement>;

  public intervalId: any = null;

  public reviews: Review[] = [
    {
      name: 'Michelle Vieira',
      condo: 'Anônimo',
      text: 'Excelente atendimento tanto na venda quanto no pós venda, o serviço ficou perfeito, pontualidade, agilidade, comprometimento com o cliente e qualidade. Super recomendo. Muito obrigada, estou super satisfeita.'
    },
    {
      name: 'Gilberto Silva',
      condo: 'Anônimo',
      text: 'A instalação teve um pequeno problema mas a empresa logo se prontificou a resolver. Boa comunicação e bom atendimento.'
    },
    {
      name: 'Luiza Helena Gama dos Reis',
      condo: 'Anônimo',
      text: 'A empresa respondeu aos questionamentos com agilidade, e prestou um ótimo serviço em nosso portão de garagem, fazendo os reparos necessários, e também trocou a bateria do nobreak e colocou uma placa de acionamento rápido, deixando o portão muito ágil no abrir e fechar. Um serviço de qualidade que recomendamos.'
    },
    {
      name: 'Pedro Garcia',
      condo: 'Anônimo',
      text: 'Minha experiência com a empresa realeza foi ótima, com atendimento do técnico que venho na minha residência executar o serviço muito atencioso, tirando todas as minhas dúvidas a respeito da aquisição da câmera mibo que adquiri com eles, ótimo produto da Intelbras com app fácil de lidar. Equipe nota 10!!!! Super recomendo.'
    }
  ];

  

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      
      
      this.intervalId = setInterval(() => {
        const carousel = this.carouselRef.nativeElement;
        const el = carousel;
        const maxScroll = el.scrollWidth - el.clientWidth;

        if (Math.round(el.scrollLeft) >= maxScroll) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const left = window.innerWidth >= 768 ? Math.round(el.clientWidth / 2) : el.clientWidth;
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
