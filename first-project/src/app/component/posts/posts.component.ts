import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { POSTS } from '../../models/mock-post';
import { PostService } from '../../service/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts ;
  
  selectedPost: Post;
  
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts()
  }
  getPosts(): void{
    this.postService.getPosts()
    .subscribe(posts =>
       this.posts = posts
      );
  }
  
  onSelect(post: Post): void {
    this.selectedPost = post;
  }

}