import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNameTagComponent } from './project-name-tag.component';

describe('ProjectNameTagComponent', () => {
  let component: ProjectNameTagComponent;
  let fixture: ComponentFixture<ProjectNameTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectNameTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectNameTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
