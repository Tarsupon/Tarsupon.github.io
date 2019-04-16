import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedDiagramComponent } from './stacked-diagram.component';

describe('StackedDiagramComponent', () => {
  let component: StackedDiagramComponent;
  let fixture: ComponentFixture<StackedDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
