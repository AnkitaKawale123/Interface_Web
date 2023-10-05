import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialWebsitesComponent } from './commercial-websites.component';

describe('CommercialWebsitesComponent', () => {
  let component: CommercialWebsitesComponent;
  let fixture: ComponentFixture<CommercialWebsitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommercialWebsitesComponent]
    });
    fixture = TestBed.createComponent(CommercialWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
