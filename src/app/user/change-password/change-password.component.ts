import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  constructor(private fb: FormBuilder,private http :HttpserviceService,private router:Router) {}

  changePassword = this.fb.group({
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
  },{validator:this.confrimNewPasswordValidate}
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
    this.http.postData('/users/auth/change-password', this.changePassword.value).subscribe(
      (res) => {
        console.log(res);
        alert("Succesfully Changed Password")
        this.router.navigate(['/user'])
      },
      (err) => {
        console.log(err);
      }
    );
  }



  
}
