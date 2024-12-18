import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient(): void {
    this.name = 'Mellisa';
    this.gender = 'female';
  }

  // i18nPlural

  public clients: string[] = ['Maria', 'Eduardo', 'Ray', 'Lourdes'];
  public clientMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other' : 'tenemos # clientes esperando'
  };
  deleteClient(): void {
    this.clients.shift();
  }
   //* Key value pipe

   public person = {
    name:"Ryan",
    age:36,
    address:'Peru'
   }
  //*Async pipe

   public myObservableTime = interval(2000).pipe(
    tap(value => console.log( 'tag:' , value))
   );

   
}
