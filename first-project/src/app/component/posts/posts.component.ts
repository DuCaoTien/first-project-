import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { Location } from '@angular/common';

import { PostService } from '../../service/post.service'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

})
export class PostsComponent implements OnInit {
  @Input() post: Post;
  posts; title; body;
  closeResult: string;
  selectedPost: Post;

  constructor(
  
    private postService: PostService,
    private modalService: NgbModal,
    private location: Location
    ) { }

  ngOnInit() {
    this.getPosts()
  }
  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts =>
        this.posts = posts
      );
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `width: ${reason}`;
    }
  }

  public postNeedToDelete : Post = null;
  openDeleteConfirm(post: Post, confirmModal): void {
    this.postNeedToDelete = post;
    console.log('open modal', post, confirmModal, this.modalService)
    this.modalService.open(confirmModal).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  public postNeedToEdit : Post = null;
  openEditConfirm(post: Post, confirmModal): void {
    this.postNeedToEdit = post;
    console.log('open modal', post, confirmModal, this.modalService)
    this.modalService.open(confirmModal).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }
  

  delete():void {
    this.posts = this.posts.filter( p => p !== this.postNeedToDelete);
    this.postService.deletePost(this.postNeedToDelete).subscribe();
   
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.postService.updatePost(this.postNeedToEdit)
    .subscribe(() => this.goBack());
  }
}
