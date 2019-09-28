import { ICategory } from '../model/category';

export const CATEGORIES: ICategory[] = [
    {
        id: 0,
        title: 'Backlog',
        tasks: [
            {
                id: 1,
                title: 'Lame task',
                description: 'It\'s lame',
                assignedTo: 'Jesse'
            },
            {
                id: 2,
                title: 'Fun task',
                description: 'It\'s fun',
                assignedTo: 'Eric'
            },
            {
                id: 3,
                title: 'Cool task',
                description: 'It\'s cool',
                assignedTo: 'Canyon'
            }
        ]
    },
    {
        id: 1,
        title: 'In Progress',
        tasks: [
            {
                id: 4,
                title: 'Active task',
                description: 'I\'m doin\' it',
                assignedTo: 'Jesse'
            }
        ]
    },
    {
        id: 2,
        title: 'Done',
        tasks: [
            {
                id: 5,
                title: 'Completed task',
                description: 'It be done mon',
                assignedTo: 'Eric'
            }
        ]
    },

];
