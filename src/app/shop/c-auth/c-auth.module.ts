import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CAuthRoutingModule } from './c-auth-routing.module';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersCheckoutComponent } from './orders-checkout/orders-checkout.component';


@NgModule({
  declarations: [
    CustomerloginComponent,
    CustomerregistrationComponent,
    OrdersCheckoutComponent
  ],
  imports: [
    CommonModule,
    CAuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class CAuthModule { }
