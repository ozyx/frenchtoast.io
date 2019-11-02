import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Task } from '../model/task';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { EditTaskModalWindowComponent } from '../edit-task-modal-window/edit-task-modal-window.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteThisTask = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  deleteTask() {
    this.deleteThisTask.emit(this.task);
  }

  openEditDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: this.task.title,
      assignedTo: this.task.assignedTo,
      description: this.task.description
    };

    const dialogRef = this.dialog.open(EditTaskModalWindowComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log(`Dialog output: ${data}`)
    );
  }
}
