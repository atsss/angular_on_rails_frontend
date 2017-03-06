import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionIndexComponent }   from './question-index/question-index.component';
import { QuestionDetailComponent }   from './question-detail/question-detail.component';
import { NewQuestionComponent }   from './new-question/new-question.component';

const routes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'questions',  component: QuestionIndexComponent },
  { path: 'questions/:id',  component: QuestionDetailComponent },
  { path: 'new',  component: NewQuestionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
