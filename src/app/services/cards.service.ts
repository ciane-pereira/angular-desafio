import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environments/environments';
import { Observable } from 'rxjs';

import { PostData } from '../models/postData';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private baseURL:string = ""
  private postData: PostData | any

  constructor(
    private http:HttpClient) {
    this.baseURL = environment.API_URL
   }

   getPots(post:string):Observable<PostData> {
    this.postData = this.http.get<PostData>(`${this.baseURL}${post}`)

    return this.postData
   }
}
