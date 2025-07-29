import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  imports: [],
  templateUrl: './subtitle.html',
  styleUrl: './subtitle.scss'
})
export class Subtitle {
  @Input() text: string = '';
  @Input() showLine: boolean = false;
}
