import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isCondition:boolean=false;

  isCondition2:boolean=false;

  car:string[]=["tata","toyota","nano","jaguar"];

  
  bikes:string[]=["bajaj","tvs","hero","honda"];
  bike:string="bajaj";


  constructor() { }

  ngOnInit(): void {
  }

}
