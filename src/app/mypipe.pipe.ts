import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(id:number): string {
    return `./assets/img/${id}.png`;
  }
}
