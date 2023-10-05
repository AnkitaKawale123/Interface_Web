import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinedigitalMarketingComponent } from './onlinedigital-marketing.component';

describe('OnlinedigitalMarketingComponent', () => {
  let component: OnlinedigitalMarketingComponent;
  let fixture: ComponentFixture<OnlinedigitalMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlinedigitalMarketingComponent]
    });
    fixture = TestBed.createComponent(OnlinedigitalMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
