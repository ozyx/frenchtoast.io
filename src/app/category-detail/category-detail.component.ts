import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/task';
import { Category } from '../model/category';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  providers: [TaskService]
})
export class CategoryDetailComponent implements OnInit {
  tasks: Task[];
  readonly: string;

  @Input() category: Category;
  constructor(private taskService: TaskService) {
    this.tasks = [];
    this.readonly = 'true';
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks(this.category.id).subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks;
    });
  }

  getTitle(): string {
    return this.category.title;
  }

  // TODO: this should be adding / subscribing to the InMemoryDataService
  addTask() {
    this.taskService.addTask({ categoryId: this.category.id, title: 'test', description: 'test', assignedTo: 'test' } as Task)
      .subscribe(() => {
        this.getTasks();
      });
  }

  toggleEdit() {
    this.readonly = this.readonly === 'true' ? 'false' : 'true';
  }
}
