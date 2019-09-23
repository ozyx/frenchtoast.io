import { TestBed } from '@angular/core/testing';

import { TaskStatusService } from './task-status.service';

describe('TaskStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskStatusService = TestBed.get(TaskStatusService);
    expect(service).toBeTruthy();
  });
});
