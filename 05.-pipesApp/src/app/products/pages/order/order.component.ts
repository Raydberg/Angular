import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-order-page',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;
  public colorsMaps = {
    '=0': 'Color Red',
    '=1': 'Color Negro',
    '=2': 'Color Blue',
    '=3': 'Color Verde',
  };
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    },
  ];
  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
  changeOrder(value: keyof Hero){
    this.orderBy=value
  }
}
