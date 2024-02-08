import { Component } from '@angular/core';
import { Client } from '../interfaces/client.model';
import { ClientService } from '../services/client.service';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent {
  baseUrl = 'http://localhost:8080/api/clients';
  clients: Client[] = [];
  constructor(
    private clientService: ClientService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.clientService.fetchData().then(() => {
      this.clients = this.clientService.getClients();
      console.log("Liste clients : ", this.clients);
    });
  }

  onDeleteClient(id: number, firstName: string, name: string) {
    let conf = confirm(`Etes-vous sûr de vouloir supprimer ${name}  ${firstName} ?`);

    if (conf)
      axios.delete(`${this.baseUrl}/${id}`)
        .then(() => {
          this.clients = this.clients.filter(client => client.id !== id);
          console.log("client supprimé avec succès!");
        })
        .catch(error => {
          console.error("Erreur lors de la suppression de la client:", error);
        });
  }
}
