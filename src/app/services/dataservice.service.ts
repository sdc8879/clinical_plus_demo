import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() {

  }


  private indiCustomerSource = new BehaviorSubject('');
  currentIndiCustomerSource = this.indiCustomerSource.asObservable();
  getIndvidualCustomerData(data: any) {
    this.indiCustomerSource.next(data);
  }
  
}
