import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower:string = 'Ryan'
  public nameUpper:string = 'RYAN'
  public fullName:string = 'RaYDeRg'
}
