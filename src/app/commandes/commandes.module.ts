import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommandesComponent } from './commandes.component';
import { UpdateCommandeComponent } from '../update-commande/update-commande.component';
import { AddCommandeComponent } from '../add-commande/add-commande.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommandesComponent,
    AddCommandeComponent,
    UpdateCommandeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule

  ],
  exports: [CommandesComponent]
})
export class CommandesModule { }
