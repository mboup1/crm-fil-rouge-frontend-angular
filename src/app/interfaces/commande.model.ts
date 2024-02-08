export interface Commande {
  id: number;
  typePresta: string;
  designation: string;
  nbDays: number;
  unitPrice: number;
  totalExcludeTaxe?: number;
  totalWithTaxe?: number;
  state: string; // "CANCELED" or "OPTION" or "CONFIRMED"
}

// state: OrderState;
// }

// export enum OrderState {
//   CANCELED = 'CANCELED',
//   OPTION = 'OPTION',
//   CONFIRMED = 'CONFIRMED'
// }