import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { UppercaseInputDirective } from './directives/uppercase-input.directive';
import { CoreModule } from './core/core.module';
import { ClientsModule } from './clients/clients.module';
import { CommandesModule } from './commandes/commandes.module';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    UppercasePipe,
    UppercaseInputDirective,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClientsModule,
    CommandesModule,
    HeaderModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
