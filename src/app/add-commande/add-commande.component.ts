import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Commande } from '../interfaces/commande.model';
import { ClientService as ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
})
export class AddCommandeComponent implements OnInit {
  baseUrl = 'http://localhost:8080/api/orders';
  commandeForm!: FormGroup;
  commandes: Commande[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private commandeService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initCommandeForm();
    this.commandes = this.commandeService.getCommandes();
  }

  initCommandeForm(): void {
    this.commandeForm = this.formBuilder.group({
      id: [0],
      typePresta: ['', Validators.required],
      designation: ['', Validators.required],
      nbDays: [''],
      unitPrice: [0, Validators.required],
      state: ['OPTION', Validators.required],
    });
  }

  createCommande(commande: any) {
    axios.post(this.baseUrl, commande)
      .then(response => {
        console.log("Commande créée avec succès:", response);
        this.router.navigate(['/commandes']);
      })
      .catch(error => {
        console.error("La création a échoué:", error);
      });
  }
}
