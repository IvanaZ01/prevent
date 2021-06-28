import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {

  constructor(
    _http: HttpClient
  ) { 
    super('http://localhost:3000/auth', _http)
  }

  login(username: string, password: string){
    return this._http.post('http://localhost:3000/auth/login', { username, password });
  }

  resetPasswordRequest(username: string){
    return this._http.post('http://localhost:3000/auth/reset-password-request', { username });
  }

  resetPassword(username: string, password: string){
    return this._http.post('http://localhost:3000/auth/reset-password', { username, password });
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');

    return token != null;
  }

  isAdministrator() {
    const userData = localStorage.getItem('user');

    if (userData != null) {
      const user = JSON.parse(userData);

      console.log('Checking role: ', user.role);
      return user.role == 'administrator';
    }

    return false;
  }
}
