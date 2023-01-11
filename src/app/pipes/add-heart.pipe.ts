import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addHeart'
})
export class AddHeartPipe implements PipeTransform {

  transform(value?: string): any {
    const newLocal = "”" + value + "”";
    return newLocal;
  }

}
