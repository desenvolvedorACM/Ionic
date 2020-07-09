import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


@Pipe({
  name: 'formataData',
})
export class FormataDataPipe implements PipeTransform {
  transform(value: string) {
    let datePipe = new DatePipe('en-Us');
    value = datePipe.transform(value, 'dd/MM/yyyy');
    return value.toLowerCase();
  }
}
