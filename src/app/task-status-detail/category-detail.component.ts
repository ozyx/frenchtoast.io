import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/task'
import { Category } from '../model/category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
})
export class CategoryDetailComponent implements OnInit {
  tasks: Task[];

  @Input() category: Category;
  constructor() { 
  }
  
  ngOnInit() {
    this.tasks = this.category.tasks;
  }
  
  getTitle(): string {
    return this.category.title;
  }

  add() {
    this.category.tasks.push(new Task(42, 'test', 'test', 'test'));
  }
}
