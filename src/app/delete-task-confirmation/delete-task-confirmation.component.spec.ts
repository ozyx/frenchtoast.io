import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTaskConfirmationComponent } from './delete-task-confirmation.component';

describe('DeleteTaskConfirmationComponent', () => {
  let component: DeleteTaskConfirmationComponent;
  let fixture: ComponentFixture<DeleteTaskConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTaskConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTaskConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
