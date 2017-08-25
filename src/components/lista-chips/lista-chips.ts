import { Component, Input } from '@angular/core';

@Component({
  selector: 'lista-chips',
  templateUrl: 'lista-chips.html'
})
export class ListaChipsComponent {

  @Input() numeros: number[];

  constructor() {
  }
  
  excluirNumero(chip: number) {
    let index = this.numeros.indexOf(chip);
    if (index > -1) {
      this.numeros.splice(index, 1);
    }
  }

}
