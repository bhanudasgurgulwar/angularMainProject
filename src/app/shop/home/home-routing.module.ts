import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { GetproductsComponent } from './getproducts/getproducts.component';
import { ShopproductsComponent } from './shopproducts/shopproducts.component';

const routes: Routes = [
  {
    path: '',
    component: ShopproductsComponent,
  },
  {
    path: 'product/:id',
    component: GetproductsComponent,
  },
  { path: 'cart', component: AddToCartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
