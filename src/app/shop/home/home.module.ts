import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { GetproductsComponent } from './getproducts/getproducts.component';
import { ShopproductsComponent } from './shopproducts/shopproducts.component';


@NgModule({
  declarations: [
    GetproductsComponent,
    ShopproductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
