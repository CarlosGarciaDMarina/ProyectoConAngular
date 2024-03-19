import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  //Variables
  public title: string;

  constructor(){
    this.title = "Contacta conmigo";
  }

  ngOnInit(): void {
      
  }
}
