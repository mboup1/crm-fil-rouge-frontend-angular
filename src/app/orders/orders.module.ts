import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrdersComponent as OrdersComponent } from './pages/list-orders/Orders.component';
import { UpdateOrderComponent as UpdateOrderComponent } from './pages/edit-order/update-order.component';
import { AddOrderComponent as AddOrderComponent } from './pages/add-order/add-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
  declarations: [
    OrdersComponent,
    AddOrderComponent,
    UpdateOrderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    OrdersRoutingModule

  ],
  exports: [OrdersComponent]
})
export class ordersModule { }
