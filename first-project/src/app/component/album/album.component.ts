import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import { AlbumService } from '../../service/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums ;

  selectedAlbum: Album;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.getAlbums()
  }
  getAlbums():void{
    this.albumService.getAlbums()
    .subscribe(albums => 
      this.albums = albums
    );
  }

  onSelect(album: Album): void{
    this.selectedAlbum = album;
  }

}
