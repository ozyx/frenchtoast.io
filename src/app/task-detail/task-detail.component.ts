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
  @Output() editThisTask = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  deleteTask() {
    this.deleteThisTask.emit(this.task);
  }

  openEditDialog() {
    // this.editThisTask.emit(this.task);
    console.log('test');
    const dialogRef = this.dialog.open(EditTaskModalWindowComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
