import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  imports: [],
  templateUrl: './menu-button.html',
  styleUrl: './menu-button.scss'
})
export class MenuButton {
  @Input() color: string = '#000';
  @Output() menuToggle = new EventEmitter<boolean>();
  
  isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menuToggle.emit(this.isOpen);
  }
}
