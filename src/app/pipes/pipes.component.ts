import { isPlatformWorkerApp } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  greet:string="hi how are you";
  emp={id:101,name:"Nikhil",post:"Full Stack Developer",Contact:9545570765}
  constructor() { }

  ngOnInit(): void {
  }

}
