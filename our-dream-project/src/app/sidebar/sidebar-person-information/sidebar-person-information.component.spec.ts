import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPersonInformationComponent } from './sidebar-person-information.component';

describe('SidebarPersonInformationComponent', () => {
  let component: SidebarPersonInformationComponent;
  let fixture: ComponentFixture<SidebarPersonInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarPersonInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPersonInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
