import { Routes } from '@angular/router';

import {HomePageComponent} from './features/home-page/home-page.component';

export const routes: Routes = [
  {
  path:'home-page',
  component:HomePageComponent,
  },
  {
    path:'about-us',
    loadComponent:()=>import('./features/about-us/about-us.component').then(m=>m.AboutUsComponent),
  }
];
