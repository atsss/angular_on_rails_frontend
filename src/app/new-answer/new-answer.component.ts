import { Component, OnChanges, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AnswerService } from 'app/answer.service';
import { Answer } from 'app/answer';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.sass'],
  providers: [AnswerService]
})
export class NewAnswerComponent implements OnChanges {
  @Input() id: number;

  constructor(private answerService: AnswerService) { }

  ngOnChanges(): void {
  }

  onSubmit(f: NgForm) {
    this.answerService.create(f.value.content, this.id)
        . then(response => console.log(response))
  }
}
