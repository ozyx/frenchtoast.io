import { Component, OnInit } from '@angular/core';
import { TaskStatus } from '../model/task-status';
import { TaskStatusService } from '../task-status.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [TaskStatusService]
})
export class BoardComponent implements OnInit {
  statuses: TaskStatus[];
  title: string;

  constructor(private statusService: TaskStatusService) {
    this.title = 'Test Board';
  }

  ngOnInit() {
    this.statuses = this.statusService.getStatuses();
  }

  onSubmit() {
    // this.statuses = [new TaskStatus()];
  }
}
