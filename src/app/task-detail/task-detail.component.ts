import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Task } from '../model/task';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskModalWindowComponent } from '../edit-task-modal-window/edit-task-modal-window.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteThisTask = new EventEmitter();
  @Output() editTask = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  deleteTask() {
    this.deleteThisTask.emit(this.task);
  }

  openEditDialog() {
    // this.editTask.emit(this.task);
    const dialogRef = this.dialog.open(EditTaskModalWindowComponent, {data: this.task});
  }
}
