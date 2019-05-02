import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelogTableComponent } from './timelog-table.component';

describe('TimelogTableComponent', () => {
  let component: TimelogTableComponent;
  let fixture: ComponentFixture<TimelogTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelogTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
