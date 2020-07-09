import { NgModule } from "@angular/core";
import { DateFormatPipe } from "./date-format/date-format";
import { FormataDataPipe } from "./formata-data/formata-data";
@NgModule({
  declarations: [DateFormatPipe, FormataDataPipe],
  imports: [],
  exports: [DateFormatPipe, FormataDataPipe]
})
export class PipesModule {}
