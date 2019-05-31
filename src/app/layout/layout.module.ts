import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent,SidebarComponent]
})
export class LayoutModule { }
       