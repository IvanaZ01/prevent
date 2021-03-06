import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService{
  
  constructor(http: HttpClient) { 
    super('http://localhost:3000/user', http)
  }
}
