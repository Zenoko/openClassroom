import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postTitle : String;
  @Input() postContent : String;
  @Input() postLoveIts : number;
  @Input() postCreated : Date;

  lastUpdate = new Date();

  constructor() { }

  ngOnInit() {
  }

  getColor(){
    if(this.postLoveIts > 0){
      return 'green';
    }else if(this.postLoveIts < 0){
      return 'red';
    }
  }

  onLove(){
    this.postLoveIts++;
    return this.postLoveIts;
  }

  onDontLove(){
    this.postLoveIts--;
    return this.postLoveIts;
  }
}
