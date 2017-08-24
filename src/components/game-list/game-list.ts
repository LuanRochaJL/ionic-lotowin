import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-list',
  templateUrl: 'game-list.html'
})
export class ListaJogoComponent {

  @Input() games;

  constructor() {
  }
  
}
