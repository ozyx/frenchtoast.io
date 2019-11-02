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
  @Output() updateTask = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  deleteTask() {
    this.deleteThisTask.emit(this.task);
  }

  openEditDialog() {

    const dialogConfig = {
      disableClose: true,
      autoFocus: true,
      data: this.task
    };

    const dialogRef = this.dialog.open(EditTaskModalWindowComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        // user hits save
        if (data) {
          this.updateTask.emit(this.task);
        } else {
          // user hits cancel
          // (this just triggers a "getTasks())")
          this.cancel.emit();
        }
      }
    );
  }
}
