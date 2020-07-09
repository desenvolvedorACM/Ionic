import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'loader',
  templateUrl: 'loader.html'
})
export class LoaderComponent {

  private loader: any;

  constructor(
    private loadingCtrl: LoadingController) {

  }

  showLoading(msg: string) {
    this.loader = this.loadingCtrl.create({
      content: msg
    });

    this.loader.present();
  }

  hiddenLoading() {
    this.loader.dismiss();
  }
}
