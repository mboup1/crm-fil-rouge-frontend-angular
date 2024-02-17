export interface Order {
  id: number;
  clientId: number;  // Ajoutez cette propriété pour stocker l'ID du client associé
  typePresta: string;
  designation: string;
  nbDays: number;
  unitPrice: number;
  totalExcludeTaxe?: number;
  totalWithTaxe?: number;
  state: string; // "CANCELED" or "OPTION" or "CONFIRMED"
}