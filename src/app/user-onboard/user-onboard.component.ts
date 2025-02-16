import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-onboard',
  templateUrl: './user-onboard.component.html',
  styleUrls: ['./user-onboard.component.scss']
})
export class UserOnboardComponent {

  onboardForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserOnboardComponent>,
    private fb: FormBuilder
  ) {
    this.onboardForm = this.fb.group({
      username: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  submitForm() {
    if (this.onboardForm.valid) {
      console.log('User Data:', this.onboardForm.value);
      this.dialogRef.close(); // Close the modal
    }
  }
}
