import { Component } from '@angular/core';
import {HeaderComponentComponent} from '../header/header-component/header-component.component';
import {FooterComponentComponent} from '../footers/footer-component/footer-component.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponentComponent,
    FooterComponentComponent,
    RouterOutlet
  ],
  template:` <app-header-component></app-header-component>
  <app-footer-component>
  </app-footer-component>
  <router-outlet></router-outlet>
  `,

})
export class LayoutComponent {


}
