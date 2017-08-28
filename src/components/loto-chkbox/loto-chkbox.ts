import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'loto-chkbox',
  templateUrl: 'loto-chkbox.html'
})
export class LotoChkboxComponent {

  @Input() chkValor: {lblValor: string, classe: string, campo: string};
  @Output() metodoSet = new EventEmitter();
  chk: boolean;

  constructor() {
  }

  setChk(){
    debugger
    this.metodoSet.emit(this.chk);
    /*switch(this.chkValor.campo) { 
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
    } */
  }
}
