import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyIntegrationsComponent } from './company-integrations.component';

describe('CompanyIntegrationsComponent', () => {
  let component: CompanyIntegrationsComponent;
  let fixture: ComponentFixture<CompanyIntegrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyIntegrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyIntegrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
