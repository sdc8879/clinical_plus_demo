import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: ApicallService) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id--------', id)
    this.getCustomerDetails(id);
  }

  ngOnInit() {

  }

  customerInfo:any=[];
  custDetail: any = [];

  getCustomerDetails(id) {
    this.service.getCall('/customers/' + id + '.json').subscribe((result) => {
      console.log('result----------------------', result);
      this.customerInfo.push(result['Customer']);
      this.custDetail = result['CustomerOrders'];

    })
  }



  // m1() {

  //   this.custDetail = [
  //     {
  //       "Order": {
  //         "Id": 10643,
  //         "CustomerId": "ALFKI",
  //         "EmployeeId": 6,
  //         "OrderDate": "/Date(872467200000-0000)/",
  //         "RequiredDate": "/Date(874886400000-0000)/",
  //         "ShippedDate": "/Date(873158400000-0000)/",
  //         "ShipVia": 1,
  //         "Freight": 29.46,
  //         "ShipName": "Alfreds Futterkiste",
  //         "ShipAddress": "Obere Str. 57",
  //         "ShipCity": "Berlin",
  //         "ShipPostalCode": "12209",
  //         "ShipCountry": "Germany"
  //       },
  //       "OrderDetails": [
  //         {
  //           "OrderId": 10643,
  //           "ProductId": 28,
  //           "UnitPrice": 45.6,
  //           "Quantity": 15,
  //           "Discount": 0.25
  //         },
  //         {
  //           "OrderId": 10643,
  //           "ProductId": 39,
  //           "UnitPrice": 18,
  //           "Quantity": 21,
  //           "Discount": 0.25
  //         },
  //         {
  //           "OrderId": 10643,
  //           "ProductId": 46,
  //           "UnitPrice": 12,
  //           "Quantity": 2,
  //           "Discount": 0.25
  //         }
  //       ]
  //     },
  //     {
  //       "Order": {
  //         "Id": 10692,
  //         "CustomerId": "ALFKI",
  //         "EmployeeId": 4,
  //         "OrderDate": "/Date(875836800000-0000)/",
  //         "RequiredDate": "/Date(878256000000-0000)/",
  //         "ShippedDate": "/Date(876700800000-0000)/",
  //         "ShipVia": 2,
  //         "Freight": 61.02,
  //         "ShipName": "Alfred's Futterkiste",
  //         "ShipAddress": "Obere Str. 57",
  //         "ShipCity": "Berlin",
  //         "ShipPostalCode": "12209",
  //         "ShipCountry": "Germany"
  //       },
  //       "OrderDetails": [
  //         {
  //           "OrderId": 10692,
  //           "ProductId": 63,
  //           "UnitPrice": 43.9,
  //           "Quantity": 20,
  //           "Discount": 0
  //         }
  //       ]
  //     },
  //     {
  //       "Order": {
  //         "Id": 10702,
  //         "CustomerId": "ALFKI",
  //         "EmployeeId": 4,
  //         "OrderDate": "/Date(876700800000-0000)/",
  //         "RequiredDate": "/Date(880329600000-0000)/",
  //         "ShippedDate": "/Date(877392000000-0000)/",
  //         "ShipVia": 1,
  //         "Freight": 23.94,
  //         "ShipName": "Alfred's Futterkiste",
  //         "ShipAddress": "Obere Str. 57",
  //         "ShipCity": "Berlin",
  //         "ShipPostalCode": "12209",
  //         "ShipCountry": "Germany"
  //       },
  //       "OrderDetails": [
  //         {
  //           "OrderId": 10702,
  //           "ProductId": 3,
  //           "UnitPrice": 10,
  //           "Quantity": 6,
  //           "Discount": 0
  //         },
  //         {
  //           "OrderId": 10702,
  //           "ProductId": 76,
  //           "UnitPrice": 18,
  //           "Quantity": 15,
  //           "Discount": 0
  //         }
  //       ]
  //     },
  //     {
  //       "Order": {
  //         "Id": 10835,
  //         "CustomerId": "ALFKI",
  //         "EmployeeId": 1,
  //         "OrderDate": "/Date(884822400000-0000)/",
  //         "RequiredDate": "/Date(887241600000-0000)/",
  //         "ShippedDate": "/Date(885340800000-0000)/",
  //         "ShipVia": 3,
  //         "Freight": 69.53,
  //         "ShipName": "Alfred's Futterkiste",
  //         "ShipAddress": "Obere Str. 57",
  //         "ShipCity": "Berlin",
  //         "ShipPostalCode": "12209",
  //         "ShipCountry": "Germany"
  //       },
  //       "OrderDetails": [
  //         {
  //           "OrderId": 10835,
  //           "ProductId": 59,
  //           "UnitPrice": 55,
  //           "Quantity": 15,
  //           "Discount": 0
  //         },
  //         {
  //           "OrderId": 10835,
  //           "ProductId": 77,
  //           "UnitPrice": 13,
  //           "Quantity": 2,
  //           "Discount": 0.2
  //         }
  //       ]
  //     },
  //     {
  //       "Order": {
  //         "Id": 10952,
  //         "CustomerId": "ALFKI",
  //         "EmployeeId": 1,
  //         "OrderDate": "/Date(890006400000-0000)/",
  //         "RequiredDate": "/Date(893635200000-0000)/",
  //         "ShippedDate": "/Date(890697600000-0000)/",
  //         "ShipVia": 1,
  //         "Freight": 40.42,
  //         "ShipName": "Alfred's Futterkiste",
  //         "ShipAddress": "Obere Str. 57",
  //         "ShipCity": "Berlin",
  //         "ShipPostalCode": "12209",
  //         "ShipCountry": "Germany"
  //       },
  //       "OrderDetails": [
  //         {
  //           "OrderId": 10952,
  //           "ProductId": 6,
  //           "UnitPrice": 25,
  //           "Quantity": 16,
  //           "Discount": 0.05
  //         },
  //         {
  //           "OrderId": 10952,
  //           "ProductId": 28,
  //           "UnitPrice": 45.6,
  //           "Quantity": 2,
  //           "Discount": 0
  //         }
  //       ]
  //     },
  //     {
  //       "Order": {
  //         "Id": 11011,
  //         "CustomerId": "ALFKI",
  //         "EmployeeId": 3,
  //         "OrderDate": "/Date(892080000000-0000)/",
  //         "RequiredDate": "/Date(894499200000-0000)/",
  //         "ShippedDate": "/Date(892425600000-0000)/",
  //         "ShipVia": 1,
  //         "Freight": 1.21,
  //         "ShipName": "Alfred's Futterkiste",
  //         "ShipAddress": "Obere Str. 57",
  //         "ShipCity": "Berlin",
  //         "ShipPostalCode": "12209",
  //         "ShipCountry": "Germany"
  //       },
  //       "OrderDetails": [
  //         {
  //           "OrderId": 11011,
  //           "ProductId": 58,
  //           "UnitPrice": 13.25,
  //           "Quantity": 40,
  //           "Discount": 0.05
  //         },
  //         {
  //           "OrderId": 11011,
  //           "ProductId": 71,
  //           "UnitPrice": 21.5,
  //           "Quantity": 20,
  //           "Discount": 0
  //         }
  //       ]
  //     }
  //   ]

  // }
}
