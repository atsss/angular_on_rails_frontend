import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";
import { Answer } from 'app/answer';

@Injectable()
export class AnswerService {
  private answersUrl = 'http://127.0.0.1:3000/answers.json';  // URL to web api
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposees only
    return Promise.reject(error.message || error);
  }
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getAllAnswers(): Observable<Answer[]> {
    return this.http.get(this.answersUrl)
               .map(response => response.json().answer as Answer[])
               .catch(this.handleError);
  }

  getIdAnswers(id: number): Observable<Answer[]> {
    return this.getAllAnswers()
               .map(answer => answer.filter(answer => answer.question_id === id))
  }
}
