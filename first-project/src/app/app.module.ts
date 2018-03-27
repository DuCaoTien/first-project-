import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './component/posts/posts.component';
import { AppRoutingModule } from './/app-routing.module';
import { AlbumComponent } from './component/album/album.component';
import { PostService } from './service/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AlbumComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }