import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileappDevelopmentComponent } from './mobileapp-development.component';

describe('MobileappDevelopmentComponent', () => {
  let component: MobileappDevelopmentComponent;
  let fixture: ComponentFixture<MobileappDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileappDevelopmentComponent]
    });
    fixture = TestBed.createComponent(MobileappDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
