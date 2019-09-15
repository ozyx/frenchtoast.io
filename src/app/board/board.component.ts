import {Component, OnInit} from '@angular/core';
import {TaskStatus} from '../model/task-status';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  statuses: TaskStatus[];
  title: string;

  constructor() {
    this.title = 'Test Board';
    this.statuses = [new TaskStatus(), new TaskStatus()];
  }

  ngOnInit() {}

  onSubmit() {
    this.statuses = [new TaskStatus()];
  }
}
