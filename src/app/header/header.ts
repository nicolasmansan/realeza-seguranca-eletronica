import { Component } from '@angular/core';
import { MenuButton } from "../menu-button/menu-button";

@Component({
  selector: 'app-header',
  imports: [MenuButton],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  public isMobileMenuOpen: boolean = false;

  togglemenu(event:any) {
    this.isMobileMenuOpen = event;
  }
}
