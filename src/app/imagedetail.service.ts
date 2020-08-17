import { Injectable } from '@angular/core';
import { GalleryImage } from './image';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImagedetailService {
  private imageSource = new BehaviorSubject<GalleryImage>({
    description:"",
    title:"",
    downvotes:0,
    link:"",
    score:0,
    type:"",
    upvotes:0
  })
  currentImage = this.imageSource.asObservable();
  
  constructor() {  }

  getImageDetail(img:GalleryImage ){
    this.imageSource.next(img);
  }
}
