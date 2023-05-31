import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Statistics } from '../models/statistics';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  apiUrl = 'https://localhost:7077/api/statistics/';

  constructor(private httpClient: HttpClient) { }


  getStatistics(): Observable<SingleResponseModel<Statistics>> {
    return this.httpClient.get<SingleResponseModel<Statistics>>(this.apiUrl);
  }
}
