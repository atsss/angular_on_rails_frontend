import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { Question } from 'app/question';
import { QuestionService } from 'app/question.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.sass']
})
export class NewQuestionComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.questionService.create(f.value.title, f.value.content)
        .then(response => console.log(response.id))
  }
}
