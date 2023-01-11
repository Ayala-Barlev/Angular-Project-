import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Srevices } from 'src/app/enums/srevices';
import { Service } from 'src/app/interfaces/service';
import { HttpService } from 'src/app/services/http.service';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-cards-services',
  templateUrl: './cards-services.component.html',
  styleUrls: ['./cards-services.component.scss']
})
export class CardsServicesComponent implements OnInit {
  @Input()
  service: Service = {Id:0,ServiceType: Srevices.CARDS, Description: "string", Details: "string", ExperienceYears: 1,PlaceOfStudy:"n" };
  flag: boolean = false;
  constructor(public web: WebService) {
  }
  ngOnInit(): void {
  }
  moreDetails(){
    this.flag=true;
  }
  lessDetails(){
    this.flag=false;
  }
}
