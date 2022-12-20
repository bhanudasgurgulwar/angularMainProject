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
import { CustomerAuthServiceService } from './customer-auth-service.service';

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



@Injectable({
  providedIn: 'root',
})
export class isCustomerLoginGuard implements CanActivate {
  constructor(private router: Router, private auth: CustomerAuthServiceService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.isCustomerLoggedIn()) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}

@Injectable({
  providedIn: 'root',
})
export class isCustomerLogoutGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: CustomerAuthServiceService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.auth.isCustomerLoggedIn()) {
    return true;
    }
    this.router.navigate(['']);
    return false;
    
  }
}