import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/task'
import { TaskStatus } from '../model/task-status';
import { TaskService } from '../task.service'

@Component({
  selector: 'app-task-status-detail',
  templateUrl: './task-status-detail.component.html',
  styleUrls: ['./task-status-detail.component.css'],
  providers: [TaskService]
})
export class TaskStatusDetailComponent implements OnInit {
  tasks: Task[];

  @Input() status: TaskStatus;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.taskService.getTasks();
  }

  getTitle(): String {
    return "Backlog";
  }

}
