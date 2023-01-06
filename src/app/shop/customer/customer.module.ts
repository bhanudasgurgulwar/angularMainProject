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
import { OrderDetailsComponent } from './order-details/order-details.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    CustomerProfileComponent,
    CustomerUpdateProfileComponent,
    CustomerChangePasswordComponent,
    OrdersComponent,
    OrderDetailsComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule
  ],
})
export class CustomerModule {}
