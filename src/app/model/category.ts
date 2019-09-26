import { Task } from './task';

export interface ICategory {
    id: number;
    title: string;
    tasks: Task[];
}

export class Category implements ICategory {

    id: number;
    title: string;
    tasks: Task[];

    constructor(id: number, title: string) {
        this.title = title;
        this.tasks = [];
    }
}