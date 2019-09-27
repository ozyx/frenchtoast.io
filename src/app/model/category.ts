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

    constructor(title?: string) {
        this.title = "";
        this.tasks = [];
        if (title) {
            this.title = title;
        }
    }
}