import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodPhotosRoutingModule } from './food-photos-routing.module';
import { FoodPhotosComponent } from './food-photos.component';


@NgModule({
  declarations: [FoodPhotosComponent],
  imports: [
    CommonModule,
    FoodPhotosRoutingModule
  ]
})
export class FoodPhotosModule { }
