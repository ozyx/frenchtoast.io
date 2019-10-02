import { Task } from './task';

export interface ICategory {
    id: number;
    title: string;
}

export class Category implements ICategory {

    id: number;
    title = '';

    constructor(title: string, id: number) {
        this.id = id;
        this.title = title;
    }
}
