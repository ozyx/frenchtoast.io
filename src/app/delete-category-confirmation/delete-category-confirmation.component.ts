import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-category-confirmation',
  templateUrl: './delete-category-confirmation.component.html',
  styleUrls: ['./delete-category-confirmation.component.css']
})
export class DeleteCategoryConfirmationComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteCategoryConfirmationComponent>) { }

  ngOnInit() {
  }

}
