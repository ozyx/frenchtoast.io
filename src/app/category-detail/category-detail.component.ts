import { Component, OnInit, Input } from '@angular/core';
import { Guid } from '../util/util';
import { Task } from '../model/task';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
})
export class CategoryDetailComponent implements OnInit {
  @Input() category: Category;
  readonly: string;

  constructor(private categoryService: CategoryService) {
    this.readonly = 'true';
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.categoryService.getCategoryById(this.category.id).subscribe(category => {
      this.category.tasks = category.tasks;
    });
  }

  getTitle(): string {
    return this.category.title;
  }

  addTask() {
    this.category.tasks.push({ id: Guid.newGuid(), title: 'test', description: 'test', assignedTo: 'test' } as Task);
    this.categoryService.updateCategory(this.category).subscribe(() => this.getTasks());
  }

  deleteTask(task: Task) {
    this.category.tasks = this.category.tasks.filter(t => t.id !== task.id);
    this.categoryService.updateCategory(this.category).subscribe(() => this.getTasks());
  }

  toggleEdit() {
    this.readonly = this.readonly === 'true' ? 'false' : 'true';
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.category.tasks, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
