import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  onSubmit(title: string) {
    this.categoryService.add({ title } as Category);
  }
}
