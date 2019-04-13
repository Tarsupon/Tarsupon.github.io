import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePhotoComponent } from './name-photo.component';

describe('NamePhotoComponent', () => {
  let component: NamePhotoComponent;
  let fixture: ComponentFixture<NamePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
