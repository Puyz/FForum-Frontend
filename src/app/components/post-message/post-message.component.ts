import { Component, Input } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-post-message',
  templateUrl: './post-message.component.html',
  styleUrls: ['./post-message.component.scss']
})
export class PostMessageComponent {
  @Input() message!: Message;
}
