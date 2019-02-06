import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { Image } from "../models/Image";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  images: Image[];

  private imageSource = new BehaviorSubject<Image>({
    id: null,
    text: null,
    url: null,
    date: null
  });

  selectedImage = this.imageSource.asObservable();

  imageUrl: string = "https://dog.ceo/api/breeds/image/random";

  constructor(private http: HttpClient) {
    this.images = [
      {
        id: "1",
        text: "Generated Pet 1",
        url: "https://source.unsplash.com/1600x900/?pet",
        date: new Date("10/25/2017 12:54:32")
      },
      {
        id: "2",
        text: "Generated Pet 2",
        url: "https://source.unsplash.com/1600x900/?pet",
        date: new Date("12/26/2017 12:58:33")
      },
      {
        id: "3",
        text: "Generated Pet 3",
        url: "https://source.unsplash.com/1600x900/?pet",
        date: new Date("12/28/2017 12:59:30")
      }
    ];
  }

  getImages(): Observable<Image[]> {
    return of(this.images);
  }

  setFormImage(image: Image) {
    this.imageSource.next(image);
  }

  addImage(image: Image) {
    this.images.unshift(image);
  }

  getUrl() {
    //: Observable<any>

    return this.http.get(this.imageUrl);

    //const url2 = "https://images.dog.ceo/breeds/cairn/n02096177_2917.jpg";

    //console.log(this.imageUrl);
    //console.log(this.imageUrl);
    // const test = this.http.request(this.imageUrl)

    //const url = "https://dog.ceo/api/breeds/image/random";

    //return url;

    //return this.http.get<Image[]>(this.imageUrl);
    //return this.http.get(this.imageUrl);
    // return of(this.http.get<Image[]>(this.imageUrl));

    //return this.http.get(this.imageUrl);
  }
}
