import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root',
})
export class isLoginGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthserviceService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/seller/auth']);
    return false;
  }
}

@Injectable({
  providedIn: 'root',
})
export class isLogoutGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthserviceService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.auth.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/seller/user']);
    return false;
  }
}
