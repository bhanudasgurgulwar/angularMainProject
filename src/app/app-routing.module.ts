import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isLoginGuard, isLogoutGuard } from './Guard/authguard.guard';

const routes: Routes = [
  {
    path: 'seller',
    loadChildren: () =>
      import('./seller/seller.module').then((m) => m.SellerModule),
  },
  {
    path: '',
    loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule),
  },
  // {
  //   path: '**',
  //   redirectTo: '/',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [isLoginGuard, isLogoutGuard],
})
export class AppRoutingModule {}
