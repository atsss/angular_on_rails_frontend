import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Index', icon: 'fa-list-ul', routerLink: ['/questions']},
      {label: 'Create', icon: 'fa-plus-square', routerLink: ['/questions/new']},
    ];
  }
}

