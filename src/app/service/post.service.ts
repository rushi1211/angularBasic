import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }

  getAllPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getPostById(id:  number){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }


}
