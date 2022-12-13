import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss'],
})
export class ResetpasswordComponent implements OnInit {
  constructor(
    private http: HttpserviceService,
    private actroute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

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
    console.log(this.resetPassForm.value);
    delete this.resetPassForm.value.confirmPassword;

    this.actroute.queryParams.subscribe((param) => {
      console.log(param);
      this.http
        .postData(
          '/auth/reset-password?token=' + param['token'],
          this.resetPassForm.value
        )
        .subscribe(
          (res) => {
            console.log(res);
            alert('successfully reset password try login')
            this.router.navigate(['/auth/login'])
          },
          (err) => {
            console.log(err);
          }
        );
    });
  }
}
