import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  constructor(private service: ApicallService, private router: Router) { }

  filter:any;
  p: number = 1;
  ngOnInit() {
    this.listCustomer();
  }


  customerList: any = [];

  listCustomer() {
    this.service.getCall('/query/customers.json').subscribe((result) => {
      console.log('customerList--->', result);
      this.customerList = Array.from(result['Results']);
    })
  }

  getSingleCustomer(id) {
    console.log('id----', id);
    // this.router.navigateByUrl('/layout/customer/view/' + id);
    this.router.navigate(['./layout/customer/view/' + id]);

  }

}
