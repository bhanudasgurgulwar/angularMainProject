import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalServiceService } from '../Services/localstorageServices/local-service.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerAuthServiceService {

  constructor(private router: Router,private local:LocalServiceService) {}

  setToken(token: string): void {
    localStorage.setItem('ctoken', token);
  }


  isCustomerLoggedIn() {
    return this.local.getLoacl('ctoken') !== null;
  }

  CustomerLogout() {
    localStorage.removeItem('ctoken');
    this.router.navigate(['/auth/login']);
  }
}
