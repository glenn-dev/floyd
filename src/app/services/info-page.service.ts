import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { InfoAlbum } from "../interfaces/info-album.interface";

@Injectable({
  providedIn: "root"
})
export class InfoPageService {
  loading = true;
  albums: InfoAlbum[] = [];
  cover:[]= [];

  constructor(private http: HttpClient) {
    this.loading = true;
    this.loadAlbums();
    // this.loadCover();
  }

  private loadAlbums() {
    this.http
      .get("assets/data/data-album.json")
      .subscribe((resp: InfoAlbum[]) => {
        // console.log(resp);
        this.albums = resp;
        this.loading = false;
      });
  }

  // private loadCover() {
  //   this.http
  //     .get("assets/AlbumCover")
  //     .subscribe((resp:[]) => {
  //       console.log(resp);
  //       this.cover = resp;
  //       this.loading = false;
  //     });
  // }
}
