import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {


  url = "https://pizzamania-quarkus.ew.r.appspot.com/boutique/pizzas";

  constructor(private http: HttpClient) {
    this.http.get(this.url);
  }
  public setLog(): Observable<any> {
    return this.http.get(this.url = '/logger/info?message=www')
  }
}
