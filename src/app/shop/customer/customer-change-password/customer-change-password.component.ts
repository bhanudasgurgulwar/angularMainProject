import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';

@Component({
  selector: 'app-customer-change-password',
  templateUrl: './customer-change-password.component.html',
  styleUrls: ['./customer-change-password.component.scss'],
})
export class CustomerChangePasswordComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpserviceService,
    private router: Router
  ) {}

  changePassword = this.fb.group(
    {
      old_password: ['', [Validators.required]],
      new_password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[0-9])(?=.*[aA-zZ])/),
          Validators.minLength(8),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    },
    { validator: this.confrimNewPasswordValidate }
  );

  confrimNewPasswordValidate(controls: AbstractControl) {
    let pass = controls.get('new_password');
    let conpass = controls.get('confirmPassword');
    if (conpass?.dirty && pass?.dirty && pass.value !== conpass.value) {
      return { isMatch: true };
    } else {
      return null;
    }
  }

  handleChangePassword() {
    console.log(this.changePassword.value);
    delete this.changePassword.value.confirmPassword;
    this.http
      .postData('/customers/auth/change-password', this.changePassword.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert('Succesfully Changed Password');
          this.router.navigate(['/customer']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
