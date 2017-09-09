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
    this.metodoSet.emit(this.chk);
  }
}
