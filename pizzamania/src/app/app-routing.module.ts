import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {CommandeComponent} from "./commande/commande.component";

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'commande', component: CommandeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
