import { ITaskStatus } from '../model/task-status';

export const STATUSES: ITaskStatus[] = [
    {
        title: "Backlog",
        tasks: [
            {
                id: 1,
                title: "Lame task",
                description: "It's lame",
                assignedTo: "Jesse"
            },
            {
                id: 2,
                title: "Fun task",
                description: "It's fun",
                assignedTo: "Eric"
            },
            {
                id: 3,
                title: "Cool task",
                description: "It's cool",
                assignedTo: "Canyon"
            }
        ]
    },
    {
        title: "In Progress",
        tasks: [
            {
                id: 4,
                title: "Active task",
                description: "I'm doin' it",
                assignedTo: "Jesse"
            }
        ]
    },
    
]