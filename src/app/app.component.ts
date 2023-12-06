import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {PrimeiroComponenteComponent} from "./components/primeiro-componente/primeiro-componente.component";
import {DadosNoTemplateComponent} from "./components/dados-no-template/dados-no-template.component"
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , PrimeiroComponenteComponent , DadosNoTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AulasHoraDeCodar';
}
