import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarItemsComponent } from './sidebar-items.component';

describe('SidebarItemsComponent', () => {
  let component: SidebarItemsComponent;
  let fixture: ComponentFixture<SidebarItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
