import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarteService } from '../carte.service';
import { Pizza } from '../pizza/pizza.component';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent {
    
    constructor(private router: Router, private carteService : CarteService){
      
    }
    pizzas = new Array<Pizza>()
    pizzasFilter = new Array<Pizza>()
    
    public goToCarte(){
      this.router.navigate(['/carte'])
    }

    public test(){     
      let listeIngr
      
      console.log("Avant requête")
      this.carteService.test().subscribe(
        (res) => {
          for(let i = 0; i< res.length; i++){
            console.log(res[i].nom)

            listeIngr= new Array()
            if (res[i].anchois) listeIngr.push("Anchois")
            if (res[i].jambon) listeIngr.push("Jambon")
            if (res[i].magret) listeIngr.push("Magret")
            if (res[i].miel) listeIngr.push("Miel")
            
            let pizza = new Pizza(res[i].base,listeIngr, res[i].prix, res[i].nom, res[i].image)

            this.pizzas.push(pizza)
            //console.log(`Pizza : ${nom} \n Base : ${base} \n Pate : ${pate} \n Prix : ${prix}`)
            
          }
          console.log(this.pizzas)
        },
        (err) => console.log(err)
      )
      console.log("Après requête")
    }

    public valueChanged(event : any){
      
      console.log(event.target.value)
      this.pizzasFilter = new Array<Pizza>()
      for(let i = 0; i< this.pizzas.length; i++){
        if (this.pizzas[i].prix <= event.target.value){
          this.pizzasFilter.push(this.pizzas[i])
        }
      }
      console.log(this.pizzasFilter)
    }

    
}
