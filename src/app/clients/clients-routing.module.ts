import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpdateClientComponent } from './pages/edit-client/update-client.component';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { ClientsComponent } from './pages/list-clients/clients.component';


const routes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'addclient', component: AddClientComponent },
  { path: 'updateClient', component: UpdateClientComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]

})
export class ClientsRoutingModule { }
