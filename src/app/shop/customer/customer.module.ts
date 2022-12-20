import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerUpdateProfileComponent } from './customer-update-profile/customer-update-profile.component';

@NgModule({
  declarations: [CustomerProfileComponent, CustomerUpdateProfileComponent],
  imports: [CommonModule, CustomerRoutingModule],
})
export class CustomerModule {}
