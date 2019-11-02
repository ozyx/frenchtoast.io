import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsModalWindowComponent } from './about-us-modal-window.component';

describe('AboutUsModalWindowComponent', () => {
  let component: AboutUsModalWindowComponent;
  let fixture: ComponentFixture<AboutUsModalWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsModalWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
