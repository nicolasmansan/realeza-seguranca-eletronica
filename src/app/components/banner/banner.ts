import { Component } from '@angular/core';
import { ConversionButton } from '../conversion-button/conversion-button';

@Component({
  selector: 'app-banner',
  imports: [ConversionButton],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class Banner {

}
