import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {


  profile = new Subject<object>;  

  constructor() { }


}
