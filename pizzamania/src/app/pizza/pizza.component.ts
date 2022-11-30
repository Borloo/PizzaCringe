import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzasComponent  {

  pizzas = [
    new Pizza ("Chevre-Miel",8),
    new Pizza ("Bolognaise",12)
  ]

  jedi = "";
  taille= 5;
  username=""
  constructor () {}
}

class Pizza {

  constructor(public nom: string, public prix :number = 10) {

  }
  public incrementerPrix () {
    this.prix++;
  }
}
