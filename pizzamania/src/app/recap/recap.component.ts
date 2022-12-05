import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cfg } from 'src/config';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent {
  prix = cfg.prix;
  base = cfg.base;
  ingredients = cfg.ingredients;
  id = cfg.id
  constructor(private router:Router){ }

  public goToRecap(){
    this.router.navigate(['/recap'])
  }

  public getPrix(){
    console.log(cfg.prix)
  }

  public setId(pId: number){
    this.id = pId
  }
}
