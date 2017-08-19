import { Component, Input } from '@angular/core';

@Component({
  selector: 'lista-jogo',
  templateUrl: 'lista-jogo.html'
})
export class ListaJogoComponent {

  @Input() jogos;

  constructor() {
  }

}
