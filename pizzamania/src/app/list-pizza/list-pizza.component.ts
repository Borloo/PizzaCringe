import {Component, OnInit} from '@angular/core';
import {ListPizzaService} from "./list-pizza.service";
import {Pizza} from "../pizza/pizza.component";
import {CommandeComponent} from "../commande/commande.component";
import {Router} from "@angular/router";
import {PizzaService} from "../pizza/pizza.service";

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.css']
})
export class ListPizzaComponent implements OnInit{

  isLoading = false;
  pizzas = new Array<Pizza>();
  maxValue = 12;

  constructor(private listPizzaService: ListPizzaService, private router: Router, public pizzaService: PizzaService) {}

  commande:CommandeComponent = new CommandeComponent(this.router, this.pizzaService);

  ngOnInit(): void {
    this.listPizza();
  }


  public listPizza(): any{

    this.isLoading = true;
    this.listPizzaService.getListPizza().subscribe(
      (next) => {
        this.onCallSucess(next);
      },
      (err) => {
        this.onCallError(err);
      }
    );

  }

  private onCallSucess(next: any) {

    this.isLoading = false;
    let listeIngr;
    let tabPizzas = new Array<Pizza>();


    for(let i = 0; i< next.length; i++) {
      listeIngr = new Array()
      if (next[i].anchois) listeIngr.push("Anchois")
      if (next[i].jambon) listeIngr.push("Jambon")
      if (next[i].magret) listeIngr.push("Magret")
      if (next[i].miel) listeIngr.push("Miel")

      let pizza = new Pizza(next[i].base, listeIngr, next[i].prix, next[i].nom, next[i].image);

      this.pizzas.push(pizza);
    }

  }

  private onCallError(err: any) {

    this.isLoading = false;

  }

  public commanderPizza(){

    this.isLoading = true;
    this.commande.commander(this.commande);

  }

  public getListePizzaFiltre(){
    let pizzasFilter = new Array<Pizza>()

    for(let i = 0; i< this.pizzas.length; i++){
      if (this.pizzas[i].prix <= this.maxValue){
        pizzasFilter.push(this.pizzas[i])
      }
    }

    return this.pizzas = pizzasFilter;

  }
}
