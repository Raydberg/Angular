import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  canBeStrider,
  emailPattern,
  firstNameAndLastnamePattern,
} from '../../../shared/validators/validators.functions';

@Component({
  selector: 'auth-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  public myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern(firstNameAndLastnamePattern)],
      ],
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      username: ['', [Validators.required, canBeStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    });
  }

  isValidField(field: string) {
    //* Validacion desde un servicio
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
  }
}
