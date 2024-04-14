import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './pages/list-clients/clients.component';
import { RouterLink, RouterModule } from '@angular/router';
import { UpdateClientComponent } from './pages/edit-client/update-client.component';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientsRoutingModule } from './clients-routing.module';



@NgModule({
  declarations: [
    ClientsComponent,
    AddClientComponent,
    UpdateClientComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ClientsRoutingModule,

  ],
  exports: [
    ClientsComponent,
    AddClientComponent,
    UpdateClientComponent,
  ]

})
export class ClientsModule { }
