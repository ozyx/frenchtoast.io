import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Task } from '../model/task';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskModalWindowComponent } from '../edit-task-modal-window/edit-task-modal-window.component';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
})
export class CategoryDetailComponent implements OnInit {
  @Input() category: Category;
  @ViewChild('categoryName', { static: false }) categoryNameInputElement: ElementRef;
  readOnly: string;

  constructor(private categoryService: CategoryService, public dialog: MatDialog) {
    this.readOnly = 'true';
  }

  ngOnInit() {
    this.getTasks();
  }

  /**
   * Update the view for this specific category
   */
  getTasks(): void {
    this.categoryService.getCategoryById(this.category.id).subscribe(category => {
      this.category.tasks = category.tasks;
    });
  }

  /**
   * Returns category title
   */
  getTitle(): string {
    return this.category.title;
  }

  /**
   * Open a modal dialog which collects information pertaining
   * to a new Task. If user hits save, add new Task to the Category
   * and update the view.
   */
  addTask() {
    const dialogConfig = {
      autoFocus: true,
      data: { title: 'New Task' },
      width: '30%',
    };

    // Open the "Add Task" dialog window
    const dialogRef = this.dialog.open(EditTaskModalWindowComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      accept => {
        // Add the new task and update the view
        if (accept) {
          this.category.tasks.push(accept.data);
          this.categoryService.updateCategory(this.category).subscribe(() => this.getTasks());
        }
      });
  }

  /**
   * Update a particular Task in the Category and update the view
   * @param task the new task
   */
  updateTask(task: Task) {
    for (let t of this.category.tasks) {
      if (t.id === task.id) {
        t = task;
      }
    }

    // Update the view
    this.categoryService.updateCategory(this.category).subscribe(() => this.getTasks());
  }

  /**
   * Delete a particular Task in the Category and update the view
   * @param task the task to delete
   */
  deleteTask(task: Task) {
    this.category.tasks = this.category.tasks.filter(t => t.id !== task.id);
    this.categoryService.updateCategory(this.category).subscribe(() => this.getTasks());
  }

  /**
   * Toggle ReadOnly parameter on the category title input
   * @param isReadOnly
   */
  setReadOnly(isReadOnly: boolean) {
    this.readOnly = isReadOnly ? 'true' : 'false';
    if (!isReadOnly) {
      this.categoryNameInputElement.nativeElement.focus();
    }
  }

  /**
   * Handle moving tasks between categories when drag & dropped
   * @param event 
   */
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    this.categoryService.updateCategory(this.category).subscribe(() => this.getTasks());
  }
}
