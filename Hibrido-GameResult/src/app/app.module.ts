import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntegracaoGameresultProvider } from '../providers/integracao-gameresult/integracao-gameresult';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlertaComponent } from '../components/alerta/alerta';
import { LoaderComponent } from '../components/loader/loader';
import { GameResultPageModule } from '../pages/game-result/game-result.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    PipesModule,
    HttpClientModule,
    GameResultPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlertaComponent,
    LoaderComponent,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IntegracaoGameresultProvider
  ]
})
export class AppModule {}
