import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { GetproductsComponent } from './getproducts/getproducts.component';
import { ShopproductsComponent } from './shopproducts/shopproducts.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { StoreModule } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    GetproductsComponent,
    ShopproductsComponent,
    AddToCartComponent,
  ],
  imports: [CommonModule, HomeRoutingModule,MatButtonModule],
})
export class HomeModule {}
