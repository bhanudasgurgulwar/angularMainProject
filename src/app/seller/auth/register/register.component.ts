import { Component } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { HttpserviceService } from 'src/app/Services/HttpServices/httpservice.service';
import { confrimPasswordValidate } from 'src/app/Shared/password.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder,private http:HttpserviceService) {}

  registerData = this.fb.group({
    name: ['', [Validators.required]],
    company: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[0-9])(?=.*[aA-zZ])/),
        Validators.minLength(8),
      ],
    ],
    confirmPassword: ['', [Validators.required]],
    
  },{validators:confrimPasswordValidate});

  // confrimPasswordValidate(controls:AbstractControl){
  //   let pass =controls.get('password');
  //   let conpass =controls.get('confirmPassword');
  //   if(conpass?.dirty && pass?.dirty && pass.value!==conpass.value){
  //     return {isMatch:true}
  //   }
  //   else{
  //     return null;
  //   }

  // }

  isRegistered() {
    console.log(this.registerData.value);
    delete this.registerData.value.confirmPassword;
    console.log(this.registerData.value);
    this.http
      .postData('/auth/register?captcha=false', this.registerData.value)
      .subscribe(
        (res: any) => {},
        (err) => {
          console.log(err);
        }
      );

  }
}
