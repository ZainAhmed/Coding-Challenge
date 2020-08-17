import { Component, OnInit } from '@angular/core';
import { ImagedetailService } from '../imagedetail.service';
import { GalleryImage } from '../image';



@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image:GalleryImage

  constructor(private imageDetailService: ImagedetailService) { }


  ngOnInit() {
   this.imageDetailService.currentImage.subscribe((response)=>{
     this.image = response;
   })
    
  }


}
