import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { RouterModule } from '@angular/router';
import { UpdateClientComponent } from '../update-client/update-client.component';
import { AddClientComponent } from '../add-client/add-client.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientsComponent,
    AddClientComponent,
    UpdateClientComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule

  ],
  exports: [ClientsComponent]

})
export class ClientsModule { }
