import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  apiUrl = 'https://localhost:7077/api/messages/';

  constructor(private httpClient: HttpClient) { }


  getMessageByPostId(postId: number): Observable<ListResponseModel<Message>> {
    let newPath = this.apiUrl + "getbypostid?postId="+postId;
    return this.httpClient.get<ListResponseModel<Message>>(newPath);
  }
}
