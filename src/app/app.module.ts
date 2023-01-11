import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsDetailsComponent } from './components/comments-details/comments-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCommentComponent } from './components/new-comment/new-comment.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AddHeartPipe } from './pipes/add-heart.pipe';
import { DetailsServicesComponent } from './components/details-services/details-services.component';
import { CardsServicesComponent } from './components/cards-services/cards-services.component';
import { ListServicesComponent } from './components/list-services/list-services.component';
import { NameValidDirective } from './directives/name-valid.directive';
import { PhoneValidDirective } from './directives/phone-valid.directive';
import { EmailValidDirective } from './directives/email-valid.directive';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        CommentsComponent,
        CommentsDetailsComponent,
        NewCommentComponent,
        ContactFormComponent,
        AddHeartPipe,
        DetailsServicesComponent,
        CardsServicesComponent,
        ListServicesComponent,
        NameValidDirective,
        PhoneValidDirective,
        EmailValidDirective
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
