import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { IronPage } from './pages/iron-page/iron-page';
import { SecurityPage } from './pages/security-page/security-page';
import { GatePage } from './pages/gate-page/gate-page';
import { SindicoPage } from './pages/sindico-page/sindico-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'serralheria',
    component: IronPage,
    data: {
      title: 'Serralheria - Realeza Segurança Eletrônica',
      description: 'Saiba mais sobre nossas soluções em serralheria.'
    }
  },
  {
    path: 'seguranca-eletronica',
    component: SecurityPage,
    data: {
      title: 'Segurança Eletrônica - Realeza Segurança Eletrônica',
      description: 'Saiba mais sobre nossas soluções em segurança eletrônica.'
    }
  },
  {
    path: 'portoes-automaticos',
    component: GatePage,
    data: {
      title: 'Portões Automáticos - Realeza Segurança Eletrônica',
      description: 'Saiba mais sobre nossas soluções em portões automáticos.'
    }
  },
  {
    path: 'sindicos',
    component: SindicoPage,
    data: {
      title: 'Síndicos - Realeza Segurança Eletrônica',
      description: 'Saiba mais sobre nossas soluções para síndicos.'
    }
  },
];
