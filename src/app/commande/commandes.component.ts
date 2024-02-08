import { Component } from '@angular/core';
import { Client } from '../interfaces/client.model';
import { ClientService } from '../services/client.service';
import axios from 'axios';
import { Router } from '@angular/router';
import { Commande } from '../interfaces/commande.model';

@Component({
  selector: 'app-commande',
  templateUrl: './commandes.component.html',
})


export class CommandesComponent {
  baseUrl = 'http://localhost:8080/api/orders';
  commandes: Commande[] = [];
  constructor(
    private clientService: ClientService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.clientService.fetchDataCommande().then(() => {
      this.commandes = this.clientService.getCommandes();
      console.log("Liste commandes : ", this.commandes);
    });
  }

  onDeleteCommande(id: number, typePresta: string, designation: string): void {
    const conf = confirm(`Etes-vous sûr de vouloir supprimer la commande ${typePresta} - ${designation} ?`);

    if (conf) {
      axios.delete(`${this.baseUrl}/${id}`)
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
