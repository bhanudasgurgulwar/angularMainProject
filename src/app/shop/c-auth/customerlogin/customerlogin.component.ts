import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';
import { LocalServiceService } from 'src/app/Services/localstorageServices/local-service.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.scss'],
})
export class CustomerloginComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpserviceService,
    private router: Router,
    private local:LocalServiceService
  ) {}

  cLogin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  customerLogin() {
    this.http.postData('/shop/auth/login', this.cLogin.value).subscribe(
      (res: any) => {
        console.log(res);

        console.log(res.token)
        this.local.setLoacl('ctoken',res?.token)
        this.router.navigate(['']);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.cLogin.value);
  }
}
