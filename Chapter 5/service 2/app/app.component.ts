import { Component } from '@angular/core';
import { IPhoto } from './photo';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training';

  public parentName = "Mark Smith";

  public message = "";
  public photos: IPhoto[];

  constructor(private photoService: PhotosService){
      photoService.getPhotos().subscribe(data => this.photos = data)
  }

}
