import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from "./pages/albums/albums.component";
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LyricsComponent } from './pages/lyrics/lyrics.component';
import { MembersComponent } from './pages/members/members.component';
import { VideosComponent } from './pages/videos/videos.component';
import { HomePage } from './pages/home/home.page';
import { ListPage } from './list/list.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'list',
    component: ListPage
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'lyrics',
    component: LyricsComponent
  },
  {
    path:'members',
    component: MembersComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
