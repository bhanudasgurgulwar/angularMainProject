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
import { OrderHistoryComponent } from './order-history/order-history.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    CustomerProfileComponent,
    CustomerUpdateProfileComponent,
    CustomerChangePasswordComponent,
    OrdersComponent,
    OrderDetailsComponent,
    OrderHistoryComponent,
    MakePaymentComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule
  ],
})
export class CustomerModule {}
