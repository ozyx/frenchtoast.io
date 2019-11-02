import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskModalWindowComponent } from './edit-task-modal-window.component';

describe('EditTaskModalWindowComponent', () => {
  let component: EditTaskModalWindowComponent;
  let fixture: ComponentFixture<EditTaskModalWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTaskModalWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
