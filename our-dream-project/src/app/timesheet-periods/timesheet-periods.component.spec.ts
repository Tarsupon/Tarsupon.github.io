import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetPeriodsComponent } from './timesheet-periods.component';

describe('TimesheetPeriodsComponent', () => {
  let component: TimesheetPeriodsComponent;
  let fixture: ComponentFixture<TimesheetPeriodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetPeriodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
