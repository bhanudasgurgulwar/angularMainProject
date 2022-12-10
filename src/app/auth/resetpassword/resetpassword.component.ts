import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss'],
})
export class ResetpasswordComponent {
  constructor(private http: HttpserviceService, private fb: FormBuilder) {}

  resetPassForm = this.fb.group({
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[0-9])(?=.*[aA-zZ])/),
        Validators.minLength(8),
      ],
    ],
    confirmPassword: ['', [Validators.required]],
  });

  resetPassword() {
    this.resetPassForm.value;
  }
}
