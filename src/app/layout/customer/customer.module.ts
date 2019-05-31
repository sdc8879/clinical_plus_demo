import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
 
@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  declarations: [CustomerComponent, CustomerlistComponent, ViewcustomerComponent]
})
export class CustomerModule { }
