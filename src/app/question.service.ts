import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Question } from 'app/question';

@Injectable()
export class QuestionService {
  private questionsUrl = 'questions';  // URL to web api
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposees only
    return Promise.reject(error.message || error);
  }
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getQuestiones(): Promise<Question[]> {
    return this.http.get(this.questionsUrl)
               .toPromise()
               .then(response => response.json().data as Question[])
               .catch(this.handleError);
  }

  getQuestion(id: number): Promise<Question> {
    return this.getQuestiones().then(heroes => heroes.find(hero => hero.id === id));
  }

  create(name: string): Promise<Question> {
    return this.http
      .post(this.questionsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }
}
