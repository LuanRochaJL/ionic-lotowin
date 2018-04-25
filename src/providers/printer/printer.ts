import { Injectable } from '@angular/core';
import { Printer, PrintOptions } from '@ionic-native/printer';

@Injectable()
export default class PrinterProvider {
  constructor(private printer: Printer) {
  }

  imprimir(){
    this.printer.isAvailable().then(function(){
        this.printer.print("https://www.techiediaries.com").then(function(){
          alert("printing done successfully !");
        },function(){
          alert("Error while printing !");
        });
    }, function(){
      alert('Error : printing is unavailable on your device ');
    });
  }

  print(){
    this.printer.isAvailable().then(this.onSuccessLoad, this.onErrorLoad);
  }

  onSuccessLoad(){
    let options: PrintOptions = {
        name: 'MyDocument',
        printerId: 'My Printer XYZ',
        duplex: true,
        landscape: true,
        grayscale: true
      };

    this.printer.print("http://google.com",options).then(this.onSuccessPrint, this.onErrorPrint); 
  }

  onErrorLoad(){
    alert('Error : printing is unavailable on your device ');
  }

  onSuccessPrint(){
    alert("printing done successfully !");
  }

  onErrorPrint(){
    alert("Error while printing !");
  }
}
