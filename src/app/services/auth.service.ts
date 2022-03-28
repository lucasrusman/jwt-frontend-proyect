import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) {}

  postRegister(user: User) {
    return this.http.post(`${environment.apiUrl}/signup`, user);
  }

  postLogin(user: User) {
    return this.http.post(`${environment.apiUrl}/login`, user);
  }
}
