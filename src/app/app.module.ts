import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ImgFormComponent } from "./components/img-form/img-form.component";
import { ImagesComponent } from "./components/images/images.component";
import { ImageService } from "./services/image.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImgFormComponent,
    ImagesComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
