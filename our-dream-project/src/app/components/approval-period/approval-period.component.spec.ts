import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalPeriodComponent } from './approval-period.component';

describe('ApprovalPeriodComponent', () => {
  let component: ApprovalPeriodComponent;
  let fixture: ComponentFixture<ApprovalPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
