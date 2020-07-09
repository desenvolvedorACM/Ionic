
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Http,Response } from '@angular/http';

import {} from 'rxjs/add/operator/do';
import {} from 'rxjs/add/operator/map';
import {} from 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable'

import { IGameResult } from '../../interfaces/IGameResult';
import { IPlacarClassificacao } from '../../interfaces/IPlacarClassificacao';


@Injectable()
export class IntegracaoGameresultProvider {

  private _basePathUrl = "http://gameresult.arrobatecinformatica.com.br/api/homologacao/";
  private basePathUrl = "/api";

  /*private headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + "tokenContent");*/

  constructor(public http: HttpClient) {
    //console.log('Hello IntegracaoGameresultProvider Provider');
  }

  getGameResults(): Observable<Array<IGameResult>> {
    return this.http.get(`${this.basePathUrl}/gameresult`)
      .map((res: Array<IGameResult>) => res);
  }

  getPlacarClassificacao(): Observable<IPlacarClassificacao[]> {
    return this.http.get(`${this.basePathUrl}/placarclassificacao`)
      .map((res: IPlacarClassificacao[]) => res);
  }

  Erro(error) {
    return Observable.throw(error.json().error || 'Server error');
  }
}
