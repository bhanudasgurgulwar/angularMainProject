import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerChangePasswordComponent } from './customer-change-password/customer-change-password.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerUpdateProfileComponent } from './customer-update-profile/customer-update-profile.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: CustomerProfileComponent },
  { path: 'profile-update', component: CustomerUpdateProfileComponent },
  { path: 'change-password', component: CustomerChangePasswordComponent },
  { path: 'order', component: OrdersComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
