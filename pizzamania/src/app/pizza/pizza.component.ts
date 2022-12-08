import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzasComponent  {

  constructor () {}
}

export class Pizza {

  constructor(public base: string, public ingredient: Array<any>, public prix: number, public nom ="", public img="") {

  }
  public incrementerPrix () {
    this.prix++;
  }
}
