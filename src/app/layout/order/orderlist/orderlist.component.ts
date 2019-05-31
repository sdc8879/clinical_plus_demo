import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  changeText: boolean;
  filter:any;
  p: number = 1;
  constructor(private service: ApicallService) {
   }

  ngOnInit() {
    this.listOrder();
  }


  orderList: any = [];

  listOrder() {
    this.service.getCall('/query/orders.json').subscribe((result) => {  
      console.log('result--->', result);
      this.orderList = Array.from(result['Results']);
    })
  }

}
