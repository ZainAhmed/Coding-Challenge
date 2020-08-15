import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import {MatRadioModule} from '@angular/material/radio';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageService } from './image.service';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatRadioModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
