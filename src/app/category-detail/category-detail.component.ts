import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/task';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
})
export class CategoryDetailComponent implements OnInit {
  tasks: Task[];
  readonly: string;

  @Input() category: Category;
  constructor(private categoryService: CategoryService) {
    this.tasks = [];
    this.readonly = 'true';
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.categoryService.getCategoryById(this.category.id).subscribe(category => {
      this.tasks = category.tasks !== undefined ? category.tasks : [];
    });
  }

  getTitle(): string {
    return this.category.title;
  }

  // TODO: this should be adding / subscribing to the InMemoryDataService
  add() {
    this.tasks.push(new Task(42, 'test', 'test', 'test'));
  }

  toggleEdit() {
    this.readonly = this.readonly === 'true' ? 'false' : 'true';
  }
}
