import { Component } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { cfg } from 'src/config';

export class formModelPizza {
  hasAnchois = false;
  hasJambon = false;
  hasMagret = false;
  hasMiel = false;
  base ="T";
  
  constructor(){}


  prix(): number{
    cfg.prix = 0
    cfg.ingredients = []
    if(this.base == "T") {
      cfg.prix = cfg.prix+3
      cfg.base = "Tomate"
    }
    if(this.base == "C"){
      cfg.prix = cfg.prix+4
      cfg.base = "Creme"
    }
    if(this.hasAnchois){
      cfg.prix = cfg.prix+1
      cfg.ingredients.push('Anchois')
    }
    if(this.hasJambon){
      cfg.prix = cfg.prix+2
      cfg.ingredients.push('Jambon')
    }
    if(this.hasMagret){
      cfg.prix = cfg.prix+4
      cfg.ingredients.push('Magret')
    }

    if(this.hasMiel){
      cfg.prix = cfg.prix+3
      cfg.ingredients.push('Miel')
    }
    
    return cfg.prix
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
