import { Component, OnInit } from '@angular/core';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  posts: any;

  constructor(private postService: PostService){

  }
  title = 'post-app';

  ngOnInit() {
    this.postService.getPosts().subscribe(v=> {
      this.posts = v;
      console.log(this.posts);
    });

  }

}
