import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Comment } from 'src/app/interfaces/comment';
import { WebService } from 'src/app/services/web.service';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{
  comments: Array<Comment> = [];

  constructor(public http: HttpService,public web:WebService) { //public route:Router) {
   
  }
  ngOnInit(): void {
    console.log('before data');
    this.http.getComments().subscribe((data)=>{
      this.web.setComments(data);console.log(data);
       this.comments=this.web.getComments();
    },(error)=>{console.log("error:"+ error)});
    console.log('after data');
    
  }
  
}
