import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) {}

  registerData = this.fb.group({
    name: ['', [Validators.required]],
    companyName: ['', [Validators.required]],
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
    
  },{validators:this.confrimPasswordValidate});

  confrimPasswordValidate(controls:AbstractControl){
    let pass =controls.get('password');
    let conpass =controls.get('confirmPassword');
    if(conpass?.dirty && pass?.dirty && pass.value!==conpass.value){
      return {isMatch:true}
    }
    else{
      return null;
    }

  }

  isRegistered() {
    console.log(this.registerData.value);
    delete this.registerData.value.confirmPassword;
    console.log(this.registerData.value);
  }
}
