import { Component } from '@angular/core';
import { PostService } from '../services/post-service';
import { PostModel } from '../model/post.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'post-list',
  imports: [CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
  allPosts: PostModel[] = [];
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getAllPosts().subscribe({
      next: (response) => {
        console.log(response);
        this.allPosts = response;
        console.log(this.allPosts);
      },
      error: (err) => console.log(err),
    });
  }
}
