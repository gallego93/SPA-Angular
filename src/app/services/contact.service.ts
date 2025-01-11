import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://127.0.0.1:8000/api/contacts';

  constructor(private http: HttpClient) { }

  sendMessage(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
