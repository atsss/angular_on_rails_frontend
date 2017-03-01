import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Question } from 'app/question';
import { QuestionService } from 'app/question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  question: Question;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.questionService.getQuestion(+params['id']))
      .subscribe(question => this.question = question);
  }

  goBack(): void {
    this.location.back();
  }

}
