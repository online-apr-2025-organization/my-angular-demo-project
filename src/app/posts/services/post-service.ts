import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../model/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

  getAllPosts(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(this.baseUrl);
  }
}
