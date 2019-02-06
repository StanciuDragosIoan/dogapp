import { Component, OnInit } from "@angular/core";
//import interface/model
import { Image } from "../../models/Image";
//import service
import { ImageService } from "../../services/image.service";

@Component({
  selector: "app-images",
  templateUrl: "./images.component.html",
  styleUrls: ["./images.component.css"]
})
export class ImagesComponent implements OnInit {
  images: Image[];

  //inject service as dependency into the constructor;
  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.imageService.getImages().subscribe(images => {
      this.images = images;
    });
  }

  onSelect(image: Image) {
    this.imageService.setFormImage(image);
  }
}
