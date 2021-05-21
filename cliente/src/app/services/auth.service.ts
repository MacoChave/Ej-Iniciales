import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Uri } from '../models/Uri';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.set('Content-Type', 'application/json');
  }

  signin(userData: User) {
    console.log(Uri.SIGNIN);
    return this.http.post(Uri.SIGNIN, userData, { headers: this.headers });
  }
}
