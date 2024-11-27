import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);
  readonly data: Hero = inject<Hero>(MAT_DIALOG_DATA);
  // readonly animal = model(this.data.animal);

  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
