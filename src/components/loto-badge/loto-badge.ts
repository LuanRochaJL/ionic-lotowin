import { Component, Input } from '@angular/core';
import { LoteriaProvider } from "../../providers/loteria";

@Component({
  selector: 'loto-badge',
  templateUrl: 'loto-badge.html'
})
export class LotoBadgeComponent {

  @Input() bdgValor: number;

  constructor(private loteria: LoteriaProvider) {
  }

}
