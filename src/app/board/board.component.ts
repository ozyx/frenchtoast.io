import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [CategoryService]
})
export class BoardComponent implements OnInit {
  categories: Category[] = [];
  title: string;

  constructor(private categoryService: CategoryService) {
    this.title = 'Test Board';
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => {
        this.categories = categories;
        console.log(categories)
      });
  }

}
