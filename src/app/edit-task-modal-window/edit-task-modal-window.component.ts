import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../model/task';

@Component({
  selector: 'app-edit-task-modal-window',
  templateUrl: './edit-task-modal-window.component.html',
  styleUrls: ['./edit-task-modal-window.component.css']
})
export class EditTaskModalWindowComponent implements OnInit {
  task: Task;

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.task = data;
  }

  ngOnInit() {
  }

}
