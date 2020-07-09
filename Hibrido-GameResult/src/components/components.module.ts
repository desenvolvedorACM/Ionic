import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader';
import { AlertaComponent } from './alerta/alerta';
@NgModule({
	declarations: [LoaderComponent,
    AlertaComponent],
	imports: [],
	exports: [LoaderComponent,
    AlertaComponent]
})
export class ComponentsModule {}
