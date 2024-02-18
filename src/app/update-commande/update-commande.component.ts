import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { API_BASE_URL } from '../config/config';

@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
})
export class UpdateCommandeComponent implements OnInit {
  commandeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initCommandeForm();
    this.route.queryParams.subscribe((params) => {
      this.commandeForm.patchValue({
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

  initCommandeForm(): void {
    this.commandeForm = this.formBuilder.group({
      index: [0],
      id: 1,
      typePresta: ['', Validators.required],
      designation: ['', Validators.required],
      nbDays: [0, Validators.required],
      unitPrice: [0, Validators.required],
      state: ['ACTIVE'], // ou 'INACTIVE' selon le cas
    });
  }

  updateCommande(id: number, commande: any) {
    axios
      .put(`${API_BASE_URL}/orders/${id}`, commande)
      .then((response) => {
        console.log('Update successful:', response);
        this.router.navigate(['/commandes']);
      })
      .catch((error) => {
        console.error('Update failed:', error);
      });
  }
}
