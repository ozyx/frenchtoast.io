import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Task } from '../model/task';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { EditTaskModalWindowComponent } from '../edit-task-modal-window/edit-task-modal-window.component';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';

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

  /**
   * Open confirmation dialog asking if user wants to delete this task
   * If accepted, emit deleteThisTask(task) event to be caught and handled by
   * the parent Category
   */
  deleteTask() {

    const dialogConfig = {
      autoFocus: true,
      data: {
        prompt: `Delete Task "${this.task.title}"?`
      }
    };

    // Open confirmation dialog
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      accept => {
        // user hits save
        if (accept) {
          this.deleteThisTask.emit(this.task);
        }
      }
    );
  }

  /**
   * Open a dialog which allows user to edit a particular task.
   * If user hits save, emit updateTask(task) event to be caught by
   * the parent Category. Otherwise, restore original values.
   */
  openEditDialog() {
    const dialogConfig = {
      autoFocus: true,
      data: { task: this.task, title: 'Edit Task' },
      width: '80vh',
    };

    const dialogRef = this.dialog.open(EditTaskModalWindowComponent, dialogConfig);

    // Keep track of original values to avoid an extra call to "getTasks()"
    const id = this.task.id;
    const title = this.task.title;
    const description = this.task.description;
    const assignedTo = this.task.assignedTo;

    dialogRef.afterClosed().subscribe(
      accept => {
        // user hits save
        // emit the task data to the specific category,
        // which then calls to categoryService to update the task
        if (accept) {
          this.updateTask.emit(this.task);
        } else {
          // user hits cancel, restore original values
          this.task.id = id;
          this.task.title = title;
          this.task.description = description;
          this.task.assignedTo = assignedTo;
        }
      }
    );
  }
}
