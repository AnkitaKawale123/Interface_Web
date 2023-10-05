import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTrainingComponent } from './online-training.component';

describe('OnlineTrainingComponent', () => {
  let component: OnlineTrainingComponent;
  let fixture: ComponentFixture<OnlineTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineTrainingComponent]
    });
    fixture = TestBed.createComponent(OnlineTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
