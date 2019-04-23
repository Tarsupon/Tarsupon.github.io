import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsProgressBarComponent } from './projects-progress-bar.component';

describe('ProjectsProgressBarComponent', () => {
  let component: ProjectsProgressBarComponent;
  let fixture: ComponentFixture<ProjectsProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
