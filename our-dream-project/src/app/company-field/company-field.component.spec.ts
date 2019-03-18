import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFieldComponent } from './company-field.component';

describe('CompanyFieldComponent', () => {
  let component: CompanyFieldComponent;
  let fixture: ComponentFixture<CompanyFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
