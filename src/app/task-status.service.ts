import { Injectable } from '@angular/core';
import { TaskStatus } from './model/task-status';
import { STATUSES } from './mock/statuses';

@Injectable({
  providedIn: 'root'
})
export class TaskStatusService {

  statuses: TaskStatus[];

  constructor() {
    this.statuses = STATUSES;
  }

  add(status: TaskStatus) {
    this.statuses.push(status);
  }

  getStatuses(): TaskStatus[] {
    return this.statuses;
  }
}
