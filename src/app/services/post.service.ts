import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = 'https://localhost:7077/api/posts/';

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<ListResponseModel<Post>> {
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Post>>(newPath);
  }

  getPostById(postId: number): Observable<SingleResponseModel<Post>> {
    let newPath = this.apiUrl + "get/"+postId;
    return this.httpClient.get<SingleResponseModel<Post>>(newPath);
  }
  
}
