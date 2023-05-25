import { Component, Input } from '@angular/core';
import { format } from 'timeago.js';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
   @Input() title: string = "";
   @Input() time: Date = new Date();
   @Input() isActive:boolean = false; 
   @Input() image: string | null = null;

  
}
