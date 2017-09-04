import { Input, Component, Output, EventEmitter } from '@angular/core';
import { LoteriaProvider } from "../../providers/loteria";

@Component({
  selector: 'loto-chip',
  templateUrl: 'loto-chip.html'
})
export class LotoChipComponent {

  @Input() chipValor;
  @Output() metodoSet = new EventEmitter();

  constructor(private loteria: LoteriaProvider) {
  }

  delChip(chip: number) {
    this.metodoSet.emit(chip);
  }
}
