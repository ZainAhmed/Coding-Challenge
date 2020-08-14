import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GalleryImage } from './image';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ImageService {

  private url: string = 'https://api.imgur.com/3/gallery/hot/viral/0.json';
  constructor(private http: HttpClient) { }


  getImages():Observable<GalleryImage[]>{
    return  this.http.get(this.url)
    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message|| "Server Error");
  }
}
