import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../../clients/service/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { API_BASE_URL } from '../../../config/config';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
})
export class UpdateOrderComponent implements OnInit {
  orderForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initOrderForm();
    this.route.queryParams.subscribe((params) => {
      this.orderForm.patchValue({
        index: params['index'],
        id: params['id'],
        typePresta: params['typePresta'],
        designation: params['designation'],
        nbDays: params['nbDays'],
        unitPrice: params['unitPrice'],
        state: params['state'],
      });
    });
  }

  initOrderForm(): void {
    this.orderForm = this.formBuilder.group({
      index: [0],
      id: 1,
      typePresta: ['', Validators.required],
      designation: ['', Validators.required],
      nbDays: [0, Validators.required],
      unitPrice: [0, Validators.required],
      state: ['ACTIVE'], // ou 'INACTIVE' selon le cas
    });
  }

  updateOrder(id: number, order: any) {
    axios
      .put(`${API_BASE_URL}/orders/${id}`, order)
      .then((response) => {
        console.log('Update successful:', response);
        this.router.navigate(['/orders']);
      })
      .catch((error) => {
        console.error('Update failed:', error);
      });
  }
}
