import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {


  apiURL = 'http://northwind.servicestack.net';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) {

  }

  getCall(url: any) {
    console.log('url----', this.apiURL + url);
    return this.httpClient.get(this.apiURL + url);
  }
  postCall(url: any, paramaeters?: any) {
    return this.httpClient.post(this.apiURL + url, paramaeters, this.httpOptions);
  }


}
