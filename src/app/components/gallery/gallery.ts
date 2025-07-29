import { Component, Input } from '@angular/core';
import { GlightboxService } from '../../shared/glightbox.service';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  @Input() images: { src: string; title?: string; description?: string }[] = [];

  constructor(private glightboxService: GlightboxService) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.glightboxService.init(), 0);
  }
}
