import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { HeaderComponent } from './header/header.component';
import { AddClientComponent } from './add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { UppercaseInputDirective } from './directives/uppercase-input.directive';
import { LoginComponent } from './login/login.component';
import { CommandesComponent } from './commande/commandes.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    HeaderComponent,
    AddClientComponent,
    UpdateClientComponent,
    UppercasePipe,
    UppercaseInputDirective,
    LoginComponent,
    CommandesComponent,
    AddCommandeComponent,
    UpdateCommandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
