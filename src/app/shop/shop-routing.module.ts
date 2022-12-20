import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  isCustomerLoginGuard,
  isCustomerLogoutGuard,
} from '../Guard/authguard.guard';
// import { isCustomerLoginGuard } from '../Guard/authguard.guard';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
    import('./c-auth/c-auth.module').then((m) => m.CAuthModule),
    canActivate: [isCustomerLogoutGuard],
  },
  {
    path: 'customer',
    loadChildren: () =>
    import('./customer/customer.module').then((m) => m.CustomerModule),
    canActivate: [isCustomerLoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
