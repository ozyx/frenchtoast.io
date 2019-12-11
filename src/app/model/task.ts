import { Guid } from '../util/util';

interface ITask {
    id: string;
    title: string;
    description: string;
    assignedTo: string;
}

export class Task implements ITask {
    id: string;
    title: string;
    description: string;
    assignedTo: string;

    constructor(id?: string, title?: string, description?: string, assignedTo?: string) {
        this.id = id || Guid.newGuid();
        this.title = title || '';
        this.description = description || '';
        this.assignedTo = assignedTo || '';
    }
}
