import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from 'src/app/services/web.service';
import { Comment } from 'src/app/interfaces/comment';
import { Srevices } from 'src/app/enums/srevices';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.scss']
})
export class CommentsDetailsComponent implements OnInit {
  //get the value from inside
  @Input()
  comment: Comment = { Id: 2, ServiceType: Srevices.CARDS, Text: "string", Name: "string", Likes: 1 ,Date:new Date()};
  // comments: Array<Comment> = [];
  constructor(public web: WebService, public route: ActivatedRoute, public http: HttpService) {

  }
  putLike(c: Comment) {
    console.log('before data2');
    this.http.putLike(c.Id).subscribe((data) => {
      c.Likes = data.find(j => j.Id == c.Id)?.Likes;
    }, (error) => { console.log("error:" + error) });
    console.log('after data2');
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
}
