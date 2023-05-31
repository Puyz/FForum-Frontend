import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit{
  
  postAddForm!: FormGroup;
  progress: boolean = false;

  constructor(private formBuilder: FormBuilder, private postService: PostService) { }

  ngOnInit(): void {
    this.createPostAddForm();
  }

  createPostAddForm() {
    this.postAddForm = this.formBuilder.group({
      categoryId: ["", Validators.required],
      subCategoryId: ["", Validators.required],
      title: ["", Validators.required],
      content: ["", Validators.required]
    });
  }
}
