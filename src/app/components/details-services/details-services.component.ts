import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Srevices } from 'src/app/enums/srevices';
import { Service } from 'src/app/interfaces/service';
import { HttpService } from 'src/app/services/http.service';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-details-services',
  templateUrl: './details-services.component.html',
  styleUrls: ['./details-services.component.scss']
})
export class DetailsServicesComponent implements OnInit {

  @Input()
  service: Service = {Id:0,ServiceType: Srevices.CARDS, Description: "string", Details: "string", ExperienceYears: 1,PlaceOfStudy:"n" };
  constructor() {
   }
  ngOnInit(): void {
  }

}
