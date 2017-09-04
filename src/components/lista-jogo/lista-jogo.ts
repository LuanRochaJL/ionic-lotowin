import { Component, Input } from '@angular/core';
import { LoteriaProvider } from "../../providers/loteria";

@Component({
  selector: 'lista-jogo',
  templateUrl: 'lista-jogo.html'
})
export class ListaJogoComponent {

  @Input() jogos;

  constructor() {
  }
  
}
