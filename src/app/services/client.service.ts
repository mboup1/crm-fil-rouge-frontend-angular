import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client.model';
import axios from 'axios';
import { Commande } from '../interfaces/commande.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: Client[] = [];
  commandes: Commande[] = [];

  constructor() { }

  async fetchData(): Promise<void> {
    const jsonUrl = 'http://localhost:8080/api/clients';

    try {
      const response = await axios.get(jsonUrl);
      this.clients = response.data.map((client: any) => ({
        id: client.id,
        companyName: client.companyName,
        firstName: client.firstName,
        lastName: client.lastName,
        email: client.email,
        phone: client.phone,
        address: client.address,
        zipCode: client.zipCode,
        city: client.city,
        country: client.country,
        state: client.state,
        orders: client.orders
      }));
    } catch (error) {
      console.error('Erreur lors de la récupération des données JSON :', error);
    }
  }

  async fetchDataCommande(): Promise<void> {
    const jsonUrl = 'http://localhost:8080/api/orders';

    try {
      const response = await axios.get(jsonUrl);
      this.commandes = response.data.map((commande: any) => ({
        id: commande.id,
        typePresta: commande.typePresta,
        designation: commande.designation,
        nbDays: commande.nbDays,
        unitPrice: commande.unitPrice,
        totalExcludeTaxe: commande.totalExcludeTaxe,
        totalWithTaxe: commande.totalWithTaxe,
        state: commande.state,
      }));
    } catch (error) {
      console.error('Erreur lors de la récupération des données JSON :', error);
    }
  }



  getClients(): Client[] {
    return this.clients;
  }

  getClientById(clientId: number): Client | undefined {
    return this.clients.find(client => client.id === clientId);
  }

  getCommandes(): Commande[] {
    return this.commandes;
  }
}
