import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalServiceService {
  constructor() {}

  setLoacl(tokenName: string, token: string): void {
    localStorage.setItem(tokenName, JSON.stringify(token));
  }

  getLoacl(tokenName: string): string | null {
    if (tokenName === 'token')
      return JSON.parse(localStorage.getItem('token')!);
    else return JSON.parse(localStorage.getItem('ctoken')!);
  }

  removeLoacal(tokenName: string): void {
    if (tokenName === 'token') localStorage.removeItem('token');
    else localStorage.removeItem('ctoken');
  }
}
