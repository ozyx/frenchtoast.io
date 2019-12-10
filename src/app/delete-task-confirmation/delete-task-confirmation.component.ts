import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-task-confirmation',
  templateUrl: './delete-task-confirmation.component.html',
  styleUrls: ['./delete-task-confirmation.component.css']
})
export class DeleteTaskConfirmationComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteTaskConfirmationComponent>) { }

  ngOnInit() {
  }

}
