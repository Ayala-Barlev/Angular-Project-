import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsDetailsComponent } from './components/comments-details/comments-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NewCommentComponent } from './components/new-comment/new-comment.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CardsServicesComponent } from './components/cards-services/cards-services.component';
import { DetailsServicesComponent } from './components/details-services/details-services.component';
import { ListServicesComponent } from './components/list-services/list-services.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"comments",component:CommentsComponent},
  {path:"comment-details",component:CommentsDetailsComponent},
  {path:"list-services",component:ListServicesComponent},
  {path:"card-services",component:CardsServicesComponent},
  {path:"details-services",component:DetailsServicesComponent},
  {path:"contact-form",component:ContactFormComponent},
  {path:"new-comment",component:NewCommentComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
