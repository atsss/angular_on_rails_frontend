import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionIndexComponent }   from './question-index/question-index.component';
import { QuestionDetailComponent }   from './question-detail/question-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'questions',  component: QuestionIndexComponent },
  { path: 'questions/:id',  component: QuestionDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
