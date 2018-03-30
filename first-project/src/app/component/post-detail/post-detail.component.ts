import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../../models/post';
import{PostService} from '../../service/post.service'
import { ActivatedRoute } from '@angular/router';
import { post } from 'selenium-webdriver/http';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts(): void{
   const id = +this.route.snapshot.paramMap.get('id');
   this.postService.getPost(id)
   .subscribe(post => this.post = post);
  }
}
