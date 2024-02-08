import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../interfaces/client.model';
import { ClientService as ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
})
export class AddClientComponent {
  baseUrl = 'http://localhost:8080/api/clients';
  clientForm!: FormGroup;
  clients: Client[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initClientForm();
    this.clients = this.clientService.getClients();
  }

  initClientForm(): void {
    this.clientForm = this.formBuilder.group({
      index: [0],
      // id: 1,
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

  createClient(client: any) {
    axios.post(this.baseUrl, client)
      .then(response => {
        console.log("client cré avec succès:", response);
        this.router.navigate(['/clients']);
      })
      .catch(error => {
        console.error("La création a échoué:", error);
      });
  }
}
