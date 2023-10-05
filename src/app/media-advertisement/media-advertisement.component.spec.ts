import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAdvertisementComponent } from './media-advertisement.component';

describe('MediaAdvertisementComponent', () => {
  let component: MediaAdvertisementComponent;
  let fixture: ComponentFixture<MediaAdvertisementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaAdvertisementComponent]
    });
    fixture = TestBed.createComponent(MediaAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
