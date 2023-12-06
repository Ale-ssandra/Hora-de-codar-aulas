import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {PrimeiroComponenteComponent} from "./components/primeiro-componente/primeiro-componente.component"
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , PrimeiroComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AulasHoraDeCodar';
}
