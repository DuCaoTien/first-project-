import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './component/posts/posts.component';
import { AppRoutingModule } from './/app-routing.module';
import { AlbumComponent } from './component/album/album.component';
import { PostService } from './service/post.service';
import { AlbumService } from './service/album.service';
import { HomeComponent } from './component/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostDetailComponent } from './component/post-detail/post-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AlbumComponent,
    HomeComponent,
    PostDetailComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostService,AlbumService],
  bootstrap: [AppComponent],
})
export class AppModule { }