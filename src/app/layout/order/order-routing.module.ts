import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { AddorderComponent } from './addorder/addorder.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: 'list',
        component: OrderlistComponent
      },
      {
        path: 'add/:id',
        component: AddorderComponent
      },
      {
        path: '',
        component: OrderlistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
