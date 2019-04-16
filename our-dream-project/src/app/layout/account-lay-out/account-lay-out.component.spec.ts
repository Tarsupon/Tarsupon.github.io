import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLayOutComponent } from './account-lay-out.component';

describe('AccountLayOutComponent', () => {
  let component: AccountLayOutComponent;
  let fixture: ComponentFixture<AccountLayOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountLayOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountLayOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
