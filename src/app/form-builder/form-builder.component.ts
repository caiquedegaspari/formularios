import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
    //usando formGroup
  /* formGroup1 = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormControl({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl('')
    })
  }) */

  //usando Form Builder
  clientForm = this.fb.group({
    firstname:[],
    lastname:[],
    address:this.fb.group({
      street:[''],
      city:[''],
      state:['']
    })
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(
      this.clientForm.value
    )
  }

}
