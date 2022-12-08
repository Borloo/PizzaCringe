import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListPizzaService {

  url = "https://pizzamania-quarkus.ew.r.appspot.com/boutique/pizzas";

  constructor(private http: HttpClient) {
    this.http.get(this.url);
  }
  public getListPizza(): Observable<any> {
    return this.http.get(this.url)
  }
}
