import { Component, OnInit } from '@angular/core';
import { IPost } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public posts: IPost[] = []

  constructor(private postService: PostService) { 
    postService.getPosts().subscribe(data => this.posts = data);
  
  }

  ngOnInit(): void {
  }

}
