import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {


  transform(value: string,count:number): string {
    return value.split(' ').slice(0,count).join(' ');
  }

}
