import { Component, Input } from '@angular/core';

@Component({
  selector: 'loto-chkbox',
  templateUrl: 'loto-chkbox.html'
})
export class LotoChkboxComponent {

  @Input() chkValor: Array<{lblValor: string, campo: any}>;

  constructor() {
  }

}
