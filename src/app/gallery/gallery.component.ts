import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { GalleryImage } from '../image';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  selectedSection:string='hot';
  selectedWindow:string = 'day';
  selectedSort:string="viral"

  sections: string[] = ['hot', 'top', 'user'];
  sorts: string[] = ['viral', 'top', 'time'];
  userSorts: string[] = ['viral', 'top', 'time', 'rising'];
  windows: string[] = ['day', 'week', 'month','year','all'];
  showViral=true;

  public images = [];
  public errorMsg;
  public url :string = "https://api.imgur.com/3/gallery";


  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImages(this.url+"/"+this.selectedSection+"/"+this.selectedSort+"/"+this.selectedWindow+"/0?showViral="+this.showViral.toString()+".json");
  }

  getImages(url:string){
    this.images=[];
    this.imageService.getImages(url).
   subscribe(response =>{
     let data = response["data"];
     for(let value in data){
      let jsonData = data[value];
       if(jsonData["images"] != undefined){
        let imageData = jsonData["images"];
        if(imageData.length > 1){
          for(let imgNo in imageData){
            this.images.push(new GalleryImage(jsonData["title"],imageData[imgNo]["description"],
          imageData[imgNo]["link"], imageData[imgNo]["type"],jsonData["ups"],jsonData["downs"],jsonData["score"])); 
          }
        } else {
          this.images.push(new GalleryImage(jsonData["title"],imageData[0]["description"],
          imageData[0]["link"], imageData[0]["type"],jsonData["ups"],jsonData["downs"],jsonData["score"])); 
        }
      } else {
        this.images.push(new GalleryImage(jsonData["title"],jsonData["description"], jsonData["link"],
        jsonData["type"], jsonData["ups"],jsonData["downs"],jsonData["score"]));
       }
     }
    },error => {this.errorMsg = error});
  }
  updateSection(value) {
    this.selectedSection = value;
    this.getImages(this.url+"/"+this.selectedSection+"/"+this.selectedSort+"/"+this.selectedWindow+"/0?showViral="+this.showViral.toString()+".json");
  }

  updateWindow(value) {
    this.selectedWindow = value;
    this.getImages(this.url+"/"+this.selectedSection+"/"+this.selectedSort+"/"+this.selectedWindow+"/0?showViral="+this.showViral.toString()+".json");
  }

  updateSort(value) {
    this.selectedSort = value;
    this.getImages(this.url+"/"+this.selectedSection+"/"+this.selectedSort+"/"+this.selectedWindow+"/0?showViral="+this.showViral.toString()+".json");
  }

  updateViral(value) {
    this.showViral = value;
    this.getImages(this.url+"/"+this.selectedSection+"/"+this.selectedSort+"/"+this.selectedWindow+"/0?showViral="+this.showViral.toString()+".json");
  }
}
