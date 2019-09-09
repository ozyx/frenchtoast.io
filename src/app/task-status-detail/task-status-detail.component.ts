import { Component, OnInit, Input } from '@angular/core';
import { TaskStatus } from '../model/task-status';

@Component({
  selector: 'app-task-status-detail',
  templateUrl: './task-status-detail.component.html',
  styleUrls: ['./task-status-detail.component.css']
})
export class TaskStatusDetailComponent implements OnInit {
  @Input() status: TaskStatus;
  constructor() { }

  ngOnInit() {
  }

}
