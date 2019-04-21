import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDefaultProjectComponent } from './select-default-project.component';

describe('SelectDefaultProjectComponent', () => {
  let component: SelectDefaultProjectComponent;
  let fixture: ComponentFixture<SelectDefaultProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDefaultProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDefaultProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
