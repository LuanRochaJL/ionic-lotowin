import { Component, Input } from '@angular/core';

@Component({
  selector: 'seletor-qtde',
  templateUrl: 'seletor-qtde.html'
})
export class SeletorQtdeComponent {

  @Input() nome: string;
  @Input() loteria;
  private qtde: number;

  constructor() {
  }

}
