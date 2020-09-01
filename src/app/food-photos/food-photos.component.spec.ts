import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPhotosComponent } from './food-photos.component';

describe('FoodPhotosComponent', () => {
  let component: FoodPhotosComponent;
  let fixture: ComponentFixture<FoodPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
