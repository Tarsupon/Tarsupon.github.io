import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedIntegrationsComponent } from './connected-integrations.component';

describe('ConnectedIntegrationsComponent', () => {
  let component: ConnectedIntegrationsComponent;
  let fixture: ComponentFixture<ConnectedIntegrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedIntegrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedIntegrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
