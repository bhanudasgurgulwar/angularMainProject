import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'companyDetails', pathMatch: 'full' },
  { path: 'companyDetails', component: CompanyDetailsComponent },
  { path: 'change-password', component: ChangePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
