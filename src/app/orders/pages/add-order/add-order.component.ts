import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../../../interfaces/order.model';
import { Client } from '../../../interfaces/client.model';
import { ClientService as ClientService } from '../../../clients/service/client.service';
import { Router } from '@angular/router';
import axios from 'axios';
import { API_BASE_URL } from '../../../config/config';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
})
export class AddOrderComponent implements OnInit {
  orderForm!: FormGroup;
  ordersList: Order[] = [];
  clients: Client[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private orderService: ClientService,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initOrderForm();
    this.ordersList = this.orderService.getOrders();
    this.clients = this.clientService.getClients();

  }

  initOrderForm(): void {
    this.orderForm = this.formBuilder.group({
      id: [0],
      idClient: [null, Validators.required],
      typePresta: ['', Validators.required],
      designation: ['', Validators.required],
      nbDays: [''],
      unitPrice: [0, Validators.required],
      state: ['OPTION', Validators.required],
    });
  }

  addOrder(order: any) {
    axios.post(`${API_BASE_URL}/orders`, order)
      .then(response => {
        console.log("Commande créée avec succès:", response);
        this.router.navigate(['/orders']);
      })
      .catch(error => {
        console.error("La création a échoué:", error);
      });
  }

}
