import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeBlueButtonsComponent } from './three-blue-buttons.component';

describe('ThreeBlueButtonsComponent', () => {
  let component: ThreeBlueButtonsComponent;
  let fixture: ComponentFixture<ThreeBlueButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeBlueButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeBlueButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
