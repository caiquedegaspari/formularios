import { Component, OnInit } from '@angular/core';
import { Client } from '../template-driven/template-driven.component';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  client:Client = {
    firstname:'',lastname:'',birth:new Date,gender:'',

    street:'',city:'',state:'',phone1:0,  phone2:0,email:'',age:0
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
