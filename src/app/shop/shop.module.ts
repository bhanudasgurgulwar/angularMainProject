import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [HomeModule, CommonModule, ShopRoutingModule],
})
export class ShopModule {}
