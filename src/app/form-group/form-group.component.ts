import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  clientForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    name: new FormGroup({
      firstname2: new FormControl(''),
      lastname2: new FormControl('')
    })
  })

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
  console.log(this.clientForm.value)
  console.log(`
  firstname1: ${this.clientForm.value.firstname},
  firstname1: ${this.clientForm.value.lastname},
  firstname2: ${this.clientForm.value.name.firstname2},
  firstname2: ${this.clientForm.value.name.lastname2}
  `)
  }

}
