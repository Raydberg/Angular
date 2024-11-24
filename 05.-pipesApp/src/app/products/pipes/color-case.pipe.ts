import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interfaces';
 

@Pipe({
  name: 'colorCase',
})
export class ColorCasePipe implements PipeTransform {
  private colorsMaps = {
    [Color.red]: 'Color Red',
    [Color.black]: 'Color Negro',
    [Color.blue]: 'Color Blue',
    [Color.green]: 'Color Verde',
  };

  transform(value: Color): string {
    return this.colorsMaps[value] || 'Unknown';
  }
}