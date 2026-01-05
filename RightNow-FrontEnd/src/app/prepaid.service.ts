import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrepaidService {

  private apiUrl = 'http://localhost:3000/postRequests';

  constructor(private http: HttpClient) {}

  saveMobile(mobile: string) {
    const data = {
      connection: 'Prepaid Recharge',
      mobile: mobile
    };

    return this.http.post(this.apiUrl, data);
  }
}
