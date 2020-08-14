import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { GalleryImage } from '../image';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public images = [];
  public errorMsg;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
   this.imageService.getImages().
   subscribe(data =>{
     console.log(data);
     let jsonData = data["data"];
     for(let value in jsonData){
       if(jsonData[value]["images"] != undefined){
        this.images.push(new GalleryImage(jsonData[value]["title"],jsonData[value]["description"],
        jsonData[value]["images"][0]["link"],jsonData[value]["ups"],jsonData[value]["downs"],jsonData[value]["score"])); 
       } else {
        this.images.push(new GalleryImage(jsonData[value]["title"],jsonData[value]["description"],
        jsonData[value]["link"],jsonData[value]["ups"],jsonData[value]["downs"],jsonData[value]["score"]));
       }
       
     }
    },error => {this.errorMsg = error});

    let img = this.images
    for(let val in img){
      console.log(val);
    }
  }
  

  
}
