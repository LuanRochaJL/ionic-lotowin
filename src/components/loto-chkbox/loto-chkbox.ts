import { Component, Input } from '@angular/core';
import { LoteriaProvider } from "../../providers/loteria";

@Component({
  selector: 'loto-chkbox',
  templateUrl: 'loto-chkbox.html'
})
export class LotoChkboxComponent {

  @Input() chkValor: {lblValor: string, campo: string};

  constructor(private loteria: LoteriaProvider) {
  }

  setChk(_chk){
    debugger
    switch(this.chkValor.campo) { 
      case 'noRepetirNumero': { 
         this.loteria.configjogo.noRepetirNumero = _chk;
         break; 
      }
      case 'noSequencia': { 
        this.loteria.configjogo.noSequencia = _chk;
        break; 
      }
      default: { 
         break; 
      } 
    } 
  }
}
