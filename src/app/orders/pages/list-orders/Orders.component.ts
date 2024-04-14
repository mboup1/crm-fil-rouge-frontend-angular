import { Component } from '@angular/core';
import { ClientService } from '../../../clients/service/client.service';
import axios from 'axios';
import { Router } from '@angular/router';
import { Order } from '../../../interfaces/order.model';
import { API_BASE_URL } from '../../../config/config';

@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
})


export class OrdersComponent {
  orders: Order[] = [];
  constructor(
    private clientService: ClientService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.clientService.fetchDataOrders().then(() => {
      this.orders = this.clientService.getOrders();
      this.orders.sort((a, b) => (b.id < a.id) ? 1 : -1);
    });
  }

  onDeleteOrder(id: number, typePresta: string, designation: string): void {
    const conf = confirm(`Etes-vous sûr de vouloir supprimer la commande ${typePresta} - ${designation} ?`);

    if (conf) {
      axios.delete(`${API_BASE_URL}/orders`)
        .then(() => {
          this.orders = this.orders.filter(order => order.id !== id);
        })
        .catch(error => {
        });
    }
  }
}
