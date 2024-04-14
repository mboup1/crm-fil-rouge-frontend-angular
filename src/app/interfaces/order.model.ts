export interface Order {
  id: number;
  clientId: number; 
  typePresta: string;
  designation: string;
  nbDays: number;
  unitPrice: number;
  totalExcludeTaxe?: number;
  totalWithTaxe?: number;
  state: string; // "CANCELED" or "OPTION" or "CONFIRMED"
}
