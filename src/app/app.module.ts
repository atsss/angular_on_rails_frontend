import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { QuestionIndexComponent } from './question-index/question-index.component';
import { QuestionService } from './question.service';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { AnswersComponent } from './answers/answers.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionIndexComponent,
    QuestionDetailComponent,
    AnswersComponent,
    NewQuestionComponent,
    NewAnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
