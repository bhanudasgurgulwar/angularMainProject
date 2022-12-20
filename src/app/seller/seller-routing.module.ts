import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isLoginGuard } from '../Guard/authguard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/seller/auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    canActivate: [isLoginGuard],
    path: 'user',
    loadChildren: () =>
      import('../seller/user/user.module').then((m) => m.UserModule),
  },
  {
    canActivate: [isLoginGuard],
    path: 'products',
    loadChildren: () =>
      import('../seller/produts/produts.module').then((m) => m.ProdutsModule),
  },
  // {
  //   path: '**',
  //   redirectTo: '/auth',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerRoutingModule {}
