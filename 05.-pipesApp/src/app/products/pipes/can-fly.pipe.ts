import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(isFly: boolean): 'vuela' | 'no vuela' {
    return isFly ? 'vuela' : 'no vuela';
  }
}
