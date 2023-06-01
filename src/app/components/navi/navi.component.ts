import { Component } from '@angular/core';
import { CategoryWithSubCategory } from 'src/app/models/categoryWithSubCategory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent {

  categories: CategoryWithSubCategory[] = [];

  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
   this.getAllCategory();
  }


  getAllCategory(){
    this.categoryService.getAllWithSubCategory().subscribe(response => {
      this.categories = response.data;
    });
  }

}
