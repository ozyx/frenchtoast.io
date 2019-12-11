import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';
import { NGXLogger } from 'ngx-logger';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [CategoryService]
})
export class BoardComponent implements OnInit {
  @Output() deleteThisCategory = new EventEmitter();

  categories: Category[] = [];
  title: string;

  constructor(private categoryService: CategoryService, private logger: NGXLogger, public dialog: MatDialog) {
    this.title = 'Test Board';
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  getCategoryTitleById(id: number): string {
    for (const category of this.categories) {
      if (category.id === id) {
        return category.title;
      }
    }
    return '';
  }

  addCategory() {
    this.categoryService.addCategory({ title: '', tasks: [] } as Category)
      .subscribe(newCategory => this.categories.push(newCategory));
  }

  deleteCategory(id: number) {
    const dialogConfig = {
      autoFocus: true,
      data: {
        prompt: `Delete Category "${this.getCategoryTitleById(id)}"?`
      }
    };

    const dialogRef = this.dialog.open(DeleteConfirmationComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      accept => {
        // user hits save
        if (accept) {
          this.categories = this.categories.filter(c => c.id !== id);
          this.categoryService.deleteCategory(id).subscribe();
        }
      }
    );
  }
}
