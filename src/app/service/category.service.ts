import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { STATUSES } from '../mock/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[];

  constructor() {
    this.categories = STATUSES;
  }

  add(category: Category) {
    this.categories.push(category);
  }

  getStatuses(): Category[] {
    return this.categories;
  }
}
