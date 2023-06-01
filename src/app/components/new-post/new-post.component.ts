import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { SubCategoryService } from 'src/app/services/sub-category.service';
import { SubCategory } from 'src/app/models/subCategory';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postAddForm!: FormGroup;
  categoryDataLoaded: boolean = false;
  subCategoryDataLoaded: boolean = true;
  categories: Category[] = [];
  subCategories: SubCategory[] = [];
  selectedCategory: number | null = null;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private toastrService: ToastrService, private categoryService: CategoryService
    , private subCategoryService: SubCategoryService) { }

  ngOnInit(): void {
    this.createPostAddForm();
    this.getCategory();
  }

  createPostAddForm() {
    this.postAddForm = this.formBuilder.group({
      categoryId: ["", Validators.required],
      subCategoryId: [null],
      title: ["", Validators.required],
      content: ["", Validators.required]
    });
  }


  getSubCategory() {
    this.subCategoryDataLoaded = false;
    this.subCategoryService.getAllByCategoryId(this.selectedCategory!).subscribe(response => {
      this.subCategories = response.data;
      this.subCategoryDataLoaded = true;
    });
  }

  getCategory() {
    this.categoryService.getAll().subscribe(response => {
      this.categories = response.data;
      this.categoryDataLoaded = true;
    });
  }

  add() {
    if (this.postAddForm.valid) {
      const currentDate = new Date();
      let post = {
        UserId: 11,
        CategoryId: this.postAddForm.get('categoryId')!.value,
        SubCategoryId: this.postAddForm.get('subCategoryId')!.value,
        Title: this.postAddForm.get('title')!.value,
        Description: this.postAddForm.get('content')!.value,
        CreatedDate: new Date(currentDate.getTime() + (3 * 60 * 60 * 1000)),
        IsActive: true
      }

      this.postService.add(post).subscribe({
        next: (response) => {
          this.toastrService.success(response.message, "Başarılı");
        },
        error: (exception) => {
          if (exception.error.Errors.length > 0) {
            for (let validationError of exception.error.Errors) {
              this.toastrService.error(validationError.ErrorMessage, "Hata");
            }
          }
        }
      });
    } else {
      this.toastrService.info("Eksik bilgi girdiniz", "Bilgi");
    }

  }
}
