import { Component, OnInit } from '@angular/core';


export interface Client{
  firstname:string;
  lastname:string;
  age?:number,
  birth?:Date;
  gender?:string;
  email?:string;
  street:string;
  city:string;
  state:string;
  phone1:number;
  phone2:number;
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  client:Client = { 
    firstname:'',lastname:'',birth:new Date,gender:'',

    street:'',city:'',state:'',phone1:0,  phone2:0,
  }


  states:string[]= ['SP','RJ','MG','BA','AM']

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.client) 
  }

}
