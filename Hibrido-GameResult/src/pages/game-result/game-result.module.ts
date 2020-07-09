import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameResultPage } from './game-result';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    GameResultPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(GameResultPage),
  ],
})
export class GameResultPageModule {}
