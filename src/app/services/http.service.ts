import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/comment';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Srevices } from '../enums/srevices';
import { Service } from '../interfaces/service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  env=environment;
  constructor(public serHttp:HttpClient) { }

  getComments():Observable<Comment[]>{
    return this.serHttp.get<Comment[]>(`${this.env.URL}/Main/GetComments`);
  }
  getServices():Observable<Service[]>{
    return this.serHttp.get<Service[]>(`${this.env.URL}/Main/GetServices`);
  }
  putLike(id:number):Observable<Comment[]>{
    return this.serHttp.put<Comment[]>(`${this.env.URL}/Main/PutLike`,id);
  }
  // getById(id:number):Observable<Comment>{
  //   return this.serHttp.get<Comment>(this.env.URL +"/job/"+id);
  // }

  postComment(comment:Comment):Observable<Comment[]>{
    return this.serHttp.post<Comment[]>(this.env.URL+ "/Main/PostComment",comment);
  }
}
