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
  categories: Category[];
  title: string;

  constructor(private categoryService: CategoryService) {
    this.title = 'Test Board';
  }

  ngOnInit() {
    this.categories = this.categoryService.getStatuses();
  }

  onSubmit(title: string) {
    this.categoryService.add(new Category(title));
  }
}
