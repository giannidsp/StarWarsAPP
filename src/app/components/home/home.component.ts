import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imgPath: string;

  constructor() {
    this.imgPath = "assets/images/logo-starwars.jpg";
   }

  ngOnInit() {
  }

}
