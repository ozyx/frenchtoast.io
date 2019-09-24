import { Task } from './task';

export interface ITaskStatus {
    title: string;
    tasks: Task[];
}

export class TaskStatus implements ITaskStatus {

    title: string;
    tasks: Task[];

    constructor(title: string) {
        this.title = title;
        this.tasks = [];
    }
}