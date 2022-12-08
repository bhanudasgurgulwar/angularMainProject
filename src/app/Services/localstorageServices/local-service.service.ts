import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalServiceService {
  constructor() {}

  setLoacl(token:string) : void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getLoacl() : string | null   {
    return JSON.parse(localStorage.getItem('token')!);
  }

  removeLoacal() :void{
    localStorage.removeItem('token')
  }
  
}
