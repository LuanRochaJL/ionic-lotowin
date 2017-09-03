import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'loto-chip',
  templateUrl: 'loto-chip.html'
})
export class LotoChipComponent {

  @Input() chipValor;
  @Output() metodoSet = new EventEmitter();

  constructor() {
  }

  delChip(chip: number) {
    this.metodoSet.emit(chip);
  }
}
