<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPickerComponent } from './calendar-picker.component';

describe('CalendarPickerComponent', () => {
  let component: CalendarPickerComponent;
  let fixture: ComponentFixture<CalendarPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPickerComponent } from './calendar-picker.component';

describe('CalendarPickerComponent', () => {
  let component: CalendarPickerComponent;
  let fixture: ComponentFixture<CalendarPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 2741b24db22ac064567064ee65743dc88590cf0c
