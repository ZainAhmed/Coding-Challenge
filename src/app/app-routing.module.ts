import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageService } from './image.service';
import { ImagedetailService } from './imagedetail.service';

const routes: Routes = [
    {    path: '',redirectTo: '/gallery',pathMatch:'full'}, 
    {    path: 'gallery', component: GalleryComponent}, 
    {   path: 'imageDetail/:title}', component: ImageDetailComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [GalleryComponent, ImageDetailComponent]