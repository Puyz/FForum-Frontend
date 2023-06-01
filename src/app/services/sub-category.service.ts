import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { SubCategory } from '../models/subCategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  apiUrl = 'https://localhost:7077/api/subcategories/';

  constructor(private httpClient: HttpClient) { }


  getAllByCategoryId(id: number): Observable<ListResponseModel<SubCategory>> {
    let newPath = this.apiUrl + "getallbycategoryid?id="+id;
    return this.httpClient.get<ListResponseModel<SubCategory>>(newPath);
  }
}
