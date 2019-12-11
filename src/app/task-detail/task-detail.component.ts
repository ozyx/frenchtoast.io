import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Task } from '../model/task';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { EditTaskModalWindowComponent } from '../edit-task-modal-window/edit-task-modal-window.component';
import { DeleteTaskConfirmationComponent } from '../delete-task-confirmation/delete-task-confirmation.component';

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
    const dialogConfig = {
      autoFocus: true,
    };

    const dialogRef = this.dialog.open(DeleteTaskConfirmationComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      accept => {
        // user hits save
        if (accept) {
          this.deleteThisTask.emit(this.task);
        }
      }
    );
  }

  openEditDialog() {

    const dialogConfig = {
      autoFocus: true,
      data: { task: this.task, title: 'Edit Task' },
      width: '30%'
    };

    const dialogRef = this.dialog.open(EditTaskModalWindowComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      accept => {
        // user hits save
        if (accept) {
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
