import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntegracaoGameresultProvider } from '../../providers/integracao-gameresult/integracao-gameresult';
import { AlertaComponent } from '../../components/alerta/alerta';
import { LoaderComponent } from '../../components/loader/loader';
import { IGameResult } from '../../interfaces/IGameResult';


@IonicPage()
@Component({
  selector: 'page-game-result',
  templateUrl: 'game-result.html',
})
export class GameResultPage {

  public gameResults: Array<IGameResult>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gameResultService: IntegracaoGameresultProvider,
    public alertaCtrl: AlertaComponent,
    public loaderCtrl: LoaderComponent) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameResultPage');
  }

  ionViewDidEnter() {
    this.carregaResultadoJogos();
  }

  carregaResultadoJogos() {

    this.loaderCtrl.showLoading("Aguarde carregando...");

    this.gameResultService.getGameResults()
      .subscribe((result) => {

        console.log(`${result}`);
        this.gameResults = result;

        this.loaderCtrl.hiddenLoading();
      }, (error) => {
        if (error.status == 0) {
          this.alertaCtrl.showError("No 'Access-Control-Allow-Origin' header \n is present on the requested resource");
        } else {
          this.alertaCtrl.showError(error.message);
        }
        this.loaderCtrl.hiddenLoading();
      });

  }
}
