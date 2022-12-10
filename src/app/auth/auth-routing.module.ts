import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isLogoutGuard } from '../Guard/authguard.guard';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { canActivate: [isLogoutGuard], path: 'login', component: LoginComponent },
  {
    canActivate: [isLogoutGuard],
    path: 'register',
    component: RegisterComponent,
  },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'reset-password', component: ResetpasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
