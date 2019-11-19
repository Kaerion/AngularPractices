import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {
    let result = '';
    if (activar) {
      let salida = '';
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < value.length; index++) {
        salida += '*';
      }
      result = salida;
    } else {
      result = value;
    }

    return result;
  }
}
