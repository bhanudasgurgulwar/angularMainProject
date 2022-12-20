import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';
import { LocalServiceService } from 'src/app/Services/localstorageServices/local-service.service';
import { GenSerService } from 'src/app/Services/general/gen-ser.service';

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
    private router: Router,
    private bSub:GenSerService
  ) {}

  loginData = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
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
          this.loaclser.setLoacl('token',res?.token);
          this.router.navigate(['/seller/user']);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  forgotPassword() {
    delete this.loginData.value.password;
    console.log(this.loginData.value);


    this.httpser
      .postData('/auth/forgot-password', this.loginData.value)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.router.navigate(['/auth/reset-password']);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
