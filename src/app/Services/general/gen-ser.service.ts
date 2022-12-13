import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenSerService {

  constructor() { }

  activeUser:any= new BehaviorSubject('user');

  
  

  

}
