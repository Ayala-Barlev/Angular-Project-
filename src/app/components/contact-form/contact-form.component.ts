import { Component, OnInit } from '@angular/core';
import { Massage } from 'src/app/interfaces/massage';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  massage:Massage={
    name: '',
    phone: '',
    email: ''
  };
  flag:boolean = false;
  constructor() { }
  
  onSubmit(){
    this.flag=true;
  }
  off(){
    this.flag=false;
  }
  ngOnInit(): void {
  }

}
