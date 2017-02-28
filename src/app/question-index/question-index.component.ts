import { Component, OnInit } from '@angular/core';

import { Question } from 'app/question';
import { QuestionService } from 'app/question.service';

@Component({
  selector: 'app-question-index',
  templateUrl: './question-index.component.html',
  styleUrls: ['./question-index.component.css']
})
export class QuestionIndexComponent implements OnInit {

  questions: Question[] = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestions()
      .then(questions => this.questions = questions)
  }

}
