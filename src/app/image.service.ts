import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { GalleryImage } from './image';

@Injectable()
export class ImageService {

  constructor(private http: HttpClient) { }
c
  getImages(url:string){
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Client-ID aa98dc1b3b319c4'
    });
    return  this.http.get(url,{headers: header});
  }

  
}
