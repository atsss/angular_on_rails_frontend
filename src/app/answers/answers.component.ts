import { Component, OnChanges, Input } from '@angular/core';
import { AnswerService } from 'app/answer.service';
import { Answer } from 'app/answer';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css'],
  providers: [AnswerService]
})
export class AnswersComponent implements OnChanges {
  @Input() id: number;

  answers: Answer[] = [];

  constructor(private answerService: AnswerService) { }

  ngOnChanges(): void {
    this.answerService.getIdAnswers(this.id)
      .subscribe(answers => this.answers = answers)
  }

}
