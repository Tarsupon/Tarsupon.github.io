import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyIntegrationsLinksComponent } from './company-integrations-links.component';

describe('CompanyIntegrationsLinksComponent', () => {
  let component: CompanyIntegrationsLinksComponent;
  let fixture: ComponentFixture<CompanyIntegrationsLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyIntegrationsLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyIntegrationsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
