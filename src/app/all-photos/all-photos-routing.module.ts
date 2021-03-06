import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPhotosComponent } from './all-photos.component';

const routes: Routes = [{ path: '', component: AllPhotosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPhotosRoutingModule { }
