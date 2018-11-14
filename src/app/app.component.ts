import { Component } from '@angular/core';
import { Cervejas } from './models/cervejas';
import { Containers } from './models/containers';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  qtdContainers: number;

  arrayOne(n: number): any[] {
    return Array(n);
  };

  cervejas = [
    new Cervejas("",-1,11),
    new Cervejas("Pilsner", 4, 6),
    new Cervejas("IPA", 5, 6),
    new Cervejas("Lager", 4, 7),
    new Cervejas("Stout", 6, 8),
    new Cervejas("Wheat beer", 3, 5),
    new Cervejas("Pale ale", 4, 6)
  ];

  containers = [];

  gravar(id: number, cerveja: string){
    let aux: Cervejas;
    this.cervejas.map(function(i){
        if(i.nome  == cerveja)
        {
          aux = i;
        }
    });

    if(!this.containers.some(function(i) {
      if (i.id == id) {
        i.cerveja = aux;
        return true;
      }
    }))
    
    this.containers.push(new Containers(id, aux,0,"normal"));

    //console.log(this.containers);
  };

  temperaturaStatus: boolean = false;

  verificaTemperatura(id: number, temperatura: number){
    if(temperatura != this.containers[id].tempAtual){
        this.containers[id].tempAtual = temperatura;

        if(this.containers[id].tempAtual > this.containers[id].cerveja.max){
          this.containers[id].tempStatus = "acima";
          //console.log(this.containers);
        }
        else if(this.containers[id].tempAtual < this.containers[id].cerveja.min){
          this.containers[id].tempStatus = "abaixo";
          //console.log(this.containers);
        }
        else{
          this.containers[id].tempStatus = "normal";
          //console.log(this.containers);
        }
    }      
  };

  sub: any;

  

  teste() {
    

    this.sub = Observable.interval(10000)
    .subscribe((val) => { 
      console.log('called'); 

      this.containers.forEach(function (i){
        let tempAtualGerada: number;
        i.tempAtual = (Math.floor(Math.random() * 9) + 1);
        tempAtualGerada = i.tempAtual;
        //console.log(i);
  
        if(i.tempAtual > i.cerveja.max){
          i.tempStatus = "acima";
          //console.log(i);
        }
        else if(i.tempAtual < i.cerveja.min){
          i.tempStatus = "abaixo";
          //console.log(i);
        }
        else{
          i.tempStatus = "normal";
          //console.log(i);
        }  
         
      });
    });
  }

  stopGenerate(){
    this.sub.unsubscribe()
  }

  verificaContainer(){
    if(this.containers.length == 0){
      return true;
    }
    return false;
  }
}