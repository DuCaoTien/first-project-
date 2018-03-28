import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Post } from '../models/post';
import { Observable } from 'rxjs/Observable';
import { Album } from '../models/album';

@Injectable()
export class AlbumService {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  constructor(
    private http : HttpClient,
  ) { }

  getAlbums() : Observable<Album[]>{
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getAlbum(title:string): Observable<Album>{
    const url = `${this.albumsUrl}/${title}`;
    return this.http.get<Album>(url)
  }

}
