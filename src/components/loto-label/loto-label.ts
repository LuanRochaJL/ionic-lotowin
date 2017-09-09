import { Component, Input } from '@angular/core';

import { LoteriaProvider } from "../../providers/loteria";

@Component({
  selector: 'loto-label',
  templateUrl: 'loto-label.html'
})
export class LotoLabelComponent {

  @Input() lblValor;

  page: {classe: string};

  constructor(private loteria: LoteriaProvider) {
  }

  ngOnInit(){
    this.page = {classe: this.loteria.tipoJogo.getClasse()};
  }

}
