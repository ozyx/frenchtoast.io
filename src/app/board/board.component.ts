import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [CategoryService]
})
export class BoardComponent implements OnInit {
  categories: Category[] = [];
  title: string;

  constructor(private categoryService: CategoryService, private logger: NGXLogger) {
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

  addCategory() {
    this.categoryService.addCategory({ title: '', tasks: [] } as Category)
      .subscribe(newCategory => this.categories.push(newCategory));
  }

  deleteCategory(id: number) {
    this.logger.log(`deleteCategory(${id})  called`);
    this.categories = this.categories.filter(c => c.id != id);
    this.categoryService.deleteCategory(id).subscribe();
  }
}
