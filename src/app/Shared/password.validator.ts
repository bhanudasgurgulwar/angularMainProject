import { AbstractControl } from '@angular/forms';

export function confrimPasswordValidate(controls: AbstractControl) {
  let pass = controls.get('password');
  let conpass = controls.get('confirmPassword');
  if (conpass?.dirty && pass?.dirty && pass.value !== conpass.value) {
    return { isMatch: true };
  } else {
    return null;
  }
}
