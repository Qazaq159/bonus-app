import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private authUrl = 'https://674165dce4647499008d93b3.mockapi.io/api/v1/';
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAuthHeaders(){
    return new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/register`, { email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, { email, password });
  }

  users(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/`, { headers: this.getAuthHeaders() });
  }

  createUser(user: any) {
    return this.http.post(`${this.baseUrl}/users`, user, { headers: this.getAuthHeaders() });
  }

  updateUser(user_id: number, user: any) {
    return this.http.put(`${this.baseUrl}/users/${user_id}`, user, { headers: this.getAuthHeaders() });
  }

  deleteUser(user: any) {
    return this.http.delete(`${this.baseUrl}/users/${user.id}`, { headers: this.getAuthHeaders() });
  }


}
