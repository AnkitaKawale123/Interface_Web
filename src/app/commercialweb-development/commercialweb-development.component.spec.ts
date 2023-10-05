import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialwebDevelopmentComponent } from './commercialweb-development.component';

describe('CommercialwebDevelopmentComponent', () => {
  let component: CommercialwebDevelopmentComponent;
  let fixture: ComponentFixture<CommercialwebDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommercialwebDevelopmentComponent]
    });
    fixture = TestBed.createComponent(CommercialwebDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
