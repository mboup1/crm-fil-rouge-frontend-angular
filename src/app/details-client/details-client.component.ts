import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
})
export class DetailsClientComponent {
  baseUrl = 'http://localhost:8080/api/clients';
  clientForm!: FormGroup;
  // clients: Client[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initClientForm();
    this.route.queryParams.subscribe(params => {
      this.clientForm.patchValue({
        index: params['index'],
        id: params['id'],
        companyName: params['companyName'],
        firstName: params['firstName'],
        lastName: params['lastName'],
        email: params['email'],
        phone: params['phone'],
        address: params['address'],
        zipCode: params['zipCode'],
        city: params['city'],
        country: params['country'],
        state: params['state']
      });
    });
  }

  initClientForm(): void {
    this.clientForm = this.formBuilder.group({
      index: [0],
      id: 1,
      companyName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: [''],
      zipCode: [''],
      city: [''],
      country: [''],
      state: ['ACTIVE'], // ou 'INACTIVE' selon le cas
    });
  }

  getClient(id: number, client: any) {
    axios.get(`${this.baseUrl}/${id}`, client)
      .then(response => {
        console.log("Update successful:", response);
        this.router.navigate(['/clients']);
      })
      .catch(error => {
        console.error("Update failed:", error);
      });
  }

}
