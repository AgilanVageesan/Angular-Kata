import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseurl = 'https://grocery-second-app.herokuapp.com/api/';
  private url_category = 'category'
  
  private url_products = 'products'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    return this.http.get(`${this.baseurl + this.url_category}`)
  }

  getSubCategories(catId):Observable<any>{
      return this.http.get(`${this.baseurl}`)
  }

  getProducts():Observable<any>{
    return this.http.get(`${this.baseurl + this.getProducts}`)
  }
}
