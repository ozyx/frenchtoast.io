import { Component, OnInit } from '@angular/core';
import { TaskStatus } from "../model/task-status";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  statuses: TaskStatus[];

  constructor() {
    this.statuses = [
      new TaskStatus()
    ]
   }

  ngOnInit() {
  }

}
