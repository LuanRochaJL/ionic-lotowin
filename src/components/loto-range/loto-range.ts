import { Component, Input } from '@angular/core';

@Component({
  selector: 'loto-range',
  templateUrl: 'loto-range.html'
})
export class LotoRangeComponent {

  @Input() chkValor: Array<{lblValor: string}>;

  constructor() {
  }

}
