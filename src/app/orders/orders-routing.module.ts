import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './pages/list-orders/Orders.component';
import { AddOrderComponent } from './pages/add-order/add-order.component';
import { UpdateOrderComponent } from './pages/edit-order/update-order.component';



const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'add-order', component: AddOrderComponent },
  { path: 'update-order', component: UpdateOrderComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrdersRoutingModule { }
