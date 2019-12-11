import { Component, EventEmitter, OnInit, Input, Inject, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../model/task';

@Component({
  selector: 'app-edit-task-modal-window',
  templateUrl: './edit-task-modal-window.component.html',
  styleUrls: ['./edit-task-modal-window.component.css']
})
export class EditTaskModalWindowComponent implements OnInit {
  @Output() updatedTask = new EventEmitter();
  task: Task;
  title: String;

  constructor(private dialogRef: MatDialogRef<EditTaskModalWindowComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.task = data.task;
    this.title = data.title;
  }

  ngOnInit() {
  }

  updateTask() {
    this.updatedTask.emit(this.task);
  }
}
