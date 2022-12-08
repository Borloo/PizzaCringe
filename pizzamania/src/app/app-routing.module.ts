import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {CommandeComponent} from "./commande/commande.component";
import { RecapComponent } from './recap/recap.component';
import {ListPizzaComponent} from "./list-pizza/list-pizza.component";

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'commande', component: CommandeComponent},
  {path: 'recap', component: RecapComponent},
  {path: 'liste-pizza', component: ListPizzaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
