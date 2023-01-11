import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interfaces/service';
import { HttpService } from 'src/app/services/http.service';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.scss']
})
export class ListServicesComponent implements OnInit {
  services: Array<Service> = [];
  s:Service | undefined;
  constructor(public http: HttpService,public web:WebService) { 
   
  }
  ngOnInit(): void {
    console.log('before data');
    this.http.getServices().subscribe((data)=>{
      this.web.setServices(data);
      console.log(data);
      this.services=this.web.getServices();
    },(error)=>{console.log("error:"+ error)});
    console.log('after data');
    
  }
}