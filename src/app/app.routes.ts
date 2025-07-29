import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { IronPage } from './pages/iron-page/iron-page';
import { SecurityPage } from './pages/security-page/security-page';
import { GatePage } from './pages/gate-page/gate-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'serralheria', component: IronPage },
  { path: 'seguranca-eletronica', component: SecurityPage },
  { path: 'portoes-automaticos', component: GatePage },
];
