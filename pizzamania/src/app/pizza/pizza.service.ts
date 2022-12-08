import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { CommandeComponent } from '../commande/commande.component';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  url = "https://pizzamania-quarkus.ew.r.appspot.com";
  constructor(private http: HttpClient) {
    this.http.get(this.url)
  }
  public test(): Observable<any> {
    return this.http.get(this.url+"/test")
  }
  public commanderPizza(commande : CommandeComponent): Observable<any> {
    return this.http.get(
      this.url+
      "/boutique/commanderPizza?base="+
      commande.pizza.base +
      "&anchois=" +
      commande.pizza.hasAnchois +
      "&jambon=" +
      commande.pizza.hasJambon +
      "&miel=" +
      commande.pizza.hasMiel +
      "&magret=" +
      commande.pizza.hasMagret
      )
  }
}
