import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayOutComponent } from './main-lay-out.component';

describe('MainLayOutComponent', () => {
  let component: MainLayOutComponent;
  let fixture: ComponentFixture<MainLayOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLayOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
