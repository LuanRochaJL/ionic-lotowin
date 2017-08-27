import { Component, Input } from '@angular/core';
import { LoteriaProvider } from "../../providers/loteria";

@Component({
  selector: 'loto-range',
  templateUrl: 'loto-range.html'
})
export class LotoRangeComponent {

  @Input() rngValor: {lblValor: string, qtdeMin: number, qtdeMax: number, qtde: number, tipo: string};

  constructor(private loteria: LoteriaProvider) {
  }

  setQtde(){
    switch(this.rngValor.tipo) { 
      case 'jogo': { 
         this.loteria.configjogo.qtdeJogos = this.rngValor.qtde;
         break; 
      } 
      case 'numero': { 
         this.loteria.configjogo.qtdeNumeros = this.rngValor.qtde;
         break; 
      } 
      default: { 
         break; 
      } 
    } 
  }
}
