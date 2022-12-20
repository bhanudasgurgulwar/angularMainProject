import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewProductComponent } from './create-new-product/create-new-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SingleproductDetailsComponent } from './singleproduct-details/singleproduct-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products/product-details',
    pathMatch: 'full',
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent,
  },
  {
    path:'create-product',
    component:CreateNewProductComponent
  },
  {
    path:'product-info/:id',
    component:SingleproductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutsRoutingModule {}
