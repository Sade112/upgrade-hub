import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `


  <mat-toolbar color="primary">
  <span>TARKOV BALISTICS by Sade_112</span>
  </mat-toolbar>
  
  
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
      
  }
}
