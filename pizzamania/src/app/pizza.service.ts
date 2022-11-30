import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";


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
  public getPizzas(){

  }
}
