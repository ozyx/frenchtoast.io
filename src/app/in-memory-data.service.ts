import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ICategory } from './model/category';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categories = [
      {
        id: 0,
        title: 'Backlog',
        tasks: [
          {
            id: 1,
            title: 'Lame task',
            description: 'It\'s lame',
            assignedTo: 'Jesse'
          },
          {
            id: 2,
            title: 'Fun task',
            description: 'It\'s fun',
            assignedTo: 'Eric'
          },
          {
            id: 3,
            title: 'Cool task',
            description: 'It\'s cool',
            assignedTo: 'Canyon'
          }
        ]
      },
      {
        id: 1,
        title: 'In Progress',
        tasks: [
          {
            id: 4,
            title: 'Active task',
            description: 'I\'m doin\' it',
            assignedTo: 'Jesse'
          }
        ]
      },
      {
        id: 2,
        title: 'Done',
        tasks: [
          {
            id: 5,
            title: 'Completed task',
            description: 'It be done mon',
            assignedTo: 'Eric'
          }
        ]
      },

    ];

    return { categories };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(categories: ICategory[]): number {
    return categories.length > 0 ? Math.max(...categories.map(category => category.id)) + 1 : 0;
  }
}
