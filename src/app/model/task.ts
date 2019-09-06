interface ITask {
    id: number;
    title: string;
    description: string;
    assignedTo: string;
}

export class Task implements ITask {
    id: number;
    title: string;
    description: string;
    assignedTo: string;

    constructor(id: number, title: string, description: string, assignedTo: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.assignedTo = assignedTo;
    }
}
