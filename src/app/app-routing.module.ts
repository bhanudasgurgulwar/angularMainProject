import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isLoginGuard, isLogoutGuard } from './Guard/authguard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    canActivate: [isLogoutGuard],
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    canActivate: [isLoginGuard],
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [isLoginGuard, isLogoutGuard],
})
export class AppRoutingModule {}
