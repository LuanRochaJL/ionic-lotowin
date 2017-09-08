import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { LoteriaProvider } from './../../providers/loteria';
import { ResultadoPage } from './../resultado/resultado';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private indice: {
                    rngQtde:{jogo: number,numero: number},
                    chk:{repetir: number,sequencia: number},
                    cartela:{escolhidos: boolean,excluidos: boolean}
                  };
  private rngQtde: Array<{lblValor: string, classe: string, qtdeMin: number, qtdeMax: number, qtde: number}>;
  private chk: Array<{lblValor: string, classe: string}>;

  constructor(public navCtrl: NavController, 
              private loteria: LoteriaProvider, 
              private alertCtrl: AlertController) {
  }

  ngOnInit(){
    this.indice = {rngQtde:{jogo:0,numero:1},
                   chk:{repetir:0,sequencia:1},
                   cartela:{escolhidos: true,excluidos: false}
                  };

    this.rngQtde = [
        { lblValor: 'Qtde. jogos', classe: this.loteria.tipoJogo.getClasse(), qtdeMin: this.loteria.tipoJogo.getQtdJogoMin(), 
          qtdeMax: this.loteria.tipoJogo.getQtdJogoMax(), qtde: this.loteria.tipoJogo.getQtdJogoMin()},
        { lblValor: 'Qtde. números', classe: this.loteria.tipoJogo.getClasse(), qtdeMin: this.loteria.tipoJogo.getQtdNumMin(), 
          qtdeMax: this.loteria.tipoJogo.getQtdNumMax(), qtde: this.loteria.tipoJogo.getQtdNumMin()}
      ];

    this.chk = [
        {lblValor: 'Não Repetir n° entre jogos', classe: this.loteria.tipoJogo.getClasse()},
        {lblValor: 'Não permitir sequência de número em cruz', classe: this.loteria.tipoJogo.getClasse()}
      ];
  }

  listaNumeros(tipo: boolean) {
    let numeros = tipo ? this.loteria.configjogo.escolhidos : this.loteria.configjogo.excluidos;
    let numOcultar = tipo ? this.loteria.configjogo.excluidos : this.loteria.configjogo.escolhidos;
    let alert = this.alertCtrl.create();
    alert.setTitle('Selecione os números!');
    
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
        if(tipo){
          this.loteria.configjogo.escolhidos = numeros;
        }else{
          this.loteria.configjogo.excluidos = numeros;
        }
      }
    });

    alert.present();
  }

  excluirNumero(chip: number, tipo: boolean) {
    if(tipo){
      let index = this.loteria.configjogo.escolhidos.indexOf(+chip);
      if (index > -1) {
        this.loteria.configjogo.escolhidos.splice(index, 1);
      }
    }else{
      let index = this.loteria.configjogo.excluidos.indexOf(+chip);
      if (index > -1) {
        this.loteria.configjogo.excluidos.splice(index, 1);
      }
    }
  }

  GetAposta(){
    this.navCtrl.push(ResultadoPage);
  }
}
