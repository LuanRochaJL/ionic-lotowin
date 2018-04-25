import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import UtilitiesProvider from '../utilities/utilities';
import LoteriaService from '../../model/loteria-service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import LoteriaProvider from '../loteria/loteria';

@Injectable()
export default class LoteriaServiceProvider {
  private UrlPrefix = 'http://loterias.caixa.gov.br//wps/portal/loterias/landing/'
  private URL: string = '';

  constructor(private http: Http, private util: UtilitiesProvider, private loteria: LoteriaProvider) {
    //if(this.util.ExecutandoViaBrowser){
      this.URL = 'https://cors.io/?' + this.UrlPrefix;
    //}
  }

  getUltimoJogo(): Observable<LoteriaService> {
    return this.http.get(this.URL + this.loteria.tipoJogo.getUrl())
        .map((response: Response) => <LoteriaService>response.json())
        //.do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError); 
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  } 
}
