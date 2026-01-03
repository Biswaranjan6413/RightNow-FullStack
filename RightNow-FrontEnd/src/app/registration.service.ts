import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'http://localhost:3000/registrations';

  constructor(private http: HttpClient) {}

  saveRegistration(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getRegistrations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
