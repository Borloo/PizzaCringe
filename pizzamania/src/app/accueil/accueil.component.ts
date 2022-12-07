import { Component } from '@angular/core';
import { Router} from "@angular/router";
import { cfg } from "src/config";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  cfg: any;
  constructor(private router:Router){}
  public goToCommande(){
    this.router.navigate(['/commande']);
  }
}
