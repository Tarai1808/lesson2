import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from './core/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  template:`<app-layout></app-layout>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lesson2';
}
