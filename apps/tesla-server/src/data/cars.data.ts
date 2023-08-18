// Models
import { CarModel } from '@data-models';

export const carModels: CarModel[] = [
    {
        // prefer UUID
        id: 'model-s',
        name: 'Model S',
        variants: ['plaid', 'base'],
    },
    {
        // prefer UUID
        id: 'model-3',
        name: 'Model 3',
        variants: ['performance', 'long-range', 'rear-wheel-drive'],
    },
    {
        // prefer UUID
        id: 'model-x',
        name: 'Model X',
        variants: ['plaid', 'base'],
    },
    {
        // prefer UUID
        id: 'model-y',
        name: 'Model Y',
        variants: ['performance', 'long-range', 'rear-wheel-drive'],
    },
];
