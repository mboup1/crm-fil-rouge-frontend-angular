import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { LoginComponent } from './login/login.component';
import { CommandesComponent } from './commande/commandes.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';

const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'commandes', component: CommandesComponent },
  { path: 'addcommande', component: AddCommandeComponent },
  { path: 'addclient', component: AddClientComponent },
  { path: 'updateClient', component: UpdateClientComponent },
  { path: 'updatecommande', component: UpdateCommandeComponent },
  // { path: 'login', component: LoginComponent },

  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'clients' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
