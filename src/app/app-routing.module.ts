import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { GalleryComponent } from './gallery/gallery.component'

const routes: Routes = [
  { path: 'home', pathMatch:"full", component: HomeComponent},
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: '', pathMatch:"full", component: HomeComponent},
  { path: 'gallery',
  component: GalleryComponent,
  children: [
    {
    path: 'food_photos',
    loadChildren: () => import('./food-photos/food-photos.module').then(m => m.FoodPhotosModule)
    },
    {
      path: 'drinks_photos',
      loadChildren: () => import('./drinks-photos/drinks-photos.module').then(m => m.DrinksPhotosModule)
    },
    {
      path: 'all_photos',
      loadChildren: () => import('./all-photos/all-photos.module').then(m => m.AllPhotosModule) ,
    },
  ]
  },
  // { path: 'drinks_photos', loadChildren: () => import('./drinks-photos/drinks-photos.module').then(m => m.DrinksPhotosModule) },
  // { path: 'food_photos', loadChildren: () => import('./food-photos/food-photos.module').then(m => m.FoodPhotosModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
