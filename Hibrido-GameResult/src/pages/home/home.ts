import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntegracaoGameresultProvider } from '../../providers/integracao-gameresult/integracao-gameresult';

import { AlertaComponent } from '../../components/alerta/alerta';
import { LoaderComponent } from '../../components/loader/loader';

import { IGameResult } from '../../interfaces/IGameResult';
import { IPlacarClassificacao } from '../../interfaces/IPlacarClassificacao';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }

  public listaPlacarClassificacao: IPlacarClassificacao[];
  public currentDate: any;

  constructor(
    public navCtrl: NavController,
    public gameResultService: IntegracaoGameresultProvider,
    public alertaCtrl: AlertaComponent,
    public loaderCtrl: LoaderComponent) {

    this.currentDate = new Date().getTime();
  }

  ionViewDidLoad() {

  }

  ionViewDidEnter() {
    this.carregaPlacarClassificacoes();
  }

  carregaPlacarClassificacoes() {

    this.loaderCtrl.showLoading("Aguarde carregando...");

    this.gameResultService.getPlacarClassificacao()
      .subscribe((result) => {

        console.log(`${result}`);
        this.listaPlacarClassificacao = result;

        this.loaderCtrl.hiddenLoading();
      }, error => {
        if(error.status == 0){
         this.alertaCtrl.showError("No 'Access-Control-Allow-Origin' header \n is present on the requested resource");
        }else {
          this.alertaCtrl.showError(error.message);
        }

        this.loaderCtrl.hiddenLoading();
      });

  }

  detalheGame(){
   this.navCtrl.push(ListPage)
  }
}
