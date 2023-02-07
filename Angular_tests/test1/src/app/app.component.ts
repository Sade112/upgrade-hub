import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test1';

  constructor(){
    let a, b, c: number;
    let nombre, apellido: string;
    nombre = "Alberto"
    apellido = "Gauchía"
    const resultadoOperacion:number = this.matematicas(20,6,2);
    console.log(`Me llamo ${nombre} ${apellido} y tengo ${resultadoOperacion} años`);

  }
  matematicas(a:number, b:number, c:number){
    return a + b + c;
  }
  media(a:number, b:number, c:number){
    let claculo1: number = a+b+c;
    return claculo1/3;
  }
}
