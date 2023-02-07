import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  constructor() {
    this.top5 = [];
  }



  @Input() top5 : { title: string, image: string }[];
}
