import { Component, Input } from '@angular/core';
import { LoteriaProvider } from "../../providers/loteria";

@Component({
  selector: 'loto-label',
  templateUrl: 'loto-label.html'
})
export class LotoLabelComponent {

  @Input() lblValor: {lblText: string, classe: string};

  constructor(private loteria: LoteriaProvider) {
  }

}
