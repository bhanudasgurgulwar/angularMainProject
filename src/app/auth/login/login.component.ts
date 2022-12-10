import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';
import { LocalServiceService } from 'src/app/Services/localstorageServices/local-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private httpser: HttpserviceService,
    private loaclser: LocalServiceService,
    private router: Router
  ) {}

  loginData = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    captcha: 'captcha',
  });

  isLogin() {
    delete this.loginData.value.captcha;
    console.log(this.loginData.value);
    this.httpser
      .postData('/auth/login?captcha=false', this.loginData.value)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.loaclser.setLoacl(res?.token);
          this.router.navigate(['/user']);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  forgotPassword() {
    delete this.loginData.value.password;

    this.httpser
      .postData('/auth/forgot-password', this.loginData.value)
      .subscribe(
        (res: any) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
