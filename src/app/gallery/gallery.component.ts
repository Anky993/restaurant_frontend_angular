import { Component, OnInit, NgZone } from '@angular/core';
import { ServiceService } from '../service.service'
import { FoodPhotosModule } from '../food-photos/food-photos.module'
import { Router } from "@angular/router";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  data;

  constructor(private ngZone:NgZone , private router:Router) { }

  ngOnInit(): void {
  }

  getfood_photos() {
    this.ngZone.run(() => this.router.navigate(['/food_photos'])).then();




  }

}
