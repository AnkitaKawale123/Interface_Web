import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLeadComponent } from './sales-lead.component';

describe('SalesLeadComponent', () => {
  let component: SalesLeadComponent;
  let fixture: ComponentFixture<SalesLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesLeadComponent]
    });
    fixture = TestBed.createComponent(SalesLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
