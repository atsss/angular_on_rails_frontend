import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Question } from 'app/question';

@Injectable()
export class QuestionService {
  private questionsUrl = 'http://127.0.0.1:3000/questions.json';  // URL to web api
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposees only
    return Promise.reject(error.message || error);
  }
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getQuestions(): Promise<Question[]> {
    return this.http.get(this.questionsUrl)
               .toPromise()
               .then(response => response.json().question as Question[])
               .catch(this.handleError);
  }

  getQuestion(id: number): Promise<Question> {
    return this.getQuestions().then(questions => questions.find(question => question.id === id));
  }

  create(title: string, content: string): Promise<Question> {
    return this.http
      .post(this.questionsUrl, JSON.stringify({title: title, content: content}), {headers: this.headers})
      .toPromise()
      .then(response => response.json().question)
  }
}
