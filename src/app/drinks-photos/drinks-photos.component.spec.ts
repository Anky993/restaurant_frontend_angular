import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksPhotosComponent } from './drinks-photos.component';

describe('DrinksPhotosComponent', () => {
  let component: DrinksPhotosComponent;
  let fixture: ComponentFixture<DrinksPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
