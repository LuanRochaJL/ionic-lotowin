import { Component, Input } from '@angular/core';

@Component({
  selector: 'loto-label',
  templateUrl: 'loto-label.html'
})
export class LotoLabelComponent {

  @Input() lblValor: string;

  constructor() {
  }

}
