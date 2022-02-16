import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  tech:string[]=["HTML","CSS","JAVASCRIPT","TYPESCRIPT","NODE","ANGULAR"];

  constructor() { }

  ngOnInit(): void {
  }

}
