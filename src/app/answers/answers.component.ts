import { Component, OnInit, Input } from '@angular/core';
import { AnswerService } from 'app/answer.service';
import { Answer } from 'app/answer';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css'],
  providers: [AnswerService]
})
export class AnswersComponent implements OnInit {
  @Input() id: number;

  answers: Answer[] = [];

  constructor(private answerService: AnswerService) { }

  ngOnInit(): void {
    this.answerService.getIdAnswers(this.id)
  }

}
