import { Component } from '@angular/core';
import { DbzServiceService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(
    //inyeccion de dependencias
    private dbzService: DbzServiceService
  ) {}
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }
  onNewCharacter(character: Character) {
    this.dbzService.addCharacter(character);
  }
  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteById(id);
  }
}
