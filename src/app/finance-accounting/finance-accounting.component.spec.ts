import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceAccountingComponent } from './finance-accounting.component';

describe('FinanceAccountingComponent', () => {
  let component: FinanceAccountingComponent;
  let fixture: ComponentFixture<FinanceAccountingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceAccountingComponent]
    });
    fixture = TestBed.createComponent(FinanceAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
