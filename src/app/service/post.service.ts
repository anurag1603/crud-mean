import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  getPosts() {
    return this.http.get('/posts');
  }

  postPost(title, description) {
    return this.http.post('/posts',{
      title: title,
      description: description
  })
  }

}
