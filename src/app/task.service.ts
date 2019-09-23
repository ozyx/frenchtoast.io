import { Injectable } from '@angular/core';
import { Task } from './model/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return [new Task(1, "cool task", "it's a cool task", "Canyon"), new Task(2, "Lame task", "it's a lame task", "Jesse")]
  }
}
