interface ITask {
    id: number;
    categoryId: number;
    title: string;
    description: string;
    assignedTo: string;
}

export class Task implements ITask {
    id: number;
    categoryId: number;
    title: string;
    description: string;
    assignedTo: string;

    constructor(id: number, categoryId: number, title: string, description: string, assignedTo: string) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.description = description;
        this.assignedTo = assignedTo;
    }
}
