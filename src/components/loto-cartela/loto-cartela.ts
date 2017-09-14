import { Component, Input } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { LoteriaProvider } from '../../providers/loteria';

@Component({
  selector: 'loto-cartela',
  templateUrl: 'loto-cartela.html'
})
export class LotoCartelaComponent {

  @Input() cartelaValor: {lblValor: string, index: boolean};

  constructor(private loteria: LoteriaProvider,
              private alertCtrl: AlertController) {
  }

  listaNumeros(tipo: boolean = this.cartelaValor.index) {
    let numeros = tipo ? this.loteria.configjogo.escolhidos : this.loteria.configjogo.excluidos;
    let numOcultar = tipo ? this.loteria.configjogo.excluidos : this.loteria.configjogo.escolhidos;
    let alert = this.alertCtrl.create({
      title: 'Selecione até '+this.loteria.configjogo.qtdeNumeros+'  números!'
    });
    
    for(let num = 1;num <= this.loteria.tipoJogo.getQtdNum();num++){
      if(!(numOcultar.indexOf(num) > -1)){
        alert.addInput({
          type: 'checkbox',
          label: num.toString(),
          value: num.toString(),
          checked: numeros.indexOf(num) > -1
        });
      }
    }

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Ok',
      handler: (data) => {
        numeros = [];
        for (let num of data){
          numeros.push(+num);
        }
        let mensagem: string = "";

        if(!tipo && ((numeros.length) + this.loteria.configjogo.qtdeNumeros > 60)){
          mensagem = "A quantidade de números excluídos impossibilita gerar jogos com "+this.loteria.configjogo.qtdeNumeros+"!"
        }else if(tipo && ((numeros.length) > this.loteria.configjogo.qtdeNumeros)){
          mensagem = "Quantidade de números escolhidos para jogar excede a quantidade de número definida por jogo!"  
        };

        if(mensagem != ""){
          let alertValidacao = this.alertCtrl.create({
              title: 'Atenção',
              subTitle: mensagem,
              buttons: ['OK']
          });
          alertValidacao.present();
        }else{
          if(tipo){
            this.loteria.configjogo.escolhidos = numeros;
          }else{
            this.loteria.configjogo.excluidos = numeros;
          }
        }
      }
    });

    alert.present();
  }

}
