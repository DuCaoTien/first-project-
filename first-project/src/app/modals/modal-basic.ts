import {Component} from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {PostsComponent} from '../component/posts/posts.component';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: 'src/modal-basic.html'
})
export class NgbdModalBasic {
  closeResult: string;

  constructor( private modalService: NgbModal, 
               private postService: PostService) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
