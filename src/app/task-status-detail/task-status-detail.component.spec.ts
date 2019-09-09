import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusDetailComponent } from './task-status-detail.component';

describe('TaskStatusDetailComponent', () => {
  let component: TaskStatusDetailComponent;
  let fixture: ComponentFixture<TaskStatusDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStatusDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStatusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
