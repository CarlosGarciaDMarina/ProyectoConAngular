import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  persona ={
    nombre:'',
    email: '',
    asunto: '',
    mensaje: ''
  };

  //Variables
  public title: string;
  name = new FormControl('', Validators.required);
  

  constructor(){
    this.title = "Contacta conmigo";
  }

  ngOnInit(): void {
      
  }

}
