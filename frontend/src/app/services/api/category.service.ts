import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiService{

  constructor(private http: HttpClient) { 
    super('http://localhost:3000/category', http)
  }
}
