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
      {
        id: 1, title: 'Backlog',
        tasks: [
          {
            id: 'a8580614-312c-4ba1-8ff4-0d85a3b04f52',
            title: 'Add login page',
            description: 'Add a simple login page',
            assignedTo: 'Canyon'
          },
          {
            id: '2b8498ba-dc2e-4b2a-8b6b-7364f937571a',
            title: 'Add admin page',
            description: 'Add a simple admin page',
            assignedTo: 'Canyon'
          },
        ]
      },
      {
        id: 2, title: 'In Progress',
        tasks: [
          {
            id: '740bbb77-df25-450e-bcd0-3b3d9c9e58a4',
            title: 'Add a toolbar',
            description: 'Add a toolbar',
            assignedTo: 'Jesse'
          },
          {
            id: '3fd36b52-3fcd-4764-9594-bb29b9a00ba8',
            title: 'Add fun stuff',
            description: 'Add animations',
            assignedTo: 'Canyon'
          }
        ]
      },
      {
        id: 3, title: 'Done',
        tasks: [
          {
            id: '3e243543-fe5f-445c-acc9-7b93908274a8',
            title: 'Setup dev environment',
            description: 'Setup VS code for development',
            assignedTo: 'Eric'
          }
        ]
      },
    ];

    return { categories };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // category/task id + 1.
  // To generate Ids for multiple classes, you can use typescript generics to let genId
  // accept multiple classes. In this case, the parameter 'table' can either be a Category or a Task type.
  // Refer to this stackoverflow post:
  // https://stackoverflow.com/questions/40146811/multiple-collections-in-angular-in-memory-web-api
  genId<T extends Category>(table: T[]): number {
    return table.length > 0 ? Math.max(...table.map(t => t.id)) + 1 : 1;
  }
}
