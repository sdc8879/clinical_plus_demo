import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderComponent } from './order.component';
import { AddorderComponent } from './addorder/addorder.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [OrderComponent,OrderlistComponent, AddorderComponent]
})
export class OrderModule { }
