import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  /**
   * EventEmitter es un genetico lo que quiere
   * decir que el tipo de dato que va a fluir
   * de ese objeto
   */
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    id:'',
    name: '',
    power: 0,
  };
  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = { id:'', name: '', power: 0 };
  }
}
