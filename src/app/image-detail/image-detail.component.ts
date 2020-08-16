import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImagedetailService } from '../imagedetail.service';
import { GalleryImage } from '../image';
import { take } from 'rxjs/operator/take';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit, OnDestroy {

  constructor(private imageDetailService: ImagedetailService) { }
  image: GalleryImage;
  subscription = new Subscription()
  ngOnInit() {
    console.log("reached init");
    this.subscription.add(
    this.imageDetailService.image.subscribe(res => {
      console.log("dataa should be here",res);
    }))
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
