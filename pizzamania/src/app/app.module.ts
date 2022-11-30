import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { PizzasComponent} from "./pizza/pizza.component";
import { CommandeComponent } from './commande/commande.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RecapComponent } from './recap/recap.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    CommandeComponent,
    AccueilComponent,
    RecapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
