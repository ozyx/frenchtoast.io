import { Task } from './task';

export interface ICategory {
    id: number;
    title: string;
    tasks: Task[];
}

export class Category implements ICategory {

    id: number;
    title = '';
    tasks = [];

    constructor(title: string, id: number) {
        this.id = id;
        this.title = title;
    }
}
