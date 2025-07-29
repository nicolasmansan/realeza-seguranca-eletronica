import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { WhatsButton } from "./components/whats-button/whats-button";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, WhatsButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'realeza';
}
