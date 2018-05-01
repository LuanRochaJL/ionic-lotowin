import { Injectable } from '@angular/core';
import { Printer, PrintOptions } from '@ionic-native/printer';
import { empty } from 'rxjs/Observer';

@Injectable()
export default class PrinterProvider {
  private impressaoDisponivel: boolean = false;

  constructor(private printer: Printer) {
  }

  public imprimir(conteudo: string){
    this.printer.isAvailable().then(() => {}, () => {});
    this.printer.print(conteudo).then(this.impressaoConcluida, this.impressaoFalhou);
  }

  private impressaoConcluida(): void{
    alert("Impressão finalizada!");
  }

  private impressaoFalhou(): void{
    alert("Falha ao imprimir!");
  }

  public imprimirJogosHtm(jogos: number[][], cor: string): void{
    let jogosHtml: string = `
      <html>
        <style>
        .linha{
          display: table;
        }
        
        .coluna{    
          height:25px;
          width:25px;    
          float:left;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 2
        }
        
        .color{
          background-color: ${ cor };
          color: #ffffff;
        }
        </style>
        <body>
          <div class="tabela">
            <h1>Jogos</h1>`;
    for(let jogo = 0; jogo < jogos.length; jogo++){
      jogosHtml += `
      <div class="linha">
        <div class="coluna">${ jogo+1 }°</div>`;
      jogos[jogo].forEach(numero => {
        jogosHtml += `<div class="coluna color">${ numero }</div>`;
      });
      jogosHtml += '</div>'; 
    }
    jogosHtml += `
        </div>
      </body>
    </html>`;

    this.imprimir(jogosHtml.replace(/(\s{2,})/g,''));
  }
}
