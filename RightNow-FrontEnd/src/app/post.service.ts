import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:3000/postRequests';

  constructor(private http: HttpClient) {}

  savePostData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
