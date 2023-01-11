import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Srevices } from 'src/app/enums/srevices';
import { Comment } from 'src/app/interfaces/comment';



@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {
  src="gift2";
  comment: Comment = { Id: 2, ServiceType: Srevices.CARDS, Text: "string", Name: "string", Likes: 1,Date:new Date() };
  constructor(public web:WebService,public fb:FormBuilder,public http:HttpService) { 
  }
  FormAddComment= this.fb.group({
    fullName: ['',[Validators.required,Validators.pattern("[א-ת -]{2,}")]],
    phone: ['',[Validators.required,Validators.pattern("05?[0-9]-?[0-9]{7}")]],
    email: ['',[Validators.required,Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$")]],
    service:[''],
    text: ['',[Validators.required,Validators.pattern("[א-ת -!?'.,]{10,}")]],
    name: ['',[Validators.required,Validators.pattern("[א-ת -!?'.,]{2,15}")]]
    });
  get fullName(){
    return this.FormAddComment.get('fullName');
  }
  get phone(){
    return this.FormAddComment.get('phone');
  }
  get email() {
    return this.FormAddComment.get('email');
  }
  get text() {
    return this.FormAddComment.get('text');
  }
  get service() {
    return this.FormAddComment.get('service');
  }
  get name() {
    return this.FormAddComment.get('name');
  }
  postComment(){
    this.web.srcSubject$.next(this.src);
    this.comment.Id=this.web.getComments().length+1;
    let data=this.FormAddComment.value;
    if(data.service?.toString()=="0"){
      this.comment.ServiceType=Srevices.GRAPHOLOGY;
    }
    else{
      if(data.service?.toString()=="1"){
        this.comment.ServiceType=Srevices.FLOWERS;
      }
      else{
        this.comment.ServiceType=Srevices.CARDS;
      }
    }
    this.comment.Text=data.text?.toString();
    this.comment.Name=data.name?.toString();
    this.comment.Likes=0;
    this.comment.Date=new Date();
    console.log('before data3');
    this.http.postComment(this.comment).subscribe((data) => {
      console.log('success');
      this.web.getComments().push(data.find(j => j.Id == this.comment.Id)!);
    }, (error) => { console.log("error:" + error) });
    console.log('after data3');
  }
  ngOnInit() {

  }

} 
    
  



