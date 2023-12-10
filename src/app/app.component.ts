import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {PrimeiroComponenteComponent} from "./components/primeiro-componente/primeiro-componente.component";
import {DadosNoTemplateComponent} from "./components/dados-no-template/dados-no-template.component";
import{CompartilhamentoDeDadosComponent} from "./components/compartilhamento-de-dados/compartilhamento-de-dados.component"
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , PrimeiroComponenteComponent , DadosNoTemplateComponent ,CompartilhamentoDeDadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AulasHoraDeCodar';
  @Input() name: string = ""
}
