import { Component } from '@angular/core';
import { request, gql } from 'graphql-request'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  contador:number = 0;
  dado1:number = Math.random()*7;
  dado2:number = Math.random()*7;
  dado3:number = Math.random()*7;

  dado1clean:number = Math.trunc(this.dado1);
  dado2clean:number = Math.trunc(this.dado2);
  dado3clean:number = Math.trunc(this.dado3);

  constructor(){
    let a, b, c: number;
    let nombre, apellido: string;
    nombre = "Alberto"
    apellido = "Gauchía"
  }
  matematicas(a:number, b:number, c:number){
    let suma:number = a+b+c;
    return suma;
  }
  media(){
    let mediaNumeros:number = this.matematicas(2,2,40)/3;
    return mediaNumeros;
  }

  sumaUno(){
    this.contador = this.contador + 1;
  }
  restaUno(){
    this.contador = this.contador - 1;  
  }
  


  // tarkov(){
  //   if (this.isFetching) return;
  //   this.isFetching = true;
  //   fetch(`https://pokeapi.co/api/v2/pokemon/ditto`,{ redirect: "manual" })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       this.isFetching = false;
  //     });
  // }

}