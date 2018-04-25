import { Component, Input } from '@angular/core';
import LoteriaProvider from "../../providers/loteria/loteria";

@Component({
  selector: 'loto-badge',
  templateUrl: 'loto-badge.html'
})
export class LotoBadgeComponent {

  @Input() bdgValor: number;
  page: {classe: string}

  constructor(private loteria: LoteriaProvider) {
  }

  ngOnInit(){
    this.page = {classe: this.loteria.tipoJogo.getClasse()};
  }

}
