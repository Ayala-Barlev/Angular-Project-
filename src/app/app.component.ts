import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { WebService } from './services/web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basicProject';
  src="gift1";
  date: Date = new Date();
  constructor(public web:WebService){
    
  }
  ngOnInit(): void {
    this.web.srcSubject$.subscribe((h: string)=>{
        this.src=h
    });  
  }
}
