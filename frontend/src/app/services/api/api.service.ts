import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    @Inject(String) private url: string,
    public _http: HttpClient
  ) {

  }

  getAll(filter?:{search:string, category:number}){
    if(!filter){
      return this._http.get(this.url)
    }
    return this._http.get(this.url+`/search?search=${filter.search}&category=${filter.category}`)
  }

  create(resource:any){    
    return this._http.post(this.url, resource)
  }

  update(resource:any){
    return this._http.put(this.url +'/'+ resource.id, resource)
  }

  delete(id:number|string){
    return this._http.delete(this.url +'/'+ id)
  }

}
