import { Injectable } from '@angular/core';
import { Client } from '../../interfaces/client.model';
import axios from 'axios';
import { Order } from '../../interfaces/order.model';
import { API_BASE_URL } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: Client[] = [];
  orders: Order[] = [];

  constructor() { }

  async fetchDataClients(): Promise<void> {


    try {
      const response = await axios.get(`${API_BASE_URL}/clients`);
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

  async fetchDataOrders(): Promise<void> {


    try {
      const response = await axios.get(`${API_BASE_URL}/orders`);
      this.orders = response.data.map((order: any) => ({
        id: order.id,
        typePresta: order.typePresta,
        designation: order.designation,
        nbDays: order.nbDays,
        unitPrice: order.unitPrice,
        totalExcludeTaxe: order.totalExcludeTaxe,
        totalWithTaxe: order.totalWithTaxe,
        state: order.state,
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

  getOrders(): Order[] {
    return this.orders;
  }
}
