import { Task } from "./task";

interface ITaskStatus {
    title: string;
    tasks: Task[];
}

export class TaskStatus implements ITaskStatus {

    title: string;
    tasks: Task[];

    constructor() {
        this.title = "Backlog";
        this.tasks = [
            new Task(1, "Task1", "Lame task", "Jesse"),
            new Task(2, "Task2", "Cool task", "Canyon"),
            new Task(3, "Task3", "Fun task", "Eric"),]
    }

    public getTasks(): Task[] {
        return this.tasks;
    }

    public getTitle(): string {
        return this.title;
    }
}