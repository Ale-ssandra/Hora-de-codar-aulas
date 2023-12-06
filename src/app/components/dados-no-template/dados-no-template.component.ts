import { Component } from '@angular/core';

@Component({
  selector: 'app-dados-no-template',
  standalone: true,
  imports: [],
  templateUrl: './dados-no-template.component.html',
  styleUrl: './dados-no-template.component.css'
})
export class DadosNoTemplateComponent {
  // aqui que vai ficar logica das coisas
  name: string ="Alessandra";
  idade: number = 21;
  carro = {
  name:"Audi",
  modelo: "Tt",
  ano: "2020"
  }
}
