import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPhoto } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private _url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {

   }

   getPhotos(): Observable<IPhoto[]>{
     return this.http.get<IPhoto[]>(this._url)
   }

}
