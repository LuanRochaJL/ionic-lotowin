import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'loto-range',
  templateUrl: 'loto-range.html'
})
export class LotoRangeComponent {

  @Input() rngValor: {lblValor: string, classe: string, qtdeMin: number, qtdeMax: number, qtde: number};
  @Output() metodoSet = new EventEmitter();

    
  constructor() {
  }

  setQtde(evento){
    this.metodoSet.emit(evento.value);
  }
}
