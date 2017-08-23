import { Injectable } from '@angular/core';

@Injectable()
export class Loteria2Provider {

  private title;
  constructor() {
    console.log("Loteria2Provider");
  }

  setTitle(title){
    this.title = title;
  }

  getTitle(){
    return this.title;
  }
}
