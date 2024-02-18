import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../interfaces/commande.model';
import { Client } from '../interfaces/client.model';
import { ClientService as ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import axios from 'axios';
import { API_BASE_URL } from '../config/config';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
})
export class AddCommandeComponent implements OnInit {
  commandeForm!: FormGroup;
  commandes: Order[] = [];
  clients: Client[] = []; // Ajoutez cette ligne pour récupérer la liste des clients


  constructor(
    private formBuilder: FormBuilder,
    private commandeService: ClientService,
    private clientService: ClientService, // Utilisez le service ClientService pour récupérer les clients
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initCommandeForm();
    this.commandes = this.commandeService.getCommandes();
    this.clients = this.clientService.getClients();
    // console.log("Liste clients : ", this.clients); // Ajoutez cette ligne pour déboguer

  }

  initCommandeForm(): void {
    this.commandeForm = this.formBuilder.group({
      id: [0],
      idClient: [null, Validators.required],  // Ajoutez le champ client associé
      typePresta: ['', Validators.required],
      designation: ['', Validators.required],
      nbDays: [''],
      unitPrice: [0, Validators.required],
      state: ['OPTION', Validators.required],
    });
  }

  createCommande(commande: any) {
    // console.log("commande : ",commande)
    axios.post(`${API_BASE_URL}/orders`, commande)
      .then(response => {
        console.log("Commande créée avec succès:", response);
        this.router.navigate(['/commandes']);
      })
      .catch(error => {
        console.error("La création a échoué:", error);
      });
  }

}
