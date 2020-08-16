import { Injectable,EventEmitter } from '@angular/core';
import { GalleryImage } from './image';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';

@Injectable()
export class ImagedetailService {
  image = new BehaviorSubject<GalleryImage>({
    description:"",
    title:"",
    downvotes:0,
    link:"",
    score:0,
    type:"",
    upvotes:0
  })
  subcription = new Subscription();
  constructor() { 
    // this.subcription.add(
    //   this.image.subscribe(res => {console.log("image changed: ", res)})
    // )
    console.log("service initialized ")
  }
}
