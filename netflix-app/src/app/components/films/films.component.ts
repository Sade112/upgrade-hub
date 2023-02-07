// app-films.component.ts
import { Component, Input } from '@angular/core';
import './films.component.scss';


@Component({
  selector: 'app-films',
  templateUrl: "./films.component.html",
  styleUrls: ['./films.component.scss']
})
export class AppFilmsComponent {

  constructor() {
    this.section = '';
    this.films = [];
  }


  @Input() section: string;
  @Input() films: { title: string, image: string }[];
}
