import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './model/category';
import { Injectable } from '@angular/core';
import { Task } from './model/task';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categories = [
      { id: 1, title: "Backlog" },
      { id: 2, title: "In Progress" },
      { id: 3, title: "Done" }
    ];

    const tasks = [
      { id: 1, categoryId: 1, title: "Add login page", description: "Add a simple login page", assignedTo: "Canyon" },
      { id: 2, categoryId: 1, title: "Add home page", description: "", assignedTo: "Eric" },
      { id: 3, categoryId: 2, title: "Add a toolbar", description: "Add a toolbar", assignedTo: "Jesse" },
      { id: 4, categoryId: 2, title: "Add fun stuff", description: "Add animations", assignedTo: "Canyon" },
      { id: 5, categoryId: 3, title: "Setup dev environment", description: "Setup VS code for development", assignedTo: "Eric" }
    ];

    return { categories, tasks };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId<T extends Category | Task>(table: T[]): number {
    return table.length > 0 ? Math.max(...table.map(t => t.id)) + 1 : 1;
  }
}
