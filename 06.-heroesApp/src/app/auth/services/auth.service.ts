import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  private user?: User;
  constructor(private http: HttpClient) {}
  //Para que otros serivicios puedan consumir la data del user

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    //Opt1 -> que pase por referencia
    // return {...this.user};
    //Opt2 -> hacer un clon del objeto
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<User> {
    /**
     * Llamar al usuario de un endpoint y poder traer sus credenciales
     * lo mas recomendable que sea a travez de un post y poder
     * enviarles como los headers los valores
     */
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      tap((user) => localStorage.setItem('token', 'sdafasdf.sdafasdf.asdfasdf'))
    );
  }

  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);
    const token = localStorage.getItem('token');
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      map((user) => !!user),
      catchError((err) => of(false))
    );
  }

  logout(): void {
    this.user = undefined;
    localStorage.clear();
  }
}
