import { Task } from './task';

export interface ICategory {
    id: number;
    title: string;
    tasks: Task[];
}

export class Category implements ICategory {

    id: number;
    title = '';
    tasks: Task[] = [];

    constructor(title?: string) {
        if (title) {
            this.title = title;
        }
    }
}
