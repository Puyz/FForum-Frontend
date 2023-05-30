import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models/message';
import { Post } from 'src/app/models/post';
import { MessageService } from 'src/app/services/message.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {

  post!: Post;
  messages: Message[] = [];
  dataLoaded = false;
  messagesDataLoaded = false;
  color = "#000";

  constructor(private postService: PostService, private messageService: MessageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getPostById(params["postId"]);
      this.getMessageByPostId(params["postId"]);
    })
  }

  getPostById(postId: number) {
    this.postService.getPostById(postId).subscribe(response => {
      this.post = response.data;
      this.color = "#" + this.post.user.rank.color
      this.dataLoaded = true;
    });
  }

  getMessageByPostId(postId: number) {
    this.messageService.getMessageByPostId(postId).subscribe(response => {
      this.messages = response.data;
      this.messagesDataLoaded = true;
    });
  }


}
