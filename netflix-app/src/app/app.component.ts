// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  public comedyFilms = {
    section: "Comedia",
    films: [
      {
      title: "Titulo",
      image: "./assets/images/Comedia/casi300.webp"
      },
      {
        title: "Titulo",
        image: "./assets/images/Comedia/cazafantasmas.webp"
      },
      {
        title: "Titulo",
        image: "./assets/images/Comedia/dictador.webp"
      }
  ]
  };

  public dramaFilms = {
    section: "Drama",
    films: [
    {
      title: "Titulo",
      image: "./assets/images/Drama/1917.webp"
    },
    {
      title: "Titulo",
      image: "./assets/images/Drama/arrival.webp"
    },
    {
      title: "Titulo",
      image: "./assets/images/Drama/clublucha.webp"
    },
  ]
  };

  public top5Spain = {
    top5: [
      {
        title: " ",
        image: "./assets/images/Top10/1-papel.webp"
      },
      {
        title: " ",
        image: "./assets/images/Top10/2-reina.webp"
      },
      {
        title: " ",
        image: "./assets/images/Top10/3-titanes.webp"
      },
      {
        title: " ",
        image: "./assets/images/Top10/4-lostinsapace.webp"
      },
      {
        title: " ",
        image: "./assets/images/Top10/5-dondecaben.webp"
      }
    ]
  }
}
