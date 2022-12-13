import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutsRoutingModule } from './produts-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SingleproductDetailsComponent } from './singleproduct-details/singleproduct-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    SingleproductDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProdutsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProdutsModule { }
