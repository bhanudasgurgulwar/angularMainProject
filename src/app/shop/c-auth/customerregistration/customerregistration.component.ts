import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';
import { confrimPasswordValidate } from 'src/app/Shared/password.validator';

@Component({
  selector: 'app-customerregistration',
  templateUrl: './customerregistration.component.html',
  styleUrls: ['./customerregistration.component.scss'],
})
export class CustomerregistrationComponent {
  constructor(private http: HttpserviceService, private fb: FormBuilder) {}

  cRegistration = this.fb.group(
    {
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [Validators.pattern(/^(?=.*[0-9])(?=.*[aA-zZ])/), Validators.required],
      ],
      confirmPassword: ['', [Validators.required]],
      name: ['', [Validators.required]],
      address: this.fb.group({
        street: ['', Validators.required],
        addressLine2: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        pin: [
          '',
          [
            Validators.required,
            Validators.maxLength(6),
            Validators.minLength(6),
          ],
        ],
      }),
    },
    { validators: confrimPasswordValidate }
  );

  customerRegistration() {
    console.log(this.cRegistration.value);
    delete this.cRegistration.value.confirmPassword;
    console.log(this.cRegistration.value);
    this.http.postData('/shop/auth/register', this.cRegistration.value).subscribe(
      (res: any) => console.log(res),
      (err) => console.log(err)
    );
  }
}
