import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  url = "https://pizzamania-quarkus.ew.r.appspot.com";

  constructor(private http: HttpClient) { 
    this.http.get(this.url)
  }

  public test(): Observable<any> {
    return this.http.get(this.url+"/boutique/pizzas")
  }
}
