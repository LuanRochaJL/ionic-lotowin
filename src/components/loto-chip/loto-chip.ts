import { Input, Component, Output, EventEmitter } from '@angular/core';

import { LoteriaProvider } from "../../providers/loteria";

@Component({
  selector: 'loto-chip',
  templateUrl: 'loto-chip.html'
})
export class LotoChipComponent {

  @Input() chipValor;
  @Output() metodoSet = new EventEmitter();

  page: {classe: string};

  constructor(private loteria: LoteriaProvider) {
  }

  ngOnInit(){
    this.page = {classe: this.loteria.tipoJogo.getClasse()};
  }

  delChip(chip: number) {
    this.metodoSet.emit(chip);
  }
}
