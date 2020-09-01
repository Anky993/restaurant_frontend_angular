import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrinksPhotosComponent } from './drinks-photos.component';

const routes: Routes = [{ path: '', component: DrinksPhotosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinksPhotosRoutingModule { }
