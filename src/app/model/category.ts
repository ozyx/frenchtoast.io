import { Task } from './task';

export interface ICategory {
    title: string;
    tasks: Task[];
}

export class Category implements ICategory {

    title: string;
    tasks: Task[];

    constructor(title: string) {
        this.title = title;
        this.tasks = [];
    }
}