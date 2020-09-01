import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinksPhotosRoutingModule } from './drinks-photos-routing.module';
import { DrinksPhotosComponent } from './drinks-photos.component';


@NgModule({
  declarations: [DrinksPhotosComponent],
  imports: [
    CommonModule,
    DrinksPhotosRoutingModule
  ]
})
export class DrinksPhotosModule { }
