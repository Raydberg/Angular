import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) {}


  onLogin(): void {
    this.authService.login('ryan@gamil.com', '123654').subscribe((user) => {
      this.router.navigate(['/']);
    });
  }

}
