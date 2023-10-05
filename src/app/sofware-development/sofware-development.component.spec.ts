import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofwareDevelopmentComponent } from './sofware-development.component';

describe('SofwareDevelopmentComponent', () => {
  let component: SofwareDevelopmentComponent;
  let fixture: ComponentFixture<SofwareDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SofwareDevelopmentComponent]
    });
    fixture = TestBed.createComponent(SofwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
