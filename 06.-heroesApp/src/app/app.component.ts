import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'heroesApp';
  /**
   * No es recomendado poner la autenticacion aqui
   * ya que si es bien cierto que cuando la aplicacion
   * inicia pasa por aqui , puede que el usuario
   * aun no este autenticado pero aun asi , haya visto
   * cosas que no deberia de ver
   */
  
  // constructor(private authService:AuthService){}

  // ngOnInit(): void {
  //   this.authService.checkAuthentication().subscribe(
      
  //   )
  // }
}
