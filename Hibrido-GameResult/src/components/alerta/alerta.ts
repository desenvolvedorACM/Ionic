import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'alerta',
  templateUrl: 'alerta.html'
})
export class AlertaComponent {

  private text: string;
  private alert:any;
  private confirm:any;
  
  constructor(
    private alertCtrl: AlertController) {

    console.log('Hello AlertaComponent Component');
    this.text = 'Hello World';
  }

  showAlert(title: string, message: string) {
    this.alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });

    this.alert.present();
  }

  showError(message: string) {
    this.alert = this.alertCtrl.create({
      title: "Trata Erro",
      subTitle: message,
      buttons: ['OK']
    });

    this.alert.present();
  }

  showAlertConfirm(title: string, message: string): boolean {

    let confirma: boolean;
    this.confirm = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [
        {
          text: "Sim",
          handler: () => {
            //console.log('sim');
            return true;
          }
        },
        {
          text: "Não",
          handler: () => {
            this.confirm.dismiss();
            return false;
            //console.log('Não');

          }
        }
      ]
    });

    this.confirm.present();
    return confirma;
  }

}
