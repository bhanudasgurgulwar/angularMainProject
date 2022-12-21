import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerUpdateProfileComponent } from './customer-update-profile/customer-update-profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerProfileComponent, CustomerUpdateProfileComponent],
  imports: [CommonModule, CustomerRoutingModule,ReactiveFormsModule],
})
export class CustomerModule {}
