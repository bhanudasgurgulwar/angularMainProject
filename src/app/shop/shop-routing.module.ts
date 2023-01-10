import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  isCustomerLoginGuard,
  isCustomerLogoutGuard,
} from '../Guard/authguard.guard';
import { DasboardComponent } from './dasboard/dasboard.component';
// import { isCustomerLoginGuard } from '../Guard/authguard.guard';

const routes: Routes = [

  {
    path: '',
    component: DasboardComponent,
    children: [
      {
        path: 'shop',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./customer/customer.module').then((m) => m.CustomerModule),
        canActivate: [isCustomerLoginGuard],
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./c-auth/c-auth.module').then((m) => m.CAuthModule),
    canActivate: [isCustomerLogoutGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
