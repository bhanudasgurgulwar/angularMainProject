import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';

@Component({
  selector: 'app-customerregistration',
  templateUrl: './customerregistration.component.html',
  styleUrls: ['./customerregistration.component.scss'],
})
export class CustomerregistrationComponent {
  constructor(private http: HttpserviceService, private fb: FormBuilder) {}

  cRegistration = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.pattern(''), Validators.required]],
    confirmPassword:[''],
    name: ['', [Validators.required]],
    address: this.fb.group({
      street: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pin: ['', Validators.required],
    }),
  });

  customerRegistration() {
    console.log(this.cRegistration.value)
    // this.http.postData('', this.cRegistration.value).subscribe(
    //   (res:any) => console.log(res),
    //   (err) => console.log(err)
    // );
  }
}
