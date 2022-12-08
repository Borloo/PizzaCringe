import {Component, OnInit} from '@angular/core';
import {ListPizzaService} from "./list-pizza.service";
import {Pizza} from "../pizza/pizza.component";

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.css']
})
export class ListPizzaComponent implements OnInit{

  isLoading = false;
  pizzas = new Array<Pizza>()

  constructor(private listPizzaService: ListPizzaService) {
    this.pizzas = this.listPizza();
  }

  ngOnInit(): void {}

  public listPizza(): any{

    this.listPizzaService.getListPizza().subscribe(
      (next) => {
        this.onCallSucess(next);
        this.isLoading = true;
      },
      (err) => {
        this.onCallError(err);
        this.isLoading = true;
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

      let pizza = new Pizza(next[i].base, listeIngr, next[i].prix, next[i].nom, next[i].image)

      tabPizzas.push(pizza)
    }

    console.log(tabPizzas);
    return tabPizzas;

  }

  private onCallError(err: any) {

    this.isLoading = false;

  }
}
