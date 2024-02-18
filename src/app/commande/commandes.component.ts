import { Component } from '@angular/core';
import { ClientService } from '../services/client.service';
import axios from 'axios';
import { Router } from '@angular/router';
import { Order } from '../interfaces/commande.model';
import { API_BASE_URL } from '../config/config';

@Component({
  selector: 'app-commande',
  templateUrl: './commandes.component.html',
})


export class CommandesComponent {
  commandes: Order[] = [];
  constructor(
    private clientService: ClientService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.clientService.fetchDataCommande().then(() => {
      this.commandes = this.clientService.getCommandes();
      this.commandes.sort((a, b) => (b.id < a.id) ? 1 : -1);
      // console.log("Liste commandes : ", this.commandes);
    });
  }

  onDeleteCommande(id: number, typePresta: string, designation: string): void {
    const conf = confirm(`Etes-vous sûr de vouloir supprimer la commande ${typePresta} - ${designation} ?`);

    if (conf) {
      axios.delete(`${API_BASE_URL}/orders`)
        .then(() => {
          this.commandes = this.commandes.filter(commande => commande.id !== id);
          console.log("Commande supprimée avec succès!");
        })
        .catch(error => {
          console.error("Erreur lors de la suppression de la commande:", error);
        });
    }
  }
}
