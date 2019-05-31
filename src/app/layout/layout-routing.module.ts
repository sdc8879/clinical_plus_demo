import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // redirectTo: 'customer'
    children: [
      { path: '', redirectTo: 'customer', pathMatch: 'prefix' },
      { path: 'customer', loadChildren: './customer/customer.module#CustomerModule' },
      { path: 'order', loadChildren: './order/order.module#OrderModule' }
    ]
  },
  // { path: 'customer', loadChildren: './customer/customer.module#CustomerModule' },
  // { path: 'order', loadChildren: './order/order.module#TransactionModule'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
