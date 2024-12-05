import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const product = {
  name: 'RXT 990',
  price: 2500,
  inStorage: 6,
};

@Component({
  selector: 'reactive-basic-page',
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent implements OnInit {
  // public myForm: FormGroup = new FormGroup({
  //FormControl("value default",[validaciones sincronas],[validaciones asincronas])
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });
  public myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      inStorage: [0, [Validators.required, Validators.min(0)]],
    });
  }
  ngOnInit(): void {
    // this.myForm.reset(product);
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched
    );
  }
  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;
      }
      
    }
    return null;
  }
  onSave(): void {
    if (this.myForm.invalid) {
      /**
       * Marcar todo los campos como tocados ya que
       * si no lo tocamos y enviamos no nos saldran los errores
       */
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset({ price: 0, inStorage: 0 });
  }
}
