import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  prompt: string;

  constructor(private dialogRef: MatDialogRef<DeleteConfirmationComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.prompt = data != null ? data.prompt : 'Are you sure?';
  }

  ngOnInit() {
  }

}
