import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Post} from '../models/post';
import {NgbdModalBasic} from '../modals/modal-basic'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostService {
  [x: string]: any;
  handleError<T>(arg0: any): any {
    throw new Error("Method not implemented.");
  }
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

  deletePost (post : Post | number):Observable<Post>{
    const id = typeof post === 'number' ? post : post.id;
    const url = `{$this.postsUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions);
  }
  
}
