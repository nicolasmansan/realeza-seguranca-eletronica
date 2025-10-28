import { Component } from '@angular/core';
import { Subtitle } from '../subtitle/subtitle';
import { ConversionButton } from '../conversion-button/conversion-button';

@Component({
  selector: 'app-plans-apps',
  imports: [Subtitle, ConversionButton],
  templateUrl: './plans-apps.html',
  styleUrl: './plans-apps.scss'
})
export class PlansApps {

}
