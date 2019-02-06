import { Component, OnInit } from "@angular/core";
import { Image } from "../../models/Image";
//import service
import { ImageService } from "../../services/image.service";
import { getUrlScheme } from "@angular/compiler";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-img-form",
  templateUrl: "./img-form.component.html",
  styleUrls: ["./img-form.component.css"]
})
export class ImgFormComponent implements OnInit {
  id: string;
  text: string;
  url: string;
  date: any;

  isNew: boolean = true;
  //imageUrl: string = "https://dog.ceo/api/breeds/image/random";

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    //subscribe to selectedImage observable
    this.imageService.selectedImage.subscribe(image => {
      if (image.id !== null) {
        this.isNew = false;
        this.id = image.id;
        this.text = image.text;
        this.url = image.url;
        this.date = image.date;
      }
    });

    //this.imageService.getUrl.subscribe(url => (this.url = url));
  }

  onSubmit() {
    //check if new image
    if (this.isNew) {
      //create new image
      const newImg = {
        id: this.generateId(),
        text: this.text,
        date: new Date(),
        url: this.generateUrl()
      };

      //add the image
      this.imageService.addImage(newImg);
    } else {
      //create image to be updated
      const updImg = {
        id: this.id,
        text: this.text,
        date: new Date(),
        url: this.url
      };
      //update image
      // this.imageService.updateImage(updImg);
    }
  }

  generateId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  generateUrl() {
    //   // let url = this.imageService.getImages.url[1];
    //   // let url = this.imageService.getUrl().subscribe();
    //   // let url = this.imageService.subscribe(image => {
    //   // });
    //let url = this.imageService.getUrl();
    // console.log(url);
    //return url;
    // return this.imageService.getUrl().subscribe(url => {
    //   return url;
    // });
    // let url = "https://images.dog.ceo/breeds/mix/IMG_0004.jpg";
    // console.log(url);
    //#################################HTTP Simple HTTP Request;
    // function test() {
    //   const Http = new XMLHttpRequest();
    //   const url2 = "https://dog.ceo/api/breeds/image/random";
    //   Http.open("GET", url2);
    //   Http.send();
    //   Http.onreadystatechange = e => {
    //     console.log(JSON.parse(Http.responseText).message);
    //     JSON.parse(Http.responseText).message;
    //     console.log(Http.responseText);
    //     let url = JSON.parse(Http.responseText).message;
    //     const URL = JSON.parse(Http.responseText).message;
    //     return URL;
    //     this.url = URL;
    //     return this.url;
    //   };
    // }
    // test();
    // return this.url;
    //console.log(test());
    // console.log(this.url);
    //#################################
    const url = "sdsds";
    return url;
    // console.log(url2);
    //another sollution 2
    // let url = this.imageService.getUrl().subscribe(response => {
    //   return response;
    //   let url = response[1];
    //   return url;
    // });
    // console.log(url);
    // return url;
    //another sollution 2
    // console.log(url);
    // return url;
  }
}

// url => {
//   return url;
// });
