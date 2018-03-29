import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../service/post.service'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from '../../modals/modal-basic';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

})
export class PostsComponent implements OnInit {

  posts;
  closeResult: string;
  selectedPost: Post;

  constructor(private postService: PostService, private modalService: NgbModal) { }

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

  openDeleteConfirm(post: Post, confirmModal): void {
   

    console.log('open modal', post, confirmModal, this.modalService)

    this.modalService.open(confirmModal).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });

  }
  delete(post: Post):void {
    this.posts = this.posts.filter( p => p !== post);
    this.postService.deletePost(post).subscribe();
  }

}
