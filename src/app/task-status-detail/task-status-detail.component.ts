import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/task'
import { TaskStatus } from '../model/task-status';

@Component({
  selector: 'app-task-status-detail',
  templateUrl: './task-status-detail.component.html',
  styleUrls: ['./task-status-detail.component.css'],
})
export class TaskStatusDetailComponent implements OnInit {
  tasks: Task[];

  @Input() status: TaskStatus;
  constructor() { 
  }
  
  ngOnInit() {
    this.tasks = this.status.tasks;
  }
  
  getTitle(): String {
    return this.status.title;
  }
}
