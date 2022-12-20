import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.scss'],
})
export class CustomerloginComponent {
  constructor(private fb: FormBuilder, private http: HttpserviceService) {}

  cLogin = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required]],
  });

  customerLogin() {
    // this.http.postData('/shop/auth/login', this.cLogin.value).subscribe(
    //   (res: any) => {
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
    console.log(this.cLogin.value)
  }
}
