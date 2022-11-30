import { Component } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

export class formModelPizza {
  hasAnchois = false;
  hasJambon = false;
  hasMagret = false;
  hasMiel = false;
  base ="T";
  constructor(){}


  prix(): number{
    let prix = 0;
    if(this.base == "T") {prix = prix+3}
    if(this.base == "C")prix = prix+4
    if(this.hasAnchois)prix = prix+1
    if(this.hasJambon)prix = prix+2
    if(this.hasMagret)prix = prix+4
    if(this.hasMiel)prix = prix+3
    return prix
  }
  isFormulaireValid():boolean{
    return this.hasMiel || this.hasAnchois || this.hasJambon || this.hasMagret;
  }
}

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit{
  pizza: formModelPizza = new formModelPizza();
  isLoading = false;
  constructor(private PizzaService: PizzaService){}
  ngOnInit(): void {}
  public commander(){
    this.PizzaService.test().subscribe(
      (next) => this.onCallSuccess(next),
      (err) => this.onCallError(err)
    )
    this.isLoading = true;
  }
  public onCallSuccess(data: any){
    this.isLoading = false;
  }
  public onCallError(err: HttpErrorResponse){
    this.isLoading = false;
  }

}
