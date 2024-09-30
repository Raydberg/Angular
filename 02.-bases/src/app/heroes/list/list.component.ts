import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroName: string[] = [
    'Spiderman',
    'Iroman',
    'Hulk',
    'She Hulk',
    'Ryan',
  ];
  public deleteHero?: string;
  removeLastHero(): void {
    this.deleteHero = this.heroName.pop();
  }
}
