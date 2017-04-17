import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import './rxjs-extensions';

// primeng
import {TabMenuModule,MenuItem} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { QuestionIndexComponent } from './question-index/question-index.component';
import { QuestionService } from './question.service';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { AnswersComponent } from './answers/answers.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionIndexComponent,
    QuestionDetailComponent,
    AnswersComponent,
    NewQuestionComponent,
    NewAnswerComponent,
    TabMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TabMenuModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
