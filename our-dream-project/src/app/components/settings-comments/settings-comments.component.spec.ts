import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCommentsComponent } from './settings-comments.component';

describe('SettingsCommentsComponent', () => {
  let component: SettingsCommentsComponent;
  let fixture: ComponentFixture<SettingsCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
