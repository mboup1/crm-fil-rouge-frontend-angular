import { Component } from '@angular/core';
import { Client } from '../../../interfaces/client.model';
import { ClientService } from '../../service/client.service';

import axios from 'axios';
import { Router } from '@angular/router';
import { API_BASE_URL } from '../../../config/config';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent {
  clients: Client[] = [];

  selectedClient: Client | null = null;



  constructor(
    private clientService: ClientService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.clientService.fetchDataClients().then(() => {
      this.clients = this.clientService.getClients();

      // Tri des clients par ordre décroissant selon l'ID
      this.clients.sort((a, b) => (b.id < a.id) ? 1 : -1);
      // console.log("Liste clients : ", this.clients);
    });
  }

  onDeleteClient(id: number, firstName: string, name: string) {
    let conf = confirm(`Etes-vous sûr de vouloir supprimer ${name}  ${firstName} ?`);

    if (conf)
      axios.delete(`${API_BASE_URL}/clients/${id}`)
        .then(() => {
          this.clients = this.clients.filter(client => client.id !== id);
          console.log("client supprimé avec succès!");
        })
        .catch(error => {
          console.error("Erreur lors de la suppression de la client:", error);
        });
  }

  getClient(id: number) {
    axios
      .get(`${API_BASE_URL}/clients/${id}`)
      .then((response) => {
        this.selectedClient = response.data;
        // console.log('this.selectedClient :', this.selectedClient);
        this.clients.sort((a, b) => (b.id < a.id) ? 1 : -1);

        // console.log('recup client avec succès :', response.data);
        this.router.navigate(['/clients']);
      })
      .catch((error) => {
        console.error('erreur:', error);
      });
  }
}
