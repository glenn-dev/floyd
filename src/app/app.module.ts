import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { HttpClientModule } from "@angular/common/http";

// Pages
import { HomePage } from "./pages/home/home.page";
import { ListPage } from "./list/list.page";
import { AlbumsComponent } from "./pages/albums/albums.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";
import { LyricsComponent } from "./pages/lyrics/lyrics.component";
import { MembersComponent } from "./pages/members/members.component";
import { AppComponent } from "./app.component";
import { VideosComponent } from "./pages/videos/videos.component";

// Routing
import { AppRoutingModule } from "./app-routing.module";
// import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [AppComponent, HomePage, ListPage, AlbumsComponent, GalleryComponent, LyricsComponent, MembersComponent, VideosComponent],
  entryComponents: [],
  imports: [ 
    // HttpClient,
    HttpClientModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
