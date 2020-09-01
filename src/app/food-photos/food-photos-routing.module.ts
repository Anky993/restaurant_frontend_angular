import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodPhotosComponent } from './food-photos.component';

const routes: Routes = [{ path: '', component: FoodPhotosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodPhotosRoutingModule { }
