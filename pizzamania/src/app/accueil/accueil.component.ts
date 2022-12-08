import { Component } from '@angular/core';
import { Router} from "@angular/router";
import { cfg } from "src/config";
import {Pizza} from "../pizza/pizza.component";
import {PizzaService} from "../pizza/pizza.service";
import {CommandeComponent} from "../commande/commande.component";
import {ListPizzaService} from "../list-pizza/list-pizza.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  constructor(private router:Router, public pizzaService: PizzaService, public listPizzaService: ListPizzaService){}

  isAlreadyCommand = cfg.isAlreadyCommand;

  pizzaString = window.localStorage.getItem('pizza');
  // @ts-ignore
  pizza:Pizza = JSON.parse( this.pizzaString)
  commande:CommandeComponent = new CommandeComponent(this.router, this.pizzaService);

  base = this.pizza.base;
  ingredients = this.pizza.ingredient
  isLoading = false;

  public goToCommande(){
    this.router.navigate(['/commande']);
  }

  public commanderPizzaEnregistrer() {
    this.isLoading = true
    this.commande.commander();
  }

  public listePizza(){
    this.listPizzaService.getListPizza();
  }
}
