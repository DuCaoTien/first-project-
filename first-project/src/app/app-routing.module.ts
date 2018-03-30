import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './component/posts/posts.component';
import { AlbumComponent } from './component/album/album.component';
import { HomeComponent } from './component/home/home.component';
import { PostDetailComponent } from './component/post-detail/post-detail.component';


const routes: Routes = [
  {path: 'posts' , component: PostsComponent },
  {path: 'home' , component: HomeComponent },
  {path: 'album', component: AlbumComponent},
  {path: 'post-detail/:id', component: PostDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
