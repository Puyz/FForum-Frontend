import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';
import { CategoryWithSubCategory } from '../models/categoryWithSubCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:7077/api/categories/';

  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<ListResponseModel<Category>> {
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }

  getAllWithSubCategory(): Observable<ListResponseModel<CategoryWithSubCategory>> {
    let newPath = this.apiUrl + "getallwithsubcategories";
    return this.httpClient.get<ListResponseModel<CategoryWithSubCategory>>(newPath);
  }
}
