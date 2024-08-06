import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [


  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.ordersModule) },
  { path: '**', loadChildren: () => import('./errors/errors.module').then(m => m.ErrorsModule) },
  // { path: '**', redirectTo: 'clients', pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
