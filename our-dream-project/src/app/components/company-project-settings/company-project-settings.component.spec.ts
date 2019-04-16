import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProjectSettingsComponent } from './company-project-settings.component';

describe('CompanyProjectSettingsComponent', () => {
  let component: CompanyProjectSettingsComponent;
  let fixture: ComponentFixture<CompanyProjectSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProjectSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProjectSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
