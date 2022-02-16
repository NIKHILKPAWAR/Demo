import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  myName:string="Nikhil";
  
  imgName:string="bappa";

  myitem:string="";
  
  constructor() { }

  ngOnInit(): void {
  }
    get()
    {
      window.alert("Event Binding Call");
    }
  }


