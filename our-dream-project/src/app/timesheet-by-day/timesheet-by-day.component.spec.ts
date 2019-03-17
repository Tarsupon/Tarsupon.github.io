import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetByDayComponent } from './timesheet-by-day.component';

describe('TimesheetByDayComponent', () => {
  let component: TimesheetByDayComponent;
  let fixture: ComponentFixture<TimesheetByDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetByDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
