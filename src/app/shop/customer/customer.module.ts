import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerUpdateProfileComponent } from './customer-update-profile/customer-update-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerChangePasswordComponent } from './customer-change-password/customer-change-password.component';
import { OrdersComponent } from './orders/orders.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    CustomerProfileComponent,
    CustomerUpdateProfileComponent,
    CustomerChangePasswordComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule
  ],
})
export class CustomerModule {}
