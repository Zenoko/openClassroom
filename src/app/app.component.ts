import { Component, Input, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;

  @Input() nbLove : number;

  lastUpdate = new Date();
  loveIts = this.nbLove;

  posts = [
    {
      title: "Premier post",
      content: "Lorem Ipsum Dolor Sit Amet",
      loveIts: 10,
      created_at: this.lastUpdate
    },
    {
      title: "Deuxième post",
      content: "Lorem Ipsum Dolor Sit Amet",
      loveIts: -10,
      created_at: this.lastUpdate
    },
    {
      title: "Troisième post",
      content: "Lorem Ipsum Dolor Sit Amet",
      loveIts: 5,
      created_at: this.lastUpdate
    }
  ]
  constructor(){}
}
