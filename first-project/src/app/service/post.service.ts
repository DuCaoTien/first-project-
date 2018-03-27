import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import {Post} from '../models/post';


@Injectable()
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient,
  ) { }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPost(id:number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url)
  }

}
