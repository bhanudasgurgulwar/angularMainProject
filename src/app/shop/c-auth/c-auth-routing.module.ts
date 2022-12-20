import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';

const routes: Routes = [
  { path: 'login', component: CustomerloginComponent },
  {path:'registration',component:CustomerregistrationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CAuthRoutingModule {}
