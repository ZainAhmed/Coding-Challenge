import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { GalleryImage } from './image';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ImageService {

  constructor(private http: HttpClient) { }
c
  getImages(url:string):Observable<GalleryImage[]>{
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Client-ID aa98dc1b3b319c4'
    });
    return  this.http.get(url,{headers: header})
    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message|| "Server Error");
  }
}
