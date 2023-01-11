import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Comment } from 'src/app/interfaces/comment';
import { Service } from 'src/app/interfaces/service';
import { Srevices } from '../enums/srevices';


@Injectable({
  providedIn: 'root'
})
export class WebService {
  private comments: Array<Comment> = [];
  private services: Array<Service> = [];
  josObservable: any;

  constructor() { }
  public srcSubject$:Subject<any>=new Subject();
  public getComments() {
    return this.comments;
  }
  public setComments(list: Array<Comment>) {
    this.comments=list;
  }
  public getServices() {
    return this.services;
  }
  public setServices(list: Array<Service>) {
    this.services=list;
  }
  get getSrevicesEnum(){
    return Srevices;
  }
}
