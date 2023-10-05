import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationManagementComponent } from './organisation-management.component';

describe('OrganisationManagementComponent', () => {
  let component: OrganisationManagementComponent;
  let fixture: ComponentFixture<OrganisationManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganisationManagementComponent]
    });
    fixture = TestBed.createComponent(OrganisationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
