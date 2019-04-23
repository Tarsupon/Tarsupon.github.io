import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedActualComponent } from './planned-actual.component';

describe('PlannedActualComponent', () => {
  let component: PlannedActualComponent;
  let fixture: ComponentFixture<PlannedActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannedActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
